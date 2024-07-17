import { useMutation } from '@tanstack/react-query';
import {
  checkFirstSubmitByCNPJ,
  saveCompanyAndCalc,
} from '../services/api/company';
import { CompanyType } from '@/types';

export const useCheckFirstSubmitByCNPJ = () => {
  return useMutation({
    mutationFn: ({ cnpj, token }: { cnpj: string; token: string }) =>
      checkFirstSubmitByCNPJ({ cnpj, token }),
  });
};

export const useSaveCompanyAndCalc = () => {
  return useMutation({
    mutationFn: (data: CompanyType) => saveCompanyAndCalc(data),
  });
};
