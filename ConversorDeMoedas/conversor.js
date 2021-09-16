function ConverterDolar() {
    var valorElemento = document.getElementById("valor").value;
    var valorDolar = parseFloat(valorElemento);
  
    var valorEmReal = valorDolar * 5;
  
    var dolarValorConvertido = document.getElementById("dolarConvertido");
  
    var valorConvertidoDolar =
      "O resultado da conversão de dolar em real é: R$ " + valorEmReal;
    dolarValorConvertido.innerHTML = valorConvertidoDolar;
  }
  
  function ConverterEuro() {
    var valorElemento = document.getElementById("valor").value;
  
    var valorEuro = parseFloat(valorElemento);
  
    var valorEmReal = valorEuro * 6;
  
    var euroValorConvertido = document.getElementById("euroConvertido");
  
    var valorConvertidoEuro =
      "O resultado da conversão de euro em real é: R$ " + valorEmReal;
    euroValorConvertido.innerHTML = valorConvertidoEuro;
  }
  