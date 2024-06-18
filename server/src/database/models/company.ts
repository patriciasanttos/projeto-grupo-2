import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "..";

interface CompanyInfo {
    id: string,
    cnpj: string,
    name: string,
    email: string,
    company_name: string,
    cep: string
    phone: string,
    segment: string,
    role: string,
    objective: string,
    situation: string,
    created_at?: string,
    updated_at?: string,
}

type CompanyInfoCreation = Optional<CompanyInfo, 'id'>;

class Company extends Model<CompanyInfo, CompanyInfoCreation> {
    public id!: string;
    public cnpj!: string;
    public name!: string;
    public email!: string;
    public company_name!: string;
    public cep!: string;
    public phone!: string;
    public segment!: string;
    public role!: string;
    public objective!: string;
    public situation!: string;
    public created_at!: string;
    public updated_at!: string;
}

Company.init({
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
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
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
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