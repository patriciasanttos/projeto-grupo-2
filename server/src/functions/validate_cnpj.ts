const validateCNPJ = (cnpj: any) => {
	cnpj = String(cnpj);

	if (cnpj == '' || cnpj.length != 14 || /^(\d)\1{13}$/.test(cnpj)) return false;

	// Valida DVs
	let length = cnpj.length - 2
	let num = cnpj.substring(0, length);
	let digits = cnpj.substring(length);
	let sum = 0;
	let pos = length - 7;
	for (let i = length; i >= 1; i--) {
		sum += num.charAt(length - i) * pos--;
		if (pos < 2) pos = 9;
	}
	let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
	if (result != digits.charAt(0)) return false;

	length = length + 1;
	num = cnpj.substring(0, length);
	sum = 0;
	pos = length - 7;
	for (let i = length; i >= 1; i--) {
		sum += num.charAt(length - i) * pos--;
		if (pos < 2) pos = 9;
	}
	result = sum % 11 < 2 ? 0 : 11 - sum % 11;

	if (result != digits.charAt(1))
		return false;

	return true;
}

export default validateCNPJ;