# CSV parser

# Description
This program has a  function that given a search term produces a json with search results that match the data from a CSV file

# Technologies| dependecies
* Nodejs as the runtime environment
* Express as the web framework
* nodemon to restart the server when any change is made
* Typescript as language for development
* Mocha as test library
* chai as assertion library


# Packages
* **src** contains all the files for development
* **node_modules** constains the required javascript modules for the project like express
* **tests** contains all the test files
* **controllers** located with the **src** folder and it handles all the request sent from the routes file
* **servives** located in the **src** folder, handles all the programs logic

# Files
* **app.ts** apps entry point
* **routes.ts** contains the routes to controllers
* **csv-parser-controller.ts** handles the request that comes from router
* **csv-parser-service.ts** handles the programs logic
* **DockerFile** to build an image of the application
  
# Usage

* Enter a search string as a path parameter using postman ```http://localhost:3000/api/Manufacture ```
**Manufacture** here is my search string 
* This will return 
```typescript
   [
    "Manufacture of fruit and vegetable juice",
    "Manufacture of oils and fats",
    "Manufacture of margarine and similar edible fats",
    "Manufacture of other milk products",
    "Manufacture of ice cream",
    "Manufacture of breakfast cereals and cereals-based food",
    "Manufacture of starches and starch products",
    "Manufacture of bread; manufacture of fresh pastry goods and cakes",
    "Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes",
    "Manufacture of macaroni, noodles, couscous and similar farinaceous products",
    "Manufacture of sugar",
    "Manufacture of cocoa and chocolate confectionery",
    "Manufacture of sugar confectionery",
    "Manufacture of condiments and seasonings",
    "Manufacture of prepared meals and dishes",
    "Manufacture of homogenized food preparations and dietetic food",
    "Manufacture of other food products n.e.c.",
    "Manufacture of prepared feeds for farm animals",
    "Manufacture of prepared pet foods",
    "Manufacture of wine from grape"
   ]
```
This request actually returns around 200 values but i limited it to 20. This shows that the csv file is properly parsed.

# Test 
* This test checks that what is returned by the api is has the structure that is expected from it
```typescript
   it('should return the correct body structure', (done) => {
    chai.request(app)
      .get("/api/Manufacture")
      .end((err, res) => {
        expect(res.body).to.be.an("array");
        expect(res.body).to.not.be.empty;
        expect(res.body.length).to.not.above(20);
        done();
      });
  });
```

* This test checks if it returns the correct message and status code if word is not found 
```typescript
 it('should return correct message if word not found', (done) => {
    chai.request(app)
      .get("/api/Manufacture jasep")
      .end((err, res) => {
        expect(res.status).to.equal(404);
        expect(res.body.message).to.equal("word not found")
        done();
      });
  });
```