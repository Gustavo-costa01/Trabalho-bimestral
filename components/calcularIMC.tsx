type ResultadoIMC = [number, string] | [string];

export function calcularIMC(peso: string, altura: string): ResultadoIMC {
  // Converte vírgulas para pontos e depois para número
  const pesoNum = parseFloat(peso.replace(',', '.'));
  const alturaNum = parseFloat(altura.replace(',', '.'));

  // Verifica se a conversão foi bem-sucedida e se os valores são positivos
  if (isNaN(pesoNum) || pesoNum <= 0) return ['Digite um peso válido'];
  if (isNaN(alturaNum) || alturaNum <= 0) return ['Digite uma altura válida'];

  // Calcula o IMC
  const valorIMC = pesoNum / (alturaNum * alturaNum);
  
  // Determina a classificação
  let classificacao: string;
  
  if (valorIMC < 18.5) classificacao = 'Abaixo do peso';
  else if (valorIMC < 24.9) classificacao = 'Peso normal';
  else if (valorIMC < 29.9) classificacao = 'Sobrepeso';
  else if (valorIMC < 34.9) classificacao = 'Obesidade grau 1';
  else if (valorIMC < 39.9) classificacao = 'Obesidade grau 2';
  else classificacao = 'Obesidade grau 3';

  // Retorna um array com o valor e a classificação
  return [valorIMC, classificacao];
}