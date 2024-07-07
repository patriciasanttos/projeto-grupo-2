import { Request, Response } from "express";
import validateCNPJ from "../functions/validate_cnpj";
import CompanyRepository from "../repositories/companys.repository";
import handleCalc from "../functions/handleMachinesCalc";
import calcDailyEstimate from "../functions/calcDailyEstimate";

const companyRepository = new CompanyRepository();

class MainController {
    checkFirstSubmitByCNPJ = async (request: Request, response: Response) => {
        const { cnpj } = request.params

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        //-----Buscar empresa no banco de dados
        await companyRepository.getCompany(cnpj)
           .then((res: { code: number, data?: {} }) => {
                return response.status(res.code).json(res.data);
            })
    };

    saveCompanyAndCalc = async (request: Request, response: Response) => {
        const { cnpj } = request.body.data

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        const dimensions = calcDailyEstimate(request.body.dimensions);
        //-----Cadastrar empresa no banco de dados
        await companyRepository.createCompany({ data: request.body.data, dimensions })
            .then(async (res: { code: number, data?: {} }) => {
                if (res.code === 409)
                    return response.status(res.code).json(res.data);

                const calcResult = await handleCalc(dimensions);

                return response.status(res.code).json({
                    cnpj,

                    num_autoclaves: calcResult.numAutoclaves,
                    num_thermo_washers: calcResult.numThermoWashers,

                    autoclaves: calcResult.autoclaves,
                    thermo_washers: calcResult.thermoWashers
                });
            });
    };
}

export default MainController;