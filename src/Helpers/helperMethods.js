
export function stringLength(str) {
    return str.length
}

export function binToDecimal (number) {
    let decimalValue
    const length = stringLength(number)
    switch (length) {
        case 1:
            decimalValue = Number(number)*1
            break;
    
        default:
            break;
    }

    return decimalValue    
}
