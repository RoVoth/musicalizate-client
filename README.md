# Backlog Quest

<br>

## Description

This is an app for musicians to upload their videos and share opinions.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **error:** As an anon/user I can see a error page if we have some problem with the conecction
-  **Signup:** As an anon I can sign up in the platform so that I can start creating and managing my profile
-  **Login:** As a user I can login to the platform so that I can start creating and managing my profile
-  **Logout:** As a user I can logout from the platform so no one else can modify my information
-  **upload video** As a user I can toogle between different types of media videos
-  **Add elements** As a user I can add elements to my profile
-  **Delete elements** As a user I can delete elements from my profile
-  **Update elements** As a user I can update elements in my profile as done
-  **Check profile** As a user I can check my profile and stats

## Backlog

- New Publications
- Make comments about this Publications
- Video media


<br>


# Client / Frontend

## React Router Routes (React App)
| Path                      | Component                      | Permissions | Behavior                                                     |
| ------------------------- | --------------------           | ----------- | ------------------------------------------------------------ |
| `/`                       | SplashPage                     | public `<Route>`            | Home page                                        |
| `/signup`                 | SignupPage                     | anon only  `<AnonRoute>`    | Signup form, link to login, navigate to homepage after signup |
| `/login`                  | LoginPage                      | anon only `<AnonRoute>`     | Login form, link to signup, navigate to homepage after login  |
| `/publication`            | List of Publications            | anon only `<AnonRoute>`  | Navigate to homepage to the page and you can check the details|
| `/publication/:id/details`| NavBar, Details, Video         | anon only `<AnonRoute>`  | Show the details and preview the video                               |
| `/publication/:id/details`| NavBar, Details, Video         | anon only `<PrivateRoute>`  | Show the details and preview and add a comment                               |
| `/publication/:id/edit`   | NavBar, ElementList video      | user only `<PrivateRoute>`  | Shows the button edit, and if you are the owner you can deleted too              |
| `/profile`          | NavBar, create publication | user only `<PrivateRoute>`  | You can create a new publication and view your own publications                                    |
                            |
          

## Components

- AddMessage

- AddPublications

- NavBar

- ListMessage

- Search

 

 

## Services

- Auth Service
  - auth.login(newUser)
  - auth.signup(user)
  - auth.verify()

- Config Service
  - service(axios)
  - service.interceptors.request.use(config)

  
- Message Service
  - getMessageService(publicationId)
  - newMessageService(newMessage, publicationId)
  - deleteMessageService(messageId)

- Publication Service
  - getPublicationService()
  - getPersonalPublicationService()
  - getPublicationDetailsService(id)
  - addPublicationService(newPublication)
  - deletePublicationService(id)
  - updatePublicationService(id, updatePublication)

- Upload Service
  - uploadService(file)



<br>


# Server / Backend


## Models

User model

```javascript
{
username: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}
```



Publication model

```javascript
 {
title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Pruebas", "Canción Propia", "Versión", "Otros"],
    required: true,
  },
  description: String,
  file: {
    type: String,
  },
  owner: { type: Schema.Types.ObjectId, ref: "User" },
 }
```

Message model

```javascript
 {
  owner: { type: Schema.Types.ObjectId, ref: "User" },

  publication: { type: Schema.Types.ObjectId, ref: "Publication" },

  username: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
 }
```

<br>


## API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
              |
| POST        | `/auth/signup`                  | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                   | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session    |
| GET        | `/auth/verify`                   | (req.payload)                      |               |         | Verify Token elements                                 
| GET        | `/personalPublication`           | {req.payload._id}  |                | 400          | Show the profile elemnts                                         
| POST       | `/publication`                   | { title, category, description, file } |       | 400          | Create elements                                      
| GET         | `/publication/:id`              |                              |                |              | Show the publications elements                         
| DELETE      | `/publication/:id`              |                              |                               | Delete   elements                                     
| PATCH       | `/publication/:id`              |                              |                |              | Edit element
| POST        | `/message/:publicationId`       |                              | 200            | 400          | Create MSG element                         
| GET         | `/message/:messageId`           |                              | 201            | 400          | Show MSG element                                       
| DELETE      | `/message/:messageId`           |                              |                | 400          | Delete MSG elements                                   
| POST        | `/upload`                       |                              |                |              | Upload a video File                                   



<br>


## Links



### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/RoVoth/musicalizate-client.git)

[Server repository Link](https://github.com/RoVoth/musicalizate-server.git)

[Deployed App Link](https://musicalizate.netlify.app/)

### Slides

The url to your presentation slides

[Slides Link](https://)
