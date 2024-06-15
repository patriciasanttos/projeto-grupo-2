import { Request, Response } from "express";

import Company from "../database/models/Company";
import validateCNPJ from "../utils/validate_cnpj";

class MainController {
    get = async (req: Request, res: Response) => {
        const { cnpj } = req.body.data

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return res.status(401).json({ error: 'CNPJ inválido' });

        //-----Cadastrar empresa no banco de dados
        await this.createCompany(req, res);
    }

    private createCompany = async (req: Request, res: Response) => {
        let data = req.body.data

        data.id = data.cnpj;
        delete data.cnpj;

        try {
            //-----Salvar os dados da empresa na tabela
            const company = await Company.create({ ...data });
            
            return res.status(201).json({ company });
        } catch (err: any) {
            //-----Erro caso o CNPJ já esteja no banco de dados
            if (err.parent.code == '23505') {
                return res.status(401).json({ error: 'Empresa já cadastrada' })
            }

            console.log(err)
            return res.status(401).json({ error: 'Erro ao cadastrar empresa' })
        }
    }
}

export default MainController;