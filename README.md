# Heimdall Technology Technical Test

    This test is for the role of a Node.JS Developer at Heimdall Technologies.
    Start date: Tues, 24th Nov, 2020
    Submission date: Fri, 27th Nov, 2020
    Test material: (https://drive.google.com/file/d/1UDcElbmUITOJjXZ7fUGgKlvTwTLZmOOY/view?usp=sharing)

## To Start the server

    1. Clone the repo
    2. Run `npm i`
    3. Run `npm start`

### Routing convention

- This API is versioned and can be accessed as below
    ```{hostname}:{port}/api/v1/{route}```

Refer to the documentation for more details here: (https://documenter.getpostman.com/view/8001097/TVmHFfrK)

## Tasks Completed (Test Questions)

1. Write a reusable function to perform input validation on a request body

    **Ans:** `./services/utility/validator/validator.ts`

    **Details:**  You can easily test this function on `POST: /api/v1/validate` passing "data" and "rules" as request body properties

2. Create a function to remove an item from an object

    **Ans:** `./services/utility/objectItemRemover.ts`

    **Details:** You can easily test this function on `PUT: /api/v1/item` passing "data" and "item" as request body properties

3. Find the lowest index of the starting points that Aladdin can start his journey...

    **Ans:** `./services/utility/aladdinTravels.ts`

    **Details:** You can easily test this function on `POST: /api/v1/aladdin` passing "n", "magic" and "dist" as request body properties

## Unit Tests

Run `npm test` to run the unit tests for the API

- The tests are written in `./test/test.ts`
- The test data can be found in `./test/testData.ts`

## Documentation

    (https://documenter.getpostman.com/view/8001097/TVmHFfrK)

## Production url

    (https://codennerdheimdalltest.herokuapp.com/)
