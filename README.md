# Interview-Task  

Deliverables
* Design - there is a logical design in the design.pdf in the root directory
* Implementation - Spring Boot application developed using Maven 

## Status 
* All tests passing

## Assumptions
* Whoever is running this has Maven installed
* Access to the internet and can reach Mongo Atlas

## Components
* Java 8, Spring Boot 2, Swagger (SpringFox), Mongo Atlas 
* Maven


## Testing Approach 
* BDD for behaviour of the application in terms of its CRUD functionality and field validation
* JUnit for testing the implementation i.e. testing the REST full nature of this without Spring mocks 


## Running 
* git clone https://github.com/jamiephillips0000/interview-task.git
* find the interwiew-task/src/main/resources/application.yml and change the user/pass for Mongo Atlas with the ones I provided in the accompanying email e.g. url : mongodb+srv://<username>:<password>@cluster0.mongodb.net?retryWrites=true 
* cd interview-task
* mvn clean package // check for errors
* mvn spring-boot:run // will run it 
* Using a browser open http://localhost:8080 and veryify you have something working 
* Swagger doc is available here http://localhost:8080/swagger-ui.html
* Architecture
	
