# A simple Express Nodejs, Mongodb, TypeScript starter backend. 

Project contains working of node js backend with basic crud operations for users and pictorial data.

Users can be added ,updated, deleted and filtered. All endPoints are tested with postman.


Pictures are too be uploaded on some server like firebase and its url will be sent along with other data. Which then will
stored in monogdb. Add update delete and get apis are provided for pictures.


## How To Start Project

* clone repository to your local machine
* install npm
* run npm install to install node modules
* run mongodb server (Linux-> systemctl start mongod)
* run npm start


## APIs


#### User
###### Create
post: http://localhost:3000/api/user/
{ "name": {
        "first_name": "xxxx",
        "middle_name": "xxxx",
        "last_name": "xxxx"
    },
    "email": "xxxxx",
    "phone_number": "xxxxxxxxxx",
    "gender": "xxxx"
}

###### Get All
get:  http://localhost:3000/api/user/

###### Get 
get:  http://localhost:3000/api/user/_id

###### Update
put: http://localhost:3000/api/user/_id
{ "name": {
        "first_name": "xxxx",
        "middle_name": "xxxx",
        "last_name": "xxxx"
    },
    "email": "xxxxx",
    "phone_number": "xxxxxxxxxx",
    "gender": "xxxx"
}

###### Delete
delete: http://localhost:3000/api/user/_id


#### Picture

###### Create
post : http://localhost:3000/api/data
{ "picture": [{
        "name": "Noman.png",
        "size": "12kb",
        "type": "png",
        "url":"pic.com"
    }],
    "owner": "nomananjum@gmail.com",
    "location": "090078601"
    
}


###### Get All
get : http://localhost:3000/api/data

###### Get 
get : http://localhost:3000/api/data/_id


###### Update
put: http://localhost:3000/api/data/_id

###### Delete
delete: http://localhost:3000/api/data/_id



