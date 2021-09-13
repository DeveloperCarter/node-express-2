### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token
- What is the signature portion of the JWT?  What does it do?
The signature is made with your secret key and it's the part that validates that the response was sent from your server.
- If a JWT is intercepted, can the attacker see what's inside the payload?
Not unless they have the secret key.
- How can you implement authentication with a JWT?  Describe how it works at a high level.
Authentication can be implemented by sending a token with every request, if the route gets a JWT with a bad signature, the validation will fail.
- Compare and contrast unit, integration and end-to-end tests.
Unit tests are used to test the specific functions are returning the correct results, Integration testing is used to test that the moving parts of the website that work together are working correctly and End-to-end tests are used to test the entire user flow of a website.
- What is a mock? What are some things you would mock?
A mock is where you fake a request with your own information to test functions like Math.random and await db.query without the wait.
- What is continuous integration?
Continuous integration is a practice where you push results every day or multiple times a day.
- What is an environment variable and what are they used for?
An environtment variable is used to set values in your code from outside the application.
- What is TDD? What are some benefits and drawbacks?
TDD or Test Driven Development is the practice of writing tests before writing the actual code, cutting time off at the end and setting up the idea for your app.
- What is the value of using JSONSchema for validation?
JSONSchema is a lightweight, simple way to validate your json with a familiar format and minimal keywords to use the basic function. There are also autogenerator websites
- What are some ways to decide which code to test?
Test everything that could possibly break or not work correctly.
- What does `RETURNING` do in SQL? When would you use it?
Returning gives an output of anything you could want to return to a user in a query.
- What are some differences between Web Sockets and HTTP?
HTTP needs to constantly request updates, with websockets updates are sent immediately.
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I preferred using Express because it strengthened my grasp on Javascript which i sort of struggled with for a minute. I loved python and flask too though