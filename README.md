## UI Tests

### Setup
```shell
npm install
npx playwright install chromium
cp .env.example .env  # Configure credentials
```

### Scenario 1: Verify Inventory Items
1. Navigate to https://www.saucedemo.com and log in using the following
   credentials:
   ○ Username: standard_user
   ○ Password: secret_sauce
2. Verify that the inventory page displays exactly 6 items.

### Scenario 2: Add Item to Cart
1. Log in as described in Scenario 1.
2. Add the first inventory item to the shopping cart.
3. Verify that the cart badge correctly displays the number 1.

## API Tests
You will implement three API tests for the Airport Gap service, based on the following
scenarios:

### Scenario 1: Verify Airport Count
1. Send a GET request to the endpoint https://airportgap.com/api/airports.
2. Verify that the response contains exactly 30 airports.

### Scenario 2: Verify Specific Airports
1. Send a GET request to the endpoint https://airportgap.com/api/airports.
2. Verify that the response includes the following airports:
   ○ Akureyri Airport
   ○ St. Anthony Airport
   ○ CFB Bagotville

### Scenario 3: Verify Distance Between Airports
1. Send a POST request to the endpoint https://airportgap.com/api/airports/distance
   with parameters for the airports KIX and NRT.
2. Verify that the calculated distance between these airports is greater than 400 km.

Note: You can refer to the API documentation for more details:
https://airportgap.com/docs.