const isObjectLiteral = (input: any) => {
    return (!!input) && (input.constructor === Object);
}

const isArrayLiteral = (input: any) => {
    return (!!input) && (input.constructor === Array);
};

const isStringLiteral = (input: any) => {
    return (!!input) && (input.constructor === String);
};

export {isObjectLiteral, isArrayLiteral, isStringLiteral};
