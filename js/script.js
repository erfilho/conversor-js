function isNumber(n){ // função que verifica se a string contém apenas números
    return !isNaN(parseFloat(n)) && isFinite(n)
}

function btdConv(_val){
    let res = 0
    try{
        let inverter = ""
        let _val_size = _val.length - 1
        for(var a = 0; a <= _val_size; a++){
            inverter += _val.charAt(_val_size - a)
        }
        for(var count = 0; count <= _val_size; count++){
            if(inverter.charAt(count) == 1){
                res += 2**count
            } else if(inverter.charAt(count) == 0){
            } else {
                throw "Error, the number "+inverter.charAt(count)+" is not acepted!"
            }
        }
    } catch(error){
        return error
    }
    return res
}

function dtbConv(_val){
    let res = 0 // a variável res vai ter o valor em binário
    try{
        if(!isNumber(_val)){
            throw "Error, caracters not acepted!"
        } else {
            let num = _val // o valor vai ser passado para a variável num
            res = (num % 2).toString() // vai pegar o valor do primeiro número binário, bit equivalente a 1
            for(;num > 1;){ // vai iterar enquanto o número for maior que um
                num = parseInt(num/2) // vai pegar o próximo valor a ser pegado o resto da divisão
                res = (num%2) + res // vai somar ao valor binário o resto da divisão
            }
        }
    } catch(error){
        return error
    }
    return res
}

// função utilizada para separar as funções com switch de acordo com o valor do option
function callFunc(_ref, _val){
    try {
        let inputRes = document.querySelector('#input-res')
        let ref = String(_ref)
        switch(ref){
            // case da função que converte binário para decimal
            case "binary-to-decimal": 
                inputRes.value = btdConv(_val)
                break;
            // case da função que converte decimal para binário
            case "decimal-to-binary":
                inputRes.value = dtbConv(_val)
                break;
            default:
                throw "Error in call function\n Function non recognitzed!"
        }
    } catch (error) {
        return error
    }
}

//função principal que irá rodar quando for apertado o botão submit
function typeCheck(){
    let type = document.querySelector('#conv-option').value
    let value = document.querySelector('#input-main').value
    callFunc(type, value)
}
