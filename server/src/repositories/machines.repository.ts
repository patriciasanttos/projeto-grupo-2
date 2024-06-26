import Autoclaves from "../database/models/autoclaves";
import ThermoWhashers from "../database/models/thermo_washers";

export default class MachinesRepository {
    async getAll() {
        const autoclaves = await Autoclaves.findAll();
        const thermoWhashers = await ThermoWhashers.findAll();

        return {
            autoclaves,
            thermoWhashers
        };
    }
}