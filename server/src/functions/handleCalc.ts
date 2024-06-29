import { AutoclavesInterface, CompanyDimensionType, ThermoWashersInterface } from "../utils/types";
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
        numThermoWashers: Math.max(...thermoWashers.map(machine => machine.numMachines)),

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

            if (capacityUtilization < 90 && timeRequiredMinusOne < 20) {
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

    return [ bestAutoclavesConfig[0], bestAutoclavesConfig[1] ];
}

function calcThermoWashers(thermoWashers: Array<ThermoWashers>, dimensions: CompanyDimensionType) {
    const calcProcessingTime = (thermoWasher: ThermoWashersInterface, dimensions: CompanyDimensionType) => {
        const dailyTracheas = ((dimensions.surgery_rooms * dimensions.surgerys_per_day * 3) + (dimensions.uti_beds * 3)) / thermoWasher.trachea_capacity;
        const instruments = (dimensions.daily_vol_estimate.instruments / (thermoWasher.instruments_capacity / 2)) * (thermoWasher.instruments_time + 10);
        const ventAssistTime = dailyTracheas * (thermoWasher.vent_assist_time + 10);

        return instruments + ventAssistTime;
    }

    const calcPercentual = (thermoWashers: ThermoWashersInterface, dimensions: CompanyDimensionType) => {
        const processingTime = calcProcessingTime(thermoWashers, dimensions);
        
        return processingTime / (60 * 24 * 2);
    }

    let minThermoWashers = Number.MAX_SAFE_INTEGER;
    let bestThermoWashersConfig: Array<{
        brand: string,
        model: string,
        numMachines: number
    }> = [];

    thermoWashers.forEach(({ dataValues: thermoWasher }) => {
        for (let numThermoWashers = 1; numThermoWashers <= 100; numThermoWashers++) {
            const percentual = calcPercentual(thermoWasher, dimensions);
            console.log(numThermoWashers === minThermoWashers)

            if (percentual < 0.90) {
                switch (true) {
                    case numThermoWashers < minThermoWashers:
                        minThermoWashers = numThermoWashers;
                        bestThermoWashersConfig = [{ brand: thermoWasher.brand, model: thermoWasher.id, numMachines: numThermoWashers }];
                        break;
                    
                    case numThermoWashers === minThermoWashers:
                        bestThermoWashersConfig.push({ brand: thermoWasher.brand, model: thermoWasher.id, numMachines: numThermoWashers });
                        break;
                    
                    default:
                        break;
                }
            }
        };
    });

    return [ bestThermoWashersConfig[0] ];
}