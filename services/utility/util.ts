const isObjectLiteral = (input: any): boolean => {
    return (!!input) && (input.constructor === Object);
}

const isArrayLiteral = (input: any): boolean => {
    return (!!input) && (input.constructor === Array);
};

const isStringLiteral = (input: any): boolean => {
    return (!!input) && (input.constructor === String);
};

const isNumber = (input: any): boolean => {
    return (!!input) && (parseInt(input).constructor === Number && !isNaN(parseInt(input)));
};

export {isObjectLiteral, isArrayLiteral, isStringLiteral, isNumber};
