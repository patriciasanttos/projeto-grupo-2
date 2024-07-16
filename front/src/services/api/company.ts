import { CompanyType } from '@/types';
import { get, post } from './index';

export const checkFirstSubmitByCNPJ = async ({ cnpj, token }: { cnpj: string, token: string }) => {
  return await get(`/${cnpj}`, token);
};

export const saveCompanyAndCalc = async (data: CompanyType) => {
  return await post('/', data);
};
