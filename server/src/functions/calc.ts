import { CompanyDimensionType } from "../utils/types";
import MachinesRepository from "../repositories/machines.repository";

const machinesRepository = new MachinesRepository();

export default async function calc(dimenstions: CompanyDimensionType) {
    const machines = await machinesRepository.getAll();

    return machines;
}