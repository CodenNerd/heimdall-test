# Heimdall Technology Technical Test

## To Start the server

    1. Clone the repo
    2. Run `npm i`
    3. Run `npm start`

### Routing convention

- This API is versioned and can be accessed as below
    ```{hostname}:{port}/api/v1/{route}```

Refer to the documentation for more details here:

## Tasks Completed (Test Questions)

1. Write a reusable function to perform input validation on a request body
    **Ans:** `./services/utility/validator/validator.ts`
    **Details:**  You can test this route on `POST: /api/v1/validate`
