import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { AutoclavesInterface } from "../../utils/types";

class Autoclaves extends Model <AutoclavesInterface> {}

Autoclaves.init({
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
    total_vol: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    useful_vol: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    cycle_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    charging_dischaging_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    db_test_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    heating_time: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'autoclaves',
    sequelize
});

export default Autoclaves;