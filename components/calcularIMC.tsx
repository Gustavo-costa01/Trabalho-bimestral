type ResultadoIMC = [number, string] | [string];

export function calcularIMC(peso: string, altura: string): ResultadoIMC {
  
  const pesoNum = parseFloat(peso.replace(',', '.'));
  const alturaNum = parseFloat(altura.replace(',', '.'));

  if (isNaN(pesoNum) || pesoNum <= 0) return ['Digite um peso válido'];
  if (isNaN(alturaNum) || alturaNum <= 0) return ['Digite uma altura válida'];

  const valorIMC = pesoNum / (alturaNum * alturaNum);
  
  let classificacao: string;
  
  if (valorIMC < 18.5) classificacao = 'Abaixo do peso';
  else if (valorIMC < 24.9) classificacao = 'Peso normal';
  else if (valorIMC < 29.9) classificacao = 'Sobrepeso';
  else if (valorIMC < 34.9) classificacao = 'Obesidade grau 1';
  else if (valorIMC < 39.9) classificacao = 'Obesidade grau 2';
  else classificacao = 'Obesidade grau 3';

  return [valorIMC, classificacao];
}