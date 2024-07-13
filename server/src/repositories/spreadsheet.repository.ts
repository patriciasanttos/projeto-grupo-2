import axios from "axios";
import { CompanyType } from "../utils/types";
import calcDailyEstimate from "../functions/calcDailyEstimate";
require('dotenv').config();

export default async function({ data, dimensions: companyDimensions }: CompanyType, machines: { autoclaves: string, thermoWashers: string }) {
    const dimensions = calcDailyEstimate(companyDimensions);

    const dataPost = {
        'Nome': data.name,
        'Cnpj': `${data.cnpj.slice(0, 2)}.${data.cnpj.slice(2, 5)}.${data.cnpj.slice(5, 8)}/${data.cnpj.slice(8, 12)}-${data.cnpj.slice(12, 14)}`,
        'Email': data.email,
        'Nome da empresa': data.company_name,
        'CEP': `${data.cep.slice(0, 5)}-${data.cep.slice(5, 8)}`,
        'Telefone': data.phone,
        'Segmento': data.segment,
        'Cargo': data.role,
        'Momento atual': data.objective,
        'Situação da engenharia': data.situation,

        'Autoclaves': machines.autoclaves,
        'Lavadoras Termodesinfetoras': machines.thermoWashers,
        
        "Salas cirurgicas": dimensions.surgery_rooms,
        "Cirurgias por dia por sala": dimensions.surgerys_per_day,
        "Dias da semana cirurgia": dimensions.week_days_surgery,
        "Leitos UTI": dimensions.uti_beds,
        "Leitos internação": dimensions.hospital_beds,
        "Processamento de tecido": dimensions.tissue_processing ? 'Sim' : 'Não',
        "Intervalo pico funcionamento CME": dimensions.cme_peak_interval,
        "Volume por cirurgia (Tecido)":  dimensions.vol_per_surgery.tissue,
        "Volume por cirurgia (Instrumentos)": dimensions.vol_per_surgery.instruments,
        "Volume por leito UTI (Tecido)": dimensions.vol_per_uti_beds.tissue,
        "Volume por leito UTI (Instrumentos)": dimensions.vol_per_uti_beds.instruments,
        "Volume por leito internacao (Tecido)": dimensions.vol_per_hospital_beds.tissue,
        "Volume por leito internacao (Instrumentos)": dimensions.vol_per_hospital_beds.instruments,
        "Estimativa volume diario (Tecido)": dimensions.daily_vol_estimate.tissue,
        "Estimativa volume diario (Instrumentos)": dimensions.daily_vol_estimate.instruments,
        "Estimativa volume diario total": dimensions.daily_vol_estimate.total,
        "Estimativa volume diario em litros": dimensions.daily_vol_estimate.in_lit
    };

    await axios
        .post(String(process.env.SPREADSHEET_URL), JSON.stringify(dataPost), {
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                valueInputOption: 'RAW'
            }
        })
        .catch(err => console.log(err));
}
