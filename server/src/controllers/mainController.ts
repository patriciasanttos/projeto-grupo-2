import { Request, Response } from "express";
import validateCNPJ from "../utils/validate_cnpj";
import CompanyRepository from "../repositories/companys.repository";

const companyRepository = new CompanyRepository();

class MainController {
    get = async (request: Request, response: Response) => {
        const { cnpj } = request.body

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        //-----Buscar empresa no banco de dados
        await companyRepository.getCompany(cnpj)
           .then((res: { code: number, data?: {} }) => {
                return response.status(res.code).json(res.data);
            })
    };

    create = async (request: Request, response: Response) => {
        const { cnpj } = request.body.data

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        //-----Cadastrar empresa no banco de dados
        await companyRepository.createCompany(request.body)
            .then((res: { code: number, data?: {} }) => {
                return response.status(res.code).json(res.data);
            })
    };
}

export default MainController;