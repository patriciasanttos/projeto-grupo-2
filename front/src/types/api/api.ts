export interface CompanyType {
  dimensions: {
    surgery_rooms: number;
    surgerys_per_day: number;
    week_days_surgery: number;
    uti_beds: number;
    hospital_beds: number;
    tissue_processing: boolean;
    cme_peak_interval: number;
    vol_per_surgery: {
      tissue: number;
      instruments: number;
    };
    vol_per_uti_beds: {
      tissue: number;
      instruments: number;
    };
    vol_per_hospital_beds: {
      tissue: number;
      instruments: number;
    };
  };
  data: {
    cnpj: string;
    name: string;
    email: string;
    company_name: string;
    cep: string;
    phone: string;
    segment: string;
    role: string;
    objective: string;
    situation: string;
  };
}

export interface AutoclaveType {
  brand: string;
  model: string;
  total_vol: number;
  price: number;
}

export interface ThermoWasherType {
  brand: string;
  model: string;
  instruments_capacity: number;
  trachea_capacity: number;
  price: number;
}

export interface CalculatorResponseType {
  autoclaves: AutoclaveType[];
  cnpj: string;
  num_autoclaves: number;
  num_thermo_washers: number;
  thermo_washers: ThermoWasherType[];
}
