import { AutoclavesInterface, CompanyDimensionType } from "../utils/types";
import MachinesRepository from "../repositories/machines.repository";

const machinesRepository = new MachinesRepository();

const calcProcessingCapacityCME = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
    const peakDailyTime = dimensions.intervalo_pico_funcionamento_cme - (autoclave.tempo_teste_db + autoclave.tempo_aquecimento);
    const maxCycles = peakDailyTime / (autoclave.tempo_total_ciclo + autoclave.tempo_carga_desc);
    return numAutoclaves * autoclave.vol_util * maxCycles;
}

const calcCapacityUtilization = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
    const processingCapacityCME = calcProcessingCapacityCME(autoclave, dimensions, numAutoclaves);
    return ((dimensions.estimativa_volume_diario.em_litros * 0.90) / processingCapacityCME) * 100;
}

const calcTimeRequiredMinusOne = (autoclave: AutoclavesInterface, dimensions: CompanyDimensionType, numAutoclaves: number) => {
    const cycleTime = autoclave.tempo_total_ciclo + autoclave.tempo_carga_desc;
    return (((((dimensions.estimativa_volume_diario.em_litros * 0.90) / autoclave.vol_util) * cycleTime) 
        + autoclave.tempo_teste_db + autoclave.tempo_aquecimento) / 60) / (numAutoclaves - 1);
}

export default async function calc(dimensions: CompanyDimensionType) {
    const machines = await machinesRepository.getAll();

    let minAutoclaves = Number.MAX_SAFE_INTEGER;
    let bestConfig = null;

    machines.autoclaves.forEach(({ dataValues: autoclave }) => {
        for (let numAutoclaves = 1; numAutoclaves <= 100; numAutoclaves++) {
            const capacityUtilization = calcCapacityUtilization(autoclave, dimensions, numAutoclaves);
            const timeRequiredMinusOne = calcTimeRequiredMinusOne(autoclave, dimensions, numAutoclaves);
            console.log(capacityUtilization)

            if (capacityUtilization< 90 && timeRequiredMinusOne < 20) {
                switch (true) {
                    case numAutoclaves < minAutoclaves:
                        minAutoclaves = numAutoclaves;
                        bestConfig = [{ marca: autoclave.marca, modelo: autoclave.id, numAutoclaves }];
                        break;
                    
                    case numAutoclaves === minAutoclaves:
                        bestConfig.push({ marca: autoclave.marca, modelo: autoclave.id, numAutoclaves });
                        break;
                    
                    default:
                        break;
                }
            }
        };
    })

    return bestConfig;
}