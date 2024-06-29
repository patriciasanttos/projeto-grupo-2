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
  surgery_rooms: number,
  surgerys_per_day: number,
  week_days_surgery: number
  uti_beds: number,
  hospital_beds: number,
  tissue_processing: number,
  cme_peak_interval: number,
  vol_per_surgery: {
    tissue: number,
    instruments: number
  },
  voluvol_per_uti_bedsme_por_leito_uti: {
    tissue: number,
    instruments: number
  },
  vol_per_hospital_beds: {
    tissue: number,
    instruments: number
  },
  daily_vol_estimate: {
    tissue: number,
    instrumentos: number,
    total: number,
    in_lit: number
  }
}

export interface AutoclavesInterface {
  id: string,
  marca: string,
  vol_total: number,
  vol_util: number,
  tempo_total_ciclo: number,
  tempo_carga_desc: number,
  tempo_teste_db: number,
  tempo_aquecimento: number,
}

export interface ThermoWashersInterface {
  id: string,
  marca: string,
  carga_instrumentos: number,
  carga_traqueias: number,
  tempo_instrumentos: number,
  tempo_assistencia_vent: number,
}