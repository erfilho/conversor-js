function validationBinary(_val){
    for(var i = 0; i < _val.length; i++){
        if(_val.charAt(i) != 1 && _val.charAt(i) != 0){
            return "ERR"
        } else {
            return _val
        }
    }
}

function btdConv(_val){
    let _val_size = _val.length - 1
    let inverter = ""
    let res = 0
    for(var a = 0; a <= _val_size; a++){
        inverter += _val.charAt(_val_size - a)
    }
    for(var count = 0; count <= _val_size; count++){
        if(inverter.charAt(count) == 1){
            res += 2**count
        } else if(inverter.charAt(count) == 0){
        } else {
            return "ERR"
        }
    }
    return res
}

function callFunc(_ref, _val){
    let ref = String(_ref)
    switch(ref){
        case "binary-to-decimal": 
            console.log(btdConv(validationBinary(_val)))
            break;
        default:
            console.log('ERR')
    }
}

function typeCheck(){
    let type = document.querySelector('#conv-option').value
    let value = document.querySelector('#input-main').value
    callFunc(type, value)
}
