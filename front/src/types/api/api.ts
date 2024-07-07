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
