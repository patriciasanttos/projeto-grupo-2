import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../";

interface CompanyInfo {
    id: string,
    name: string,
    email: string,
    company_name: string,
    cep: number
    phone: number,
    segment: string,
    role: string,
    objective: string,
    situation: string,
    created_at?: string,
    updated_at?: string,
}

class Company extends Model <CompanyInfo> implements CompanyInfo {
    public id!: string;
    public name!: string;
    public email!: string;
    public company_name!: string;
    public cep!: number;
    public phone!: number;
    public segment!: string;
    public role!: string;
    public objective!: string;
    public situation!: string;
    public created_at!: string;
    public updated_at!: string;
}

Company.init({
    id: {
        type: DataTypes.STRING,
        unique: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cep: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },        
    segment: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    objective: {
        type: DataTypes.STRING,
        allowNull: false
    },
    situation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'companys',
    sequelize
});

export default Company;