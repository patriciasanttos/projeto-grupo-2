import Autoclaves from "../database/models/autoclaves";
import ThermoWashers from "../database/models/thermo_washers";

export default class MachinesRepository {
    async getAll() {
        const autoclaves = await Autoclaves.findAll();
        const thermoWashers = await ThermoWashers.findAll();

        return {
            autoclaves,
            thermoWashers
        };
    }
}