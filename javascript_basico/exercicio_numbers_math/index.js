numero = prompt('Digite um número');
numero = numero.trim();
numero = Number(numero);

const texto = `<div> Raiz quadrada: ${Math.sqrt(numero)} <div /> <br /> 
                <div> ${numero} é inteiro: ${Number.isInteger(numero)} <div /> <br /> 
                <div> É NaN: ${Number.isNaN(numero)} <div /> <br />
                <div> Arredondando para baixo: ${Math.floor(numero)} <div /> <br />
                <div> Arredondando para cima: ${Math.ceil(numero)} <div /> <br />
                <div> Com duas casas decimais: ${Number(numero).toFixed(2)} <div /> <br />`


const elementoNumeroTitulo = document.getElementById('numero-titulo');
const elementoTexto = document.getElementById('texto');

elementoNumeroTitulo.innerHTML = numero;
elementoTexto.innerHTML = texto;