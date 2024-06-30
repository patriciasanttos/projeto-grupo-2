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
