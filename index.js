module.exports = class ConversorDeNumeroRomano {
    converte(numeroEmRomano) {
        if(numeroEmRomano === "I") return 1;
        else if(numeroEmRomano === "V") return 5;
        else if(numeroEmRomano === "X") return 10;
        else if(numeroEmRomano === "L") return 50;
        else if(numeroEmRomano === "C") return 100;
        else if(numeroEmRomano === "D") return 500;
        else if(numeroEmRomano === "M") return 1000;
        return -1;
    }

    romanoParaDecimal(numeroEmRomano){
        var caracter = numeroEmRomano.split(''); // Atribui cada número romano a um array
        var resultado = 0;
        var contRepetido = 0; // Contador que permite apenas 3 repetições do mesmo número romano
        var valorGuardado;
        
        for (var i = 0; i < numeroEmRomano.length; i++){
            var valorAtual = this.converte(caracter[i]);
            
            if(numeroEmRomano.length > i + 1){
                var valorProx = this.converte(caracter[i+1]);

                if(this.converte(caracter[i+1]) < this.converte(caracter[i+2])) return -1; // Garante que não existe um número igual ou menor antes da subtração
                            
                if(valorAtual === valorProx){
                    if(valorGuardado === null || valorGuardado !== valorAtual) contRepetido = 0; // Reseta o contador de repetido se mudar o número
                    if(valorAtual === 5 || valorAtual === 50 || valorAtual === 500) return -1; // Garante que não exista repetição de V, L e D
                    contRepetido++;
                    valorGuardado = valorAtual;
                }

                if(valorAtual >= valorProx){ // Compara os valores para decidir se acontecerá a soma ou a subtração
                    resultado = resultado + valorAtual;
                } else {
                    if(valorAtual === 1 || valorAtual === 10 || valorAtual === 100){ // Garante que a subtração só ocorra com I, X e C
                        resultado = resultado + valorProx - valorAtual;
                        i++;
                    } else {
                        return -1;
                    }
                }
            } else {
                resultado = resultado + valorAtual;
            }
            if(contRepetido > 2) return -1;
        }
        return resultado;
    }
}