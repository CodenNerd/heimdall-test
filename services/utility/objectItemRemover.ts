import validator from './validator/validator';
import responses from "./responses";
const {VALID, ATTRIBUTE_NOT_FOUND} = responses;

const removeItemFromObject = (data: object, item: string): object|string => {
    const valid = validator(data, [item])
    if (valid !== VALID) return ATTRIBUTE_NOT_FOUND;
    delete (data as any)[item];
    return data
}

export default removeItemFromObject;
