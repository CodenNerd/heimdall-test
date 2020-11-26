const isObjectLiteral = (input: any) => {
    return (!!input) && (input.constructor === Object);
}

const isArrayLiteral = (input: any) => {
    return (!!input) && (input.constructor === Array);
};

export {isObjectLiteral, isArrayLiteral};
