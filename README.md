# Loan API

## About
Loan API is an API for calculate the amount of monthly payment for a loan and the final cost including the interest.

You need to provide the interest rate and the amount of the loan. 

Keep in mind that this API provides only orientative information based on the  concepts of compound interest formula. 

For more information about this may refer to bibliography as the provided. 

### Bibliography
Truchon, R. P. (1997). Basic business math : A life-skills approach. Course Technology Crisp.

---

## Usage
There are only two options available at the moment, get and post to base url, a get call will provide an OK message, while a post will provide the result of the calculate. 

A post call need to be provided with a JSON Containing data with the following names:
{
    amount: (Original amount of the loan),
    term: (Term of the loan in years),            
    interest: (Rate of Interest per year) 
} 

## License 
[MIT](https://choosealicense.com/licenses/mit/)

This code is under MIT License, you can find a complete description text in the file LICENSE provided in this project, also the complete description is avaliable in the link above. 