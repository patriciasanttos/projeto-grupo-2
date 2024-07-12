import Company from "../database/models/company";
import { CompanyType } from "../utils/types";
import spreadSheetPost from './spreadsheet.repository';

export default class CompanyRepository {
    async createCompany ({ data, dimensions }: CompanyType, machines: { autoclaves: string, thermoWashers: string }) {
        try {
            // -----Erro caso o CNPJ já esteja no banco de dados
            if((await this.getCompany(data.cnpj)).code === 200)
                return {
                    code: 409,
                    data: {
                        error: 'Empresa já cadastrada'
                    }
                }

            // -----Salvar os dados da empresa na tabela
            await Company.create({ ...data });
            await spreadSheetPost({ data, dimensions }, machines);

            return {
                code: 201
            };
        } catch (err: any) {
            console.log(err)
            return {
                code: 400,
                data: {
                    error: 'Erro ao cadastrar empresa',
                }
            }
        }
    };

    async getCompany (cnpj: string) {
        try {
            //-----Buscar CNPJ da empresa na tabela
            const company = await Company.findOne({ where: { cnpj } });

            if (company === null)
                return {
                    code: 404,
                    data: {
                        error: 'Empresa ainda não cadastrada'
                    }
                };

            return {
                code: 200,
                data: {
                    error: 'Empresa já cadastrada'
                }
            };
        } catch (err: any) {
            return {
                code: 500, 
                data: {
                    error: 'Internal Server error'
                }
            }
        }
    };
};
