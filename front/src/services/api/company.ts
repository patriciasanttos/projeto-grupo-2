import { CompanyType } from '@/types';
import { get, post } from './index';

export const checkFirstSubmitByCNPJ = async (cnpj: { cnpj: string }) => {
  return await get('/', cnpj);
};

export const saveCompanyAndCalc = async (data: CompanyType) => {
  return await post('/', data);
};
