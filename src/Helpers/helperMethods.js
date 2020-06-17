
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
        case 2:
            decimalValue = Number(number.charAt(0))*2 + Number(number.charAt(1))*1
            break;
        case 3:
            decimalValue = Number(number.charAt(0))*4 + Number(number.charAt(1))*2 + Number(number.charAt(2))*1
            break;
        case 4:
            decimalValue = Number(number.charAt(0))*8 + Number(number.charAt(1))*4 + Number(number.charAt(2))*2 + Number(number.charAt(3))*1
            break;
        case 5:
            decimalValue = Number(number.charAt(0))*16 + Number(number.charAt(1))*8 + Number(number.charAt(2))*4 + Number(number.charAt(3))*2 + Number(number.charAt(4))*1
            break;
        case 6:
            decimalValue = Number(number.charAt(0))*32 + Number(number.charAt(1))*16 + Number(number.charAt(2))*8 + Number(number.charAt(3))*4 + Number(number.charAt(4))*2 + Number(number.charAt(5))*1
            break;
        case 7:
            decimalValue = Number(number.charAt(0))*64 + Number(number.charAt(1))*32 + Number(number.charAt(2))*16 + Number(number.charAt(3))*8 + Number(number.charAt(4))*4 + Number(number.charAt(5))*2 + Number(number.charAt(6))*1
            break;
        case 8:
            decimalValue = Number(number.charAt(0))*128 + Number(number.charAt(1))*64 + Number(number.charAt(2))*32 + Number(number.charAt(3))*16 + Number(number.charAt(4))*8 + Number(number.charAt(5))*4 + Number(number.charAt(6))*2 + Number(number.charAt(7))*1
            break;
        default:
            break;
    }

    return decimalValue    
}
