import Company from "../database/models/company";
import { CompanyDataType } from "../utils/types";

export default class CompanyRepository {
     async createCompany (data: CompanyDataType) {
        try {
            //-----Erro caso o CNPJ já esteja no banco de dados
            if((await this.getCompany(data.cnpj)).code === 200)
                return {
                    code: 409,
                    data: {
                        error: 'Empresa já cadastrada'
                    }
                }

            //-----Salvar os dados da empresa na tabela
            await Company.create({ ...data });

            return {
                code: 201
            };
        } catch (err: any) {
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
                        error: 'Empresa não encontrada'
                    }
                };
            
            return {
                code: 200
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
