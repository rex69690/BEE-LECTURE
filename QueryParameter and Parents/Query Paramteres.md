# Query Paramteres

- used to send data to server in the form of URL commonly used with GET requests
- 
app.get("/profile" , (request , response)=>{
    const {username} =  request.query;
    console.log(username);
    response.send("Profile page of "+ " " + username)
});


toh isme username fetch hojayega using username..

http://localhost:3100/profile?username=tushar&age=19
passing parameters in link


http://localhost:3100/profile/1  = this is used in params

for multipple id instances   = http://localhost:3100/profile/1/2/3


const {id,username} = request.params;  //we use http://localhost:3100/profile/1&tushar