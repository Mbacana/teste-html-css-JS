var numeros = [];

numeros[0] = solicitaPrimeiroNumero();
numeros[1] = solicitaSegundoNumero();

var resultadoDivisao = divida(numeros);

alert('Resultado da divisão:' + resultadoDivisao);

function solicitaPrimeiroNumero() {
var numero1 = prompt('Digite o primeiro numero: ');
if (numero1 < 0){
  alert('O numero precisa ser inteiro e positivo');
  return solicitaPrimeiroNumero();
}
else{
  return numero1;
  }
}

function solicitaSegundoNumero() {
  var numero2 = prompt('Digite o segundo numero: ');
if (numero2 < 0){
  alert('O numero precisa ser inteiro e positivo');
  return solicitaSegundoNumero();
}
else{
  return numero2;
  }
}

function divida(numeros){
  var resultado = 0;
  
  resultado = numeros[0] / numeros[1];
  return resultado;
} 
