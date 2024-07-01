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
    instruments: number,
    total: number,
    in_lit: number
  }
}

export interface AutoclavesInterface {
  id: string,
  brand: string,
  total_vol: number,
  useful_vol: number,
  cycle_time: number,
  charging_dischaging_time: number,
  db_test_time: number,
  heating_time: number,
}

export interface ThermoWashersInterface {
  id: string,
  brand: string,
  instruments_capacity: number,
  trachea_capacity: number,
  instruments_time: number,
  vent_assist_time: number,
}