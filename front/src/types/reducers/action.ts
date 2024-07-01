export type ActionLandingPage =
  | {
      type: 'SET_FORM';
      payload: {
        name?: string;
        email?: string;
        tel?: string;
        cep?: string;
        institutionName?: string;
        cnpj?: string;
        position?: string;
        segment?: string;
        momentEnterprise?: string;
        statusClinicalEng?: string;
        momentCME?: string;
      };
    }
  | {
      type: 'SET_CARD';
      payload: string;
    };

export type ActionCalculator =
  | {
      type: 'SET_FORM';
      payload: {
        surgeryRooms?: string;
        icuBeds?: string;
        hospitalizationBeds?: string;
        surgerysPerDay?: string;
        weekDaySurgery?: string;
        fabricProcessing?: boolean;
        instrumentsSurgery?: string;
        fabricSurgery?: string;
        instrumentsICU?: string;
        fabricICU?: string;
        instrumentsHospitalization?: string;
        fabricHospitalization?: string;
        cmePeakInterval?: string;
        page?: string;
      };
    }
  | {
      type: 'SET_PAGE';
      payload: string;
    };
