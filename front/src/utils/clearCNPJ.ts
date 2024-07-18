export const clearCNPJ = (cnpj: string) => {
  const cleanCNPJ = cnpj.replace(/[./-]/g, '');
  return cleanCNPJ;
};
