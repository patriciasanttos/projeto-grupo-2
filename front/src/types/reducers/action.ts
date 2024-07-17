import { CalculatorResponseType } from '../api/api';

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
    }
  | {
      type: 'SET_ERROR';
      payload: {
        validate?: boolean;
        snackbarError?: boolean;
        firstSubmitError?: string;
      };
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
    }
  | {
      type: 'SET_ERROR';
      payload: {
        validate?: boolean;
      };
    };

export type ActionResult =
  | {
      type: 'SET_MACHINE';
      payload: number;
    }
  | {
      type: 'SET_DATA';
      payload: CalculatorResponseType;
    };
