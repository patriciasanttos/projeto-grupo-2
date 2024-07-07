import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { ThermoWashersInterface } from "../../utils/types";

class ThermoWashers extends Model <ThermoWashersInterface> {}

ThermoWashers.init({
    id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    brand: {
        type: DataTypes.STRING,
        allowNull: false
    },
    instruments_capacity: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    trachea_capacity: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    instruments_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    vent_assist_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'thermo_washers',
    sequelize
});

export default ThermoWashers;