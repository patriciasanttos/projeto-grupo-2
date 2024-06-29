import { AutoclavesInterface, CompanyDimensionType } from "../utils/types";
import MachinesRepository from "../repositories/machines.repository";
import Autoclaves from "../database/models/autoclaves";
import ThermoWashers from "../database/models/thermo_washers";

const machinesRepository = new MachinesRepository();

export default async function handleCalc(dimensions: CompanyDimensionType) {
    const machines = await machinesRepository.getAll();

    const autoclaves = calcAutoclaves(machines.autoclaves, dimensions);
    const thermoWashers = calcThermoWashers(machines.thermoWashers, dimensions);

    return {
        numAutoclaves: Math.max(...autoclaves.map(machine => machine.numMachines)),
        numThermoWashers: 0,

        autoclaves: autoclaves,
        thermoWashers: thermoWashers
    };
}

function calcAutoclaves(autoclaves: Array<Autoclaves>, dimensions: CompanyDimensionType) {
    const calcProcessingCapacityCME = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
        const peakDailyTime = dimensions.cme_peak_interval - (autoclave.db_test_time + autoclave.heating_time);
        const maxCycles = peakDailyTime / (autoclave.cycle_time + autoclave.charging_dischaging_time);
        return numAutoclaves * autoclave.useful_vol * maxCycles;
    }
    
    const calcCapacityUtilization = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
        const processingCapacityCME = calcProcessingCapacityCME(autoclave, dimensions, numAutoclaves);
        return ((dimensions.daily_vol_estimate.in_lit * 0.90) / processingCapacityCME) * 100;
    }
    
    const calcTimeRequiredMinusOne = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
        const cycleTime = autoclave.cycle_time + autoclave.charging_dischaging_time;
        return (((((dimensions.daily_vol_estimate.in_lit * 0.90) / autoclave.useful_vol) * cycleTime) 
            + autoclave.db_test_time + autoclave.heating_time) / 60) / (numAutoclaves - 1);
    }

    let minAutoclaves = Number.MAX_SAFE_INTEGER;
    let bestAutoclavesConfig: Array<{
        brand: string,
        model: string,
        numMachines: number
    }> = [];

    autoclaves.forEach(({ dataValues: autoclave }) => {
        for (let numAutoclaves = 1; numAutoclaves <= 100; numAutoclaves++) {
            const capacityUtilization = calcCapacityUtilization(autoclave, dimensions, numAutoclaves);
            const timeRequiredMinusOne = calcTimeRequiredMinusOne(autoclave, dimensions, numAutoclaves);

            if (capacityUtilization< 90 && timeRequiredMinusOne < 20) {
                switch (true) {
                    case numAutoclaves < minAutoclaves:
                        minAutoclaves = numAutoclaves;
                        bestAutoclavesConfig = [{ brand: autoclave.brand, model: autoclave.id, numMachines: numAutoclaves }];
                        break;
                    
                    case numAutoclaves === minAutoclaves:
                        bestAutoclavesConfig.push({ brand: autoclave.brand, model: autoclave.id, numMachines: numAutoclaves });
                        break;
                    
                    default:
                        break;
                }
            }
        };
    });

    return bestAutoclavesConfig;
}

function calcThermoWashers(thermo_washers: Array<ThermoWashers>, dimensions: CompanyDimensionType) {

}