import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { ThermoWashersInterface } from "../../utils/types";

class ThermoWashers extends Model <ThermoWashersInterface> implements ThermoWashersInterface {
    public id!: string;
    public marca!: string;
    public carga_instrumentos!: number;
    public carga_traqueias!: number;
    public tempo_instrumentos!: number;
    public tempo_assistencia_vent!: number;
}

ThermoWashers.init({
    id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    carga_instrumentos: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    carga_traqueias: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_instrumentos: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_assistencia_vent: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: 'thermo_washers',
    sequelize
});

export default ThermoWashers;