# User Management API
This is a RESTful API for managing user accounts.

# Getting Started
To get started, you'll need to install the following dependencies:

Node.js
MongoDB
Once you have these installed, you can install the project dependencies:

npm install
You can then start the server using the following command:

npm start
This will start the server on port 5000.

## API Endpoints
Get All Users

GET /user/getAll
Returns a list of all users in the database.

## Create User
POST /user/create
Creates a new user.

### Parameters:

fullName (string, required): The user's full name.
email (string, required): The user's email address.
password (string, required): The user's password.

## Update User
PUT /user/edit
Updates an existing user.

### Parameters:

email (string, required): The email address of the user to update.
fullName (string, optional): The user's updated full name.
password (string, optional): The user's updated password.
## Delete User

DELETE /user/delete
Deletes a user.

### Parameters:

email (string, required): The email address of the user to delete.
Error Handling
If an error occurs, the API will return an error message in JSON format.

Example:
{
  "message": "Email is mandatory!"
}

## Validation
Data validation is performed using the validators.js module. The following validation rules are enforced:

When creating a user, all fields are mandatory.
When updating a user, the email field is mandatory.
When deleting a user, the email field is mandatory.

## Security
User passwords are stored using bcrypt encryption to ensure that they are never stored in plaintext.