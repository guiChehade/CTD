
// ex1
function polCm(polegadas) {
    cm = polegadas * 2.54;
    console.log(cm+"cm")
}
    polCm(27);

// ex2
function URL(string) {
    console.log("http://www."+string+".com.br")
}
URL("funcaojs");

// ex3
function exclamacao(string) {
    console.log(string+"!")
}
exclamacao("Olá, mundo");

// ex4
function idadeCachorro(idadeHomem) {
    console.log(idadeHomem*7)
}
idadeCachorro(10);

// ex5
function valorHora(salario) {
    console.log(salario/160)
}
valorHora(5000);

// ex6
function imc(peso,altura) {
    imc = peso/(altura*altura);
    console.log(imc);
}
imc(74,1.78);

// ex7
function maiusculas(string) {
    console.log (string.toUpperCase());
}
maiusculas("teste de string maiuscula");

// ex8
function tipo(parametro) {
    console.log (typeof parametro);
}
tipo(5);