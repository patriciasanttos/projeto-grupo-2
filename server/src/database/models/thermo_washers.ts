import { DataTypes, Model } from "sequelize";
import sequelize from "..";

interface ThermoWashersInfo {
    id: string,
    marca: string,
    carga_instrumentos: number,
    carga_traqueias: number,
    tempo_instrumentos: number,
    tempo_assistencia_vent: number,
}

class ThermoWashers extends Model <ThermoWashersInfo> implements ThermoWashersInfo {
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