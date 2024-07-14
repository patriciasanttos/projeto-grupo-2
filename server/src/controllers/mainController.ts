import { Request, Response } from "express";
import validateCNPJ from "../functions/validate_cnpj";
import CompanyRepository from "../repositories/companys.repository";
import handleCalc from "../functions/handleMachinesCalc";
import calcDailyEstimate from "../functions/calcDailyEstimate";
import handleRecaptcha from "../functions/handleRecaptcha";

const companyRepository = new CompanyRepository();

class MainController {
    checkFirstSubmitByCNPJ = async (request: Request, response: Response) => {
        const token = request.headers.authorization
        const { cnpj } = request.params

        if (!token || !cnpj)
            return response.status(400).json({ error: 'Invalid request' });

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        if (!await handleRecaptcha(token))
            return response.status(401).json({ error: 'ReCaptcha error' });
            

        //-----Buscar empresa no banco de dados
        await companyRepository.getCompany(cnpj)
           .then((res: { code: number, data?: {} }) => {
                switch (res.code) {
                    case 200:
                        response.status(401).json(res.data);
                        break;

                    case 404:
                        response.status(200).json(res.data);
                        break;

                    default:
                        response.status(res.code).json(res.data);
                }

                return;
            });
    };

    saveCompanyAndCalc = async (request: Request, response: Response) => {
        if (request.body.data === undefined || request.body.dimensions === undefined)
            return response.status(400).json({ error: 'Invalid body request' });

        const { cnpj } = request.body.data

        //-----Validar CPNJ
        if (!validateCNPJ(cnpj))
            return response.status(400).json({ error: 'CNPJ inválido' });

        //-----Calcular estimativa diária dos materiais
        const dimensions = calcDailyEstimate(request.body.dimensions);

        //-----Calcular máquinas recomendadas
        await handleCalc(dimensions)
            .then(async calcResult => {
                //-----Cadastrar empresa no banco de dados
                const autoclaves = calcResult.autoclaves.map(autoclave => autoclave.model).join('/');
                const thermoWashers = calcResult.thermoWashers.map(thermoWasher => thermoWasher.model).join('/');

                await companyRepository.createCompany(
                    { 
                        data: { 
                            ...request.body.data,
                            autoclaves,
                            thermoWashers
                        }, 
                        dimensions
                    },
                    { autoclaves, thermoWashers }
                ).then(async (res: { code: number, data?: {} }) => {
                    if (res.code === 409)
                        return response.status(res.code).json({ error: 'Empresa já cadastrada' });

                    return response.status(res.code).json({
                        cnpj,
    
                        num_autoclaves: calcResult.numAutoclaves,
                        num_thermo_washers: calcResult.numThermoWashers,
    
                        autoclaves: calcResult.autoclaves,
                        thermo_washers: calcResult.thermoWashers
                    });
                }).catch(() => {
                    return response.status(500).json({
                        error: 'Internal Server Error'
                    });
                });
            })
    };
}

export default MainController;