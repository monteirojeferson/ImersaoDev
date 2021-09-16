// var qtdAlunos = parseInt(prompt("Quantidade de Alunos"));

// for(i=1;i<=qtdAlunos;i++){
// var nome =prompt("Nome do Aluno")
// var notaPrimeiroBimestre = parseInt(prompt("Entre com a nota do 1 Bimestre"));
// var notaSegundoBimestre= parseInt(prompt("Entre com a nota do 2 Bimestre"));
// var notaTerceiroBimestre =parseInt(prompt("Entre com a nota do 3 Bimestre"));
// var notaQuartoBimestre= parseInt(prompt("Entre com a nota do 4 Bimestre"));

// var notaFinal =(notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) /4;
  
//   if(notaFinal<6){
//     console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
//     console.log("ALUNO REPROVADO")
//   }
//   else{
//      console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
//     console.log("PARABÉNS, VOCÊ FOI APROVADO")
//   }

// }

// var qtdAlunos = parseInt(prompt("Quantidade de Alunos"));

// for(i=1;i<=qtdAlunos;i++){
// var nome =prompt("Nome do Aluno")
// var notaPrimeiroBimestre = parseInt(prompt("Entre com a nota do 1 Bimestre"));
// var notaSegundoBimestre= parseInt(prompt("Entre com a nota do 2 Bimestre"));
// var notaTerceiroBimestre =parseInt(prompt("Entre com a nota do 3 Bimestre"));
// var notaQuartoBimestre= parseInt(prompt("Entre com a nota do 4 Bimestre"));

// var notaFinal =(notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) /4;
  
//   if(notaFinal<6){
//     alert("Aluno(a)" + nome + " Nota final : " +notaFinal)
//     alert("ALUNO REPROVADO")
//     console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
//     console.log("ALUNO REPROVADO")
//   }
//   else{
//     alert("Aluno(a)" + nome + " Nota final : " +notaFinal)
//     alert("PARABÉNS, VOCÊ FOI APROVADO")
//      console.log("Aluno(a)" + nome + " Nota final : " +notaFinal)
//      console.log("PARABÉNS, VOCÊ FOI APROVADO")
//   }

// }



function Confirmar(){
    var nome = document.getElementById("nome").value;
    
    var nota1 = document.getElementById("nota1").value;
    var nota1Int = parseFloat(nota1);
    
    var nota2 = document.getElementById("nota2").value;
    var nota2Int = parseFloat(nota2);
    
    var nota3 = document.getElementById("nota3").value;
    var nota3Int = parseFloat(nota3);
    
    var nota4 = document.getElementById("nota4").value;
    var nota4Int = parseFloat(nota4);
    // console.log(nota1Int)
    
    var notaFinal =(nota1Int + nota2Int + nota3Int + nota4Int) /4;
    
    var resultado = document.getElementById("resultado")
    
    if(notaFinal<6){
    var resultadoFinal = "O aluno(a)" + nome + " foi reprovado com " + notaFinal 
    resultado.innerHTML = resultadoFinal
    }
    else{
    var resultadoFinal = "O aluno(a)" + nome + " foi aprovado com " + notaFinal 
    resultado.innerHTML = resultadoFinal
    }
    
  }

