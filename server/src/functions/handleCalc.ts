import { AutoclavesInterface, CompanyDimensionType } from "../utils/types";
import MachinesRepository from "../repositories/machines.repository";

const machinesRepository = new MachinesRepository();

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

export default async function handleCalc(dimensions: CompanyDimensionType) {
    const machines = await machinesRepository.getAll();

    let minAutoclaves = Number.MAX_SAFE_INTEGER;
    let bestAutoclavesConfig: Array<{
        brand: string,
        model: string,
        numMachines: number
    }> = [];

    machines.autoclaves.forEach(({ dataValues: autoclave }) => {
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
    })

    return {
        autoclaves: bestAutoclavesConfig
    };
}