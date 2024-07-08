import { DataCompanyType } from '@/types';
import { createContext, ReactNode, useContext, useState } from 'react';

interface DataCompanyContextType {
  dataCompany: DataCompanyType;
  setDataCompany: (data: DataCompanyType) => void;
}

const dataCompanyContext = createContext<DataCompanyContextType | undefined>(
  undefined,
);

export const useDataCompanyContext = () => {
  const context = useContext(dataCompanyContext);
  if (!context) {
    throw new Error('useDataCompanyContext must be used within a Provider');
  }
  return context;
};

export const DataCompanyProvider = ({ children }: { children: ReactNode }) => {
  const [dataCompany, setDataCompany] = useState<DataCompanyType>({
    name: '',
    email: '',
    tel: '',
    cep: '',
    institutionName: '',
    cnpj: '',
    position: '',
    segment: '',
    momentEnterprise: '',
    statusClinicalEng: '',
    momentCME: '',
  });

  return (
    <dataCompanyContext.Provider value={{ dataCompany, setDataCompany }}>
      {children}
    </dataCompanyContext.Provider>
  );
};
