export type CompanyType = {
  data: CompanyDataType;
  dimensions: CompanyDimensionType;
};

export type CompanyDataType = {
  id: string,
  cnpj: string,
  name: string,
  email: string,
  company_name: string,
  cep: string,
  phone: string,
  segment: string,
  role: string,
  objective: string,
  situation: string
}

export type CompanyDimensionType = {
  salas_cirurgicas: number,
  cirurgias_por_dia_por_sala: number,
  dias_da_semana_cirurgia: number
  leitos_uti: number,
  leitos_internacao: number,
  processamento_de_tecido: number,
  intervalo_pico_funcionamento_cme: number,
  volume_por_cirurgia: {
    tecido: number,
    instrumentos: number
  },
  volume_por_leito_uti: {
    tecido: number,
    instrumentos: number
  },
  volume_por_leito_internacao: {
    tecido: number,
    instrumentos: number
  },
  estimativa_volume_diario: {
    tecido: number,
    instrumentos: number,
    total: number,
    em_litros: number
  }
}