import responses from './../responses';
const {VALID} = responses;

const validator = (data: object, rules: Array<string>) : string|string[] => {
    const missingInputItems: string[] = [];
    rules.forEach(rule=>{
        Boolean((data as any)[rule]) ? '' : missingInputItems.push(rule)
    })

    return missingInputItems.length ? missingInputItems : VALID;
}

export default validator;