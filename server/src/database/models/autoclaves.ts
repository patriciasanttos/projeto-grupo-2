import { DataTypes, Model } from "sequelize";
import sequelize from "..";
import { AutoclavesInterface } from "../../utils/types";

class Autoclaves extends Model <AutoclavesInterface> implements AutoclavesInterface {
    public id!: string;
    public marca!: string;
    public vol_total!: number;
    public vol_util!: number;
    public tempo_total_ciclo!: number;
    public tempo_carga_desc!: number;
    public tempo_teste_db!: number;
    public tempo_aquecimento!: number;
}

Autoclaves.init({
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
    vol_total: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    vol_util: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_total_ciclo: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_carga_desc: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_teste_db: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    tempo_aquecimento: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    tableName: 'autoclaves',
    sequelize
});

export default Autoclaves;