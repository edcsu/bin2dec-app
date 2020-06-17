
export function stringLength(str) {
    return str.ength
}

export function binToDecimal (number, length) {
    let decimalValue
    switch (length) {
        case 1:
            decimalValue = Number(number)*1
            break;
    
        default:
            break;
    }
    return decimalValue    
}
