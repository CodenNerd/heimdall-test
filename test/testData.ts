const testData = {
    /* 
     *  /validate
     */

    validatorMissingInputData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green"},
        "rules": [ "type", "crux", "color", "title" ]
    },
    validatorMissingInputResp: 'title',

    validatorValidInputData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot"},
        "rules": [ "type", "crux", "color", "title" ]
    },
    validatorValidInputResp: 'valid',

    validatorMissingPayloadData: {
        "rules": [ "type", "crux", "color", "title" ]
    },
    validatorMissingPayloadResp: "request body should contain property 'data'",

    validatorWrongFormatData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot"},
        "rules": 22
    },
    validatorWrongFormatResp: "'rules' property should be an array",


    /*
     *  /item
    */
    
    itemRemoveData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" },
        "item": "crux"
    },
    itemRemoveNotResp: 'crux',
    itemRemoveResp: ['type', 'color', 'title'],

    itemNotFoundData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" },
        "item": "cruxes"
    },
    itemNotFoundResp: 'attribute not found',

    itemWrongTypeData: {
        "data": { "type": "durban", "crux": "Indices", "color": "green", "title": "Indict the idiot" },
        "item": 2
    },
    itemWrongTypeResp: "'item' property should be a string",

    itemMissingPropData: {
        "item": "crux"
    },
    itemMissingPropResp: "request body should contain property 'data'",


    /*
     *  /aladdin
     */

    aladdinLowestIndexData: {
        "n": 4,
        "magic": [3, 2, 5, 4],
        "dist": [2, 3, 4, 2]
    },
    aladdinLowestIndexResp: 0,

    aladdinLowestIndexData_2: {
        "n": 5,
        "magic": [1, 24, 0, 4, 3],
        "dist": [2, 3, 4, 2, 6]
    },
    aladdinLowestIndexResp_2: 1,

    aladdinMissionImpossibleData: {
        "n": 5,
        "magic": [1, 2, 0, 4, 3],
        "dist": [2, 3, 4, 2, 6]
    },
    aladdinMissionImpossibleResp: -1,

    aladdinWrongTypeData: {
        "n": 5,
        "magic": "magic",
        "dist": [2, 3, 4, 2, 6]
    },
    aladdinWrongTypeResp: "'magic' property should be an array",

    aladdinMissingPropData: {
        "magic": "magic",
        "dist": [2, 3, 4, 2, 6]
    },
    aladdinMissingPropResp: "request body should contain property 'n'",

    aladdinIncoherentPropsData: {
        "n": 5,
        "magic": [2, 4],
        "dist": [2, 3, 4, 2, 5, 6]
    },
    aladdinIncoherentPropsResp: "properties 'magic' and 'dist' must be of size n (5)"
}

export default testData;
