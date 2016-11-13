# Devoure the Burger
A full stack restaurant like application.

###[Demo Me!](https://guarded-sierra-71872.herokuapp.com/)

### How it works

* Devour the Burger!!!! is an app that lets users input the names of burgers they'd like to devoure. 

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour!` button. When the user clicks it, the burger will move to the right side of the page; showing record that the burger has been devoured.

### Technologies:
* Server - Node.js, Express framework
* Database - MySql
* Client - Express-handlebars
* Npm modules: express, mysql, express-handlebars, body-parser, path, method-overide

### Design
MVC design pattern and Server side rendering are used. 
* Model - Generic ORM and Custom orm are created to model the database. Custom orm calls the generic orm.
* Views- Views are created using express-handlebars, HTML, CSS
* Controller - Requests coming to the server are handled by the controller/router which in turn communicates with model to get data and passes it to the views. 

### Challenges faced

* Abiding to Handlebars docs
* How to get it to work on heroku, transitioning from local host to heroku.

### Solution:

* Constant referral to the Handlebars docs and overstackflow provided the necessary information. 
* Found the appropriate code for connection.js to launch website on Heroku on OverstackFlow.

* The app will store every burger in a mysql database, whether devoured or not.

### Directory structure:
```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   │   │   └── burger_style.css
│   │   └── img
│   │       └── burger.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```



#### Developed by An Huynh :)