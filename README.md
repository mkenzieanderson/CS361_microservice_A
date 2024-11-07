# CS361_microservice_A

This microservice is a plant light requirement quiz!


It provides a GET request path, which gives the client a JSON object of questions and answer choices that the client is to pose to its user. These questions inquire about the type of plant and the light that it currently receives. This microservice also provides a POST route where the client can send the quiz results back to the microservice. The microservice analyzes the results and crafts a light recommendation message that it sends back in the response.

This microservice uses Node and Express to run locally on your device. Please read the following instructions for setup. 

## Set Up
Note: Node must be installed on your device.
Nodemon must all be installed to your device. If you are not sure, run the following command in your terminal:
- _node --version_

\
If the terminal does not responde with the version number, then you will need to install Node. You can do this through the following line, that installs the nodemon package globally on your device.

- _npm install -g nodemon_

\
Next, navigate to the server director within this project folder. You will need to install a few node packages because the .gitignore file has blocked node modules from being added to this repo.\
\
Type the following command in your terminal:
- _npm install express dotenv cors_



## Running Microservice A
Navigate to the server directory. Run the following command in your terminal:
- _npm run dev_

\
The server should be up and running on local host port 7008



## Calling Microservice A
### GET Request for Quiz Question
By submitting a GET request to the /quiz-questions path, the client will receive a JSON object containing each of the questions and their associated answer choices.

That JSON object is formatted like so:
![quiz questions json](./quiz-questions-json.png)


Here is a sample function that submits the GET quiz-questions request, and stores the Q&A portion of the HTTP reponse in a quizQuestions const:
![GET quiz questions](./get-quiz-questions.png)



TO DO: Provide UML diagram

### POST Request for Results
TO DO: Describe purpose and how to send in quiz results and receive back the recommendation blurb\
TO DO: Provide sample call code\
TO DO: Provide UML diagram

