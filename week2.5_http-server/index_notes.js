/************NOTES*************************
creating a http server=> express
node default library => no
we have to install express => npm install express
running the server=> node index.js in terminal
req=request, res=response
to take input from user => const n=req.query.n; (takes n as input) is called query parameters for get requests
to take input from user => const n=req.query.n; (takes n as input) is called query parameters for post requests
JSON IS javascript object notation

to give input as user => (localhost:portnumber/?n=3)


REQUEST METHODS 

GET:
Used to retrieve data from the server.
Requests should have no side effects, meaning they should not change the state of the server.
Example: Fetching a user's profile information.
Request: GET /users/123
Response: Profile data of user 123.

POST:
Used to send data to the server and often to create a new resource.
Can also be used for operations that modify the server's state.
Example: Creating a new user account.
Request: POST /users
Request body: User data (e.g., username, email).
Response: Confirmation of the created resource (e.g., user ID).

PUT:
Used to update or replace an existing resource with the data provided in the request.
If the resource doesn't exist, PUT can create it (though this depends on the implementation).
Example: Updating a user's profile.
Request: PUT /users/123
Request body: Updated user data.
Response: Confirmation of the updated resource.

DELETE:
Used to delete a resource from the server.
Example: Deleting a user's account.
Request: DELETE /users/123
Response: Confirmation of deletion.




STATUS CODES=>
   1 200- EVERYTHING WENT FINE
   2 404- ROUTE IS NOT AVAILABLE
   3 500- MID SURGERY LIGHT WENT AWAY
   4 411- IMPUTS ARE INCORRECT
   5 403- YOU ARE NOT ALLOWED ON THIS SERVER



************EXAMPLE CODE*************************

let us build an express server using example of a hospital*/


const express = require("express"); //building hospital

const app = express(); //creating clinic


function sum(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans = ans + i;
  }
  return ans;
}


app.get("/", function (req, res) {
  const n = req.query.n;
  const ans = sum(n);

//putting the responses in queue
  res.send("hi your ans is " + ans); //sending a response on a request on the server
}
)

app.listen(3000); //doctor's room
