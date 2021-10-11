# Test Your Knowledge about Fetch

## Question - 01

Which of the following is NOT used to create a request using fetch() and explain why?

A. .this()

B. .then()

C. .json()

D. JSON.stringify()

Answer: A (.this()). `this` in JavaScript refers to the object it belongs to (e.g. in a method, it refers to the owner object.)

## Question - 02

A Promise is a(n)

A. object

B. method

C. state

D. function

Answer: A (object).

## Question - 03

What is wrong with the following code?

```
async function getData() {
  try {
    let response = await fetch('https://api-to-call.com/endpoint', { 
      method: 'POST', 
      body: JSON.stringify({id: 200}), 
      dataType: 'json'
  });
  let jsonResponse = await JSON.stringify(response);
  return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
```

Answer: 

`let jsonResponse = await JSON.stringify(response)` should be `let jsonResponse = response.json()` since this is the case when we try to parses JSOn response into native JavaScript object.

## Question - 04

What is wrong with the following code?

```
async function getData() {
  try {
    let response = await fetch('https://api-to-call.com/endpoint', 'POST', JSON.stringify({id: 200}), 'json');
    let jsonResponse = await response.json();
    return jsonResponse;
  } catch (error) {
    console.log(error);
  }
}
```

Answer:

`fetch('https://api-to-call.com/endpoint', 'POST', JSON.stringify({id: 200}), 'json');` should be 
```
fetch('https://api-to-call.com/endpoint',{ 
    method: 'POST', 
    body: JSON.stringify({id: 200}), 
    dataType: 'json'
});
```