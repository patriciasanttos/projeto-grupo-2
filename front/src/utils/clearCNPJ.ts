export const clearCNPJ = (cnpj: string) => {
  const cleanCNPJ = cnpj.replace(/[./-]/g, '');
  console.log(cleanCNPJ)
  return { cnpj: cleanCNPJ };
};
