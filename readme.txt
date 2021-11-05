welcome to my angular repository :) here i explain some of the small webapps i have practiced on
to execute different functions and technical approaches required on a backend development along with 
a basic but user-friendly design in each one of the pages. All the webapps are deployed in netlify,
and the code for each one of them can be reviewed in this repository.

each of the webapps represent a different level of difficulty, starting from project 1 as the easiest
to project 16 which was the hardest


Project 1 - Piano

link: https://rainbow-piano-app.netlify.app

7-tile piano using wav files triggered by a click event


Project 2 - Dices

link: https://random-dice-app.netlify.app

Random dice number generator which triggers a message when both dice numbers are the same


Project 3 - Tasks

link: https://daily-tasks-tracker-app.netlify.app

Task enlisting which displays the task inputs, includes a check mark and a delete button


Project 4 - Exchange

link: https://currency-conversor-app.netlify.app

For currency conversion which dinamically calculates the input number and clearly compares them


Project 5 - BMI

link: https://responsive-bmi-calculator.netlify.app

To calculate body mass index using gender, height, weight and age as inputs, leading to a message
stating if, based on the calculation, the inputs indicate a normal weight, low weight or weight excess.


Project 6 - ConnectedComponents

link: https://salary-table-app.netlify.app

Developed as a brief demonstration for communication between child and parent components, and visceversa.


Project 7 - Appointments

link: https://medical-appointments-schedule.netlify.app

Appointments with time, date, personal information and symptoms, dinamically enlisted on the page.


Project 8 - Budget Calculator

link: https://responsive-budget-calculator-app.netlify.app

Add a budget number, then dinamically lets you enlist your expenses by name and amount, while letting you
compare the initial budget with the remaining amount.


Project 9 - Weather

link: https://temperature-humidity-weather-app.netlify.app

by using an API from the openweathermap webpage, you can use the name of any city in the world to display
the temperature, humidity and weather conditions on that area.


Project 10 - URL Shortener

link: https://bit-ly-shorturl-app.netlify.app

uses an API from the bitly webpage for us to use one of its features, which is the shortening of a webpage
link to make it compact and practical when used.


Project 11 - News Lookup

link:  https://news-by-country-app.netlify.app

uses the API from the newsapi webpage to dinamically enlist news filtered by both categories and countries of
preference.


Project 12 - Random Pictures

link: https://pixabay-pictures-search-app.netlify.app

uses an API from Pixabay to look for random pictures, it displays a small version of the image with its amount
of likes and views, along with a button to display the full resolution of it. If the request display more than
32 matches, the webapp will generate a "next" button for us to continue onto the next page to keep looking for
the desired image.


Project 13 - Credit Card Database

link: https://firebase-creditcard-database-app.netlify.app

The webapp has a connection to a Firebase database where information of credit card owners is stored. at the left
side of the screen we have a form to include new card owners with the respective information, the forn wont accept
submittions if the information is incorrect or invalid, the form has some CSS features which are user friendly for
error checking. Once the submission is complete, the card information will be stored and saved in the database. 
Finally, the card list is then displayed at the right side of the screen along with a delete and a modify button.


Project 14 - Routing and Navigation

link: https://routing-and-navigation-app.netlify.app

brief demonstration of the use of angular routes, i use both dynamic parameters and nested routes. The main dashboard
is connected to an API from the goRest webapp, which returns fake users with several data, the data retrieved is then
distributed on a user friendly manner, each user comes with its profile picture, name, email and a full picture button.
When the full picture button is pressed, the webapp will send us to a single user page based on its id or dynamic 
parameter. Finally the user page has a "go back" button which will allow us to keep on navigating on the other user
profiles. The page displays bootstrap spinners when the information is being loaded.


Project 15 - Employee list with Angular Material

link: https://angular-material-employee-app.netlify.app

Employee database created with Angular Material, has buttons for both edition and deletion of the employee information.
The list has an option for filtering the information based on strings, whatever piece of information enlisted will be 
filtered. Each header on the table has an option for organizing its information by alphabetic order or number. The page
also have a filter displaying the amount of employees desired, from ranges by 5, 10 or 20 employees. It also have 
pagination arrangement, so if the amount of employees is greater than the amount of employees which can be displayed, 
then the arrows will scroll from left to right or backwards onto the employees list.
The webapp also have an "add" options for us to include additional employees into the list, with a matSnackBar popup
which will display either the successful addition of the new employee or an error message giving an user friendly hint on
what information is missing or incorrect for the user to add the information. Finally the employee addition form has
proper information validation for the user to know when the information is being implemented properly, if the information is
missing or if the information is incorrect.


Project 16 - Questions and Answers

link: https://qna-app.netlify.app

Small questionare working as a knowledge game which will validate if the option selected is correct or incorrect. the 
webapp will then save the answers and will display all of them after all the questions have been checked. Finally the webapp 
will have a "go back" button which will reset the answers picked, allowing the user to resolve the questionare once again if
desired. 