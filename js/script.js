function validation(_val){
    
}

function callFunc(_ref, _val){
    let r = String(_ref)
    switch(r){
        case "binary-to-decimal": 
            btdConv()
            break;
        default:
            console.log('ERR')
    }
}

function typeCheck(){
    let type = document.querySelector('#conv-option').value
    let value = document.querySelector('#input-main').value
    callFunc(type, validation(value))
}
