var qtdAlunos = parseInt(prompt("Quantidade de Alunos"));

for(i=1;i<=qtdAlunos;i++){
var nome =prompt("Nome do Aluno")
var notaPrimeiroBimestre = parseInt(prompt("Entre com a nota do 1 Bimestre"));
var notaSegundoBimestre= parseInt(prompt("Entre com a nota do 2 Bimestre"));
var notaTerceiroBimestre =parseInt(prompt("Entre com a nota do 3 Bimestre"));
var notaQuartoBimestre= parseInt(prompt("Entre com a nota do 4 Bimestre"));

var notaFinal =(notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) /4;
  
  if(notaFinal<6){
    console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
    console.log("ALUNO REPROVADO")
  }
  else{
     console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
    console.log("PARABÉNS, VOCÊ FOI APROVADO")
  }

}


