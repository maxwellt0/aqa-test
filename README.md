ControlUP - Automation Home Test

Welcome to the ControlUp Automation Test! In this assignment, you will implement 2
UI tests and 3 API tests based on the outlined requirements. This exercise aims to
evaluate your coding proficiency, problem-solving skills, and adherence to best
practices.

Instructions
1. Scope of the Test:
   ○ UI Tests: Interact with the online store at https://www.saucedemo.com.
   ○ API Tests: Interact with the Airport Gap API service
   https://airportgap.com.

2. Technical Details:
   ○ You are free to use any programming language and testing tools of your
   choice.
   ○ Submit your completed code via GitHub and share the repository link with
   us.
3. Guidelines:
   ○ Your code should follow clean coding principles and use common design
   standards.
   ○ Ensure your test cases are modular, well-documented, and easy to
   understand.

UI Tests

Scenario 1: Verify Inventory Items
1. Navigate to https://www.saucedemo.com and log in using the following
   credentials:
   a. Username: standard_user
   b. Password: secret_sauce
2. Verify that the inventory page displays exactly 6 items.

Scenario 2: Add Item to Cart
1. Log in as described in Scenario 1.
2. Add the first inventory item to the shopping cart.
3. Verify that the cart badge correctly displays the number 1.

API Tests
You will implement three API tests for the Airport Gap service, based on the following
scenarios:

Scenario 1: Verify Airport Count
1. Send a GET request to the endpoint https://airportgap.com/api/airports.
2. Verify that the response contains exactly 30 airports.

Scenario 2: Verify Specific Airports
1. Send a GET request to the endpoint https://airportgap.com/api/airports.
2. Verify that the response includes the following airports:
   ○ Akureyri Airport
   ○ St. Anthony Airport
   ○ CFB Bagotville

Scenario 3: Verify Distance Between Airports
1. Send a POST request to the endpoint https://airportgap.com/api/airports/distance
   with parameters for the airports KIX and NRT.
2. Verify that the calculated distance between these airports is greater than 400 km.

Note: You can refer to the API documentation for more details:
https://airportgap.com/docs.

Support
For any questions or clarifications, feel free to reach out to us.

Good luck, and we look forward to seeing your solutions!