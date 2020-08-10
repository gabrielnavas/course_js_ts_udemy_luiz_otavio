
if(confirm('Deseja fazer conta?')) {
    
    const num1 = prompt('Digite um número.');
    const num2 = prompt('Digite outro número.');
    
    const conta = Number(num1) + Number(num2);
    
    alert(`Resultado: ${conta}`);
}