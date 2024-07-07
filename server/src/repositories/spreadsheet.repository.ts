import axios from "axios";
import { CompanyType } from "../utils/types";
require('dotenv').config();

export default async function({ data, dimensions }: CompanyType) {
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

        "Salas cirurgicas": dimensions.surgery_rooms,
        "Cirurgias por dia por sala": dimensions.surgerys_per_day,
        "Dias da semana cirurgia": dimensions.week_days_surgery,
        "Leitos UTI": dimensions.uti_beds,
        "Leitos internacao": dimensions.hospital_beds,
        "Processamento de tecido": dimensions.tissue_processing ? 'Sim' : 'Não',
        "Intervalo pico funcionamento CME": dimensions.cme_peak_interval,
        "Volume por cirurgia tecido":  dimensions.vol_per_surgery.tissue,
        "Volume por cirurgia instrumentos": dimensions.vol_per_surgery.instruments,
        "Volume por leito UTI tecido": dimensions.vol_per_uti_beds.tissue,
        "Volume por leito UTI instrumentos": dimensions.vol_per_uti_beds.instruments,
        "Volume por leito internacao tecido": dimensions.vol_per_hospital_beds.tissue,
        "Volume por leito internacao instrumentos": dimensions.vol_per_hospital_beds.instruments,
        "Estimativa volume diario tecido": dimensions.daily_vol_estimate.tissue,
        "Estimativa volume diario instrumentos": dimensions.daily_vol_estimate.instruments,
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
