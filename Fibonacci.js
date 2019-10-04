var primer_numero = 0;
var segundo_numero = 1;
var resultado;
for ( var i=1; i<100; i++){
  resultado = primer_numero + segundo_numero;
  primer_numero = segundo_numero;
  segundo_numero = resultado;
  document.write(resultado + "<br/>")
}