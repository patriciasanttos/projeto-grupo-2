const validateCNPJ = (cnpj: any) => {
  cnpj = String(cnpj);

  if (cnpj == '' || cnpj.length != 14 || /^(\d)\1{13}$/.test(cnpj)) 
    return false;

  // Valida DVs
  let length = cnpj.length - 2
  let nums = cnpj.substring(0, length);
  let digits = cnpj.substring(length);
  let soma = 0;
  let pos = length - 7;

  for (let i = length; i >= 1; i--) {
    soma += nums.charAt(length - i) * pos--;
    
    if (pos < 2)
      pos = 9;
  }

  let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
  if (resultado != digits.charAt(0))
    return false;

  length = length + 1;
  nums = cnpj.substring(0, length);
  soma = 0;
  pos = length - 7;

  for (let i = length; i >= 1; i--) {
    soma += nums.charAt(length - i) * pos--;

    if (pos < 2) 
      pos = 9;
  }

  resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

  if (resultado != digits.charAt(1))
    return false;

  return true;
}

export default validateCNPJ;