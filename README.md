## Contact List Management

Contact Agenda that allows to perform different functionalities with the CRUD method, the agenda is called **panchoCorrea**

## *GET*
* Get full agenda
* https://assets.breatheco.de/apis/fake/contact/agenda/

* get a particular agenda
* https://assets.breatheco.de/apis/fake/contact/agenda/panchoCorrea

* get the id with a specific contact
* https://assets.breatheco.de/apis/fake/contact/id


## *POST*
* create a new contact
* https://assets.breatheco.de/apis/fake/contact/
* Body
```javascript
	Body {
					full_name: Francisco Correa,
					email: fcorrea.fernandez@gmail.com,
					phone: 923456789,
					address: Hola 123,
					agenda_slug: "panchoCorrea"
				};
```

## *PUT*
* update a new contact by means of its ID
* https://assets.breatheco.de/apis/fake/contact/id

```javascript
	Body {
					full_name: Francisco Correa,
					email: fcorrea.fernandez@gmail.com,
					phone: 923456789,
					address: Hola 123,
					agenda_slug: "panchoCorrea"
				};
```

## *DELETE*
* delete a contact by means of its ID
* https://assets.breatheco.de/apis/fake/contact/${id}

______________________________________________________________________



# ![alt text](https://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=breathecode,32) Contact Managment Application 

Technologies: HTML, CSS, JS, React, React Router and Context.

Hello! It is time to start doing professional front-end applications. This time
we will be creating a small contact management application that allows users to:
Read, Create, Update and Delete contacts. 

You may use this gif: [Check it out here!](https://github.com/breatheco-de/exercise-contact-list/blob/master/preview.gif?raw=true)

Or you can use these images:
[Image 1](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-1.png?raw=true) and
[Image 2](https://github.com/breatheco-de/exercise-contact-list-context/blob/master/src/img/contact-list-2.png?raw=true)

***Please use the Context for this project:*** The boilerplate comes with the Context configured. Check the ```/store``` folder.

### How to start?

Clone the repository with the boilerplate, it contains no real functionalities 
but it has 99.99% of the HTML/CSS that you'll need for the project, 
allowing you to focus on the functionality.

***Note: You'll need to code all functionalities.***

### The project is divided in: 

#### Two different views: 

1. Contact: Contains the list of contacts.
2. AddContact: It's just a form used to create or update contacts.

#### One component:
ContactCard: displays just one contact.

## TO-DO functionalities

- You have to add the code needed to make your application handle contacts, specifically: 
    - create, 
    - update, 
    - and delete.
- (Optional) Ask the user for confirmation before deleting, use the Modal component for that.

All the functionalities must be implemented in the ```actions``` object (store.js).

Hint: start with some dummy content in the store (store.js).

```Fetch``` the data from the API: https://assets.breatheco.de/apis/fake/contact/

Hint: Use Postman to try the API endpoints before coding.  

## Steps to install this project

##### 1. Clone the repository
```
$ git clone https://github.com/breatheco-de/exercise-contact-list-context.git
```
##### 2. Install the /node_modules
```
$ npm install
```
##### 3. Run the webpack development server
```
$ npm run start
```

That is it! Start coding your React Application :)
