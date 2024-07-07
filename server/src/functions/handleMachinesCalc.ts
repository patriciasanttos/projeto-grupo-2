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
        numAutoclaves: autoclaves.numMachines,
        numThermoWashers: thermoWashers.numMachines,

        autoclaves: autoclaves.bestAutoclavesConfig,
        thermoWashers: thermoWashers.bestThermoWashersConfig
    };
}

function calcAutoclaves(autoclaves: Array<Autoclaves>, dimensions: CompanyDimensionType) {
    const calcPercentual = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
        const peakProcessing = dimensions.daily_vol_estimate.in_lit * 0.90;
        const dailyPeak = (dimensions.cme_peak_interval * 60) - (autoclave.db_test_time + autoclave.heating_time);
        const processingCapacityCME = dailyPeak / (autoclave.cycle_time + autoclave.charging_dischaging_time)
        return peakProcessing / (numAutoclaves * autoclave.useful_vol * processingCapacityCME); 
    }

    const calcTimeRequiredMinusOne = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
        const cycleTime = autoclave.cycle_time + autoclave.charging_dischaging_time;
        return (((((dimensions.daily_vol_estimate.in_lit * 0.90) / autoclave.useful_vol) * cycleTime) 
            + autoclave.db_test_time + autoclave.heating_time) / 60) / (numAutoclaves - 1);
    }

    let numMachines = 1;
    let minAutoclaves = Number.MAX_SAFE_INTEGER;
    let bestAutoclavesConfig: Array<{
        brand: string,
        model: string,
        total_vol: number,
        price: number
    }> = [];

    autoclaves.forEach(({ dataValues: autoclave }) => {
        for (let numAutoclaves = 1; numAutoclaves <= 100; numAutoclaves++) {
            const percentual = calcPercentual(autoclave, dimensions, numAutoclaves);
            const timeRequiredMinusOne = calcTimeRequiredMinusOne(autoclave, dimensions, numAutoclaves);

            if (percentual < 0.90 && timeRequiredMinusOne < 20) {
                switch (true) {
                    case numAutoclaves < minAutoclaves:
                        minAutoclaves = numAutoclaves;
                        numMachines = numAutoclaves;
                        bestAutoclavesConfig = [{ 
                            brand: autoclave.brand, 
                            model: autoclave.id,
                            total_vol: autoclave.total_vol,
                            price: autoclave.price
                        }];
                        break;
                    
                    case numAutoclaves === minAutoclaves:
                        bestAutoclavesConfig.push({ 
                            brand: autoclave.brand, 
                            model: autoclave.id,
                            total_vol: autoclave.total_vol,
                            price: autoclave.price
                        });
                        break;
                    
                    default:
                        break;
                }
            }
        };
    });


    return {
        numMachines,
        bestAutoclavesConfig: [ bestAutoclavesConfig[0], bestAutoclavesConfig[1] ]
    };
}

function calcThermoWashers(thermoWashers: Array<ThermoWashers>, dimensions: CompanyDimensionType) {
    const calcPercentual = (thermoWasher: ThermoWashersInterface, dimensions: CompanyDimensionType) => {
        const dailyTracheas = ((dimensions.surgery_rooms * dimensions.surgerys_per_day * 3) + (dimensions.uti_beds * 3)) / thermoWasher.trachea_capacity;
        const instruments = (dimensions.daily_vol_estimate.instruments / (thermoWasher.instruments_capacity / 2)) * (thermoWasher.instruments_time + 10);
        const ventAssistTime = dailyTracheas * (thermoWasher.vent_assist_time + 10);

        return (instruments + ventAssistTime) / (60 * 24 * 1);
    }

    let numMachines = 1;
    let minThermoWashers = Number.MAX_SAFE_INTEGER;
    let bestThermoWashersConfig: Array<{
        brand: string,
        model: string,
        price: number
    }> = [];

    thermoWashers.forEach(({ dataValues: thermoWasher }) => {
        for (let numThermoWashers = 1; numThermoWashers <= 100; numThermoWashers++) {
            const percentual = calcPercentual(thermoWasher, dimensions);

            if (percentual < 0.90) {
                switch (true) {
                    case numThermoWashers < minThermoWashers:
                        minThermoWashers = numThermoWashers;
                        numMachines = numThermoWashers;
                        bestThermoWashersConfig = [{ 
                            brand: thermoWasher.brand, 
                            model: thermoWasher.id,
                            price: thermoWasher.price
                        }];
                        break;
                    
                    case numThermoWashers === minThermoWashers:
                        bestThermoWashersConfig.push({ 
                            brand: thermoWasher.brand, 
                            model: thermoWasher.id,
                            price: thermoWasher.price
                        });
                        break;
                    
                    default:
                        break;
                }
            }
        };
    });

    return {
        numMachines,
        bestThermoWashersConfig: [ bestThermoWashersConfig[0] ]
    };
}