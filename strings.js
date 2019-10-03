/**
 * Recebe uma string com a palavra e retorna uma string invertida.
 * Exemplos:
 *  - bom dia -> aid mob
 *  - eu sei -> ies ue
 * 
 * @param {String} palavra 
 * @return string com a palavra invertida
 */
function inverterPalavras(palavra) {
        
    ListaFim = ""
    for (var i = palavra.length - 1; i >= 0; i--) {
        ListaFim += palavra[i];
    }
    return ListaFim
}

/**
 * Escreva uma função que recebe uma String com a data no formato brasileiro (dia/mês/ano) e
 * converta para o formato: 'Dia de Mês Extenso de Ano'. 
 * Exemplos:
 *  - 10/11/2019 -> 10 de Novembro de 2019
 *  - 03/02/2000 -> 03 de Fevereiro de 2000
 * OBS: Note a letra maiúscula do mês.
 * 
 * @param {String} data 
 * @returns {String} data no formato 
 */
function converteDataParaFormaCompleta(data){
    
    var dia = data[0] + data[1];
    var mes = data[3] + data[4];
    var ano = data[6]+data[7]+data[8]+data[9];

    switch(mes) {
        case '01':
            let resp = dia + " de Janeiro de " + ano ; 
        return resp 
            break;
        case '02':
            let resp = dia + " de Fevereiro de " + ano ; 
        return resp 
            break;
        case '03':
            let resp = dia + " de Março de " + ano ; 
        return resp 
            break;
        case '04':
            let resp = dia + " de Abril de " + ano ; 
        return resp 
            break;
        case '05':
            let resp = dia + " de Maio de " + ano ; 
        return resp 
            break;
        case '06':
            let resp = dia + " de Junho de " + ano ; 
        return resp 
            break;
        case '07':
            let resp = dia + " de Julho de " + ano ; 
        return resp 
            break;
          break;
        case '08':
            let resp = dia + " de Agosto de " + ano ; 
        return resp 
            break;
        case '09':
            let resp = dia + " de Setembro de " + ano ; 
        return resp 
            break;
          break;
        case '10':
            let resp = dia + " de Outubro de " + ano ; 
        return resp 
            break;
        case '11':
            let resp = dia + " de Novembro de " + ano ; 
        return resp 
            break;
        case '12':
            let resp = dia + " de Dezembro de " + ano ; 
        return resp 
            break;
        default:
        
        return 'Outro' 
            break;
      }

 }