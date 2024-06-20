import axios from "axios";
import { CompanyType } from "../utils/types";
const dotenv = require("dotenv");

dotenv.config();

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

        "Salas cirurgicas": dimensions.salas_cirurgicas,
        "Cirurgias por dia por sala": dimensions.cirurgias_por_dia_por_sala,
        "Dias da semana cirurgia": dimensions.dias_da_semana_cirurgia,
        "Leitos UTI": dimensions.leitos_uti,
        "Leitos internacao": dimensions.leitos_internacao,
        "Processamento de tecido": dimensions.processamento_de_tecido ? 'Sim' : 'Não',
        "Intervalo pico funcionamento CME": dimensions.intervalo_pico_funcionamento_cme,
        "Volume por cirurgia tecido":  dimensions.volume_por_cirurgia.tecido,
        "Volume por cirurgia instrumentos": dimensions.volume_por_cirurgia.instrumentos,
        "Volume por leito UTI tecido": dimensions.volume_por_leito_uti.tecido,
        "Volume por leito UTI instrumentos": dimensions.volume_por_leito_uti.instrumentos,
        "Volume por leito internacao tecido": dimensions.volume_por_leito_internacao.tecido,
        "Volume por leito internacao instrumentos": dimensions.volume_por_leito_internacao.instrumentos,
        "Estimativa volume diario tecido": dimensions.estimativa_volume_diario.tecido,
        "Estimativa volume diario instrumentos": dimensions.estimativa_volume_diario.instrumentos,
        "Estimativa volume diario total": dimensions.estimativa_volume_diario.total,
        "Estimativa volume diario em litros": dimensions.estimativa_volume_diario.em_litros
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
        .catch(err => console.log(err))
}
