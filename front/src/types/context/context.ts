export interface DataCompanyType {
  dimensions: {
    surgeryRooms: string;
    icuBeds: string;
    hospitalizationBeds: string;
    surgerysPerDay: string;
    weekDaySurgery: string;
    fabricProcessing: boolean;
    instrumentsSurgery: string;
    fabricSurgery: string;
    instrumentsICU: string;
    fabricICU: string;
    instrumentsHospitalization: string;
    fabricHospitalization: string;
    cmePeakInterval: string;
  };
  data: {
    name: string;
    email: string;
    tel: string;
    cep: string;
    institutionName: string;
    cnpj: string;
    position: string;
    segment: string;
    momentEnterprise: string;
    statusClinicalEng: string;
    momentCME: string;
  };
}
