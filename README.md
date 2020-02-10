## Rest-In-Peace ##

This is a simple ***RESTful API*** with a single endpoint that fetches the data in the provided *MongoDB* collection. It is implemented in *Node.js* using *Express* framework. Also, *Jest* and *Supertest* is used for testing purposes.

### Details ###

![img](https://i.ibb.co/hgftLZw/Database.jpg)

Here, we have an example of data that is included in the MongoDB collection. We want to retrieve all the data that is matching to the parameters which are included in our post request payload.

* **URL**

  <https://salty-castle-81259.herokuapp.com/>

* **Method:**
  
  `POST`
  
* **Data Params**

  The request payload should include a JSON with 4 fields: </br>
    * “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. It filters the data using “createdAt”.
    * “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the documents should be between “minCount” and “maxCount”.

* **An Example Success Response:**

   <pre>
   { 
      "code": 0,
      "msg": "Success",
      "records": [
          {
              "key": "tb8103XIMD8zQm28",
              "createdAt": "2017-01-31T06:40:56.025Z",
              "totalCount": 10
          },
          {
              "key": "Q5hgztVvq2oz7nLh",
              "createdAt": "2017-01-31T09:12:32.948Z",
              "totalCount": 10
          },
          ...
      ] 
   }</pre>
 
* **Error Responses:**

   <pre>
   {
      "code": 1,
      "msg": "Error",
      "description": "The start date should be less than or equal to the end date"
   }</pre>
   
   <pre>
   {
      "code": 1,
      "msg": "Error",
      "description": "The minCount should be less than or equal to the maxCount"
   }</pre>

* **Sample Call:**

  `curl -d '{"startDate": "2017-01-31","endDate": "2017-02-01","minCount": 10,"maxCount": 3000}' -H 'Content-Type: application/json' https://salty-castle-81259.herokuapp.com/`
  
  or you can use ***POSTMAN*** to make requests.
