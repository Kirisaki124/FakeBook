This web was created by Dam Son Tung HE130134 as final frontend web project
This web is using:
    Nodejs
    React
    Mlab
    MongoDB

How to start project 
    use cmd:
        step 1: get into folder backend and use node index.js
        step 2: get into folder frontend and use yarn start

Post
    .get
    /api/post
        get al post

    .get
    /api/post/:id
        get post by id

    .get
    /api/post/:id/data
        get image of a post

    .post
    /api/post
        create a post

    .delete
    /api/post/:id
        delete a post by id

    .patch
    /api/post/:id
        update a post 

User
    .get
    /api/user
        get all user

    .get
    /api/user/:id
        get user info

    .post
    /api/user
        create user

    .patch
    /api/user/:id
        update user

    .delete
    /api/user/:id
        delete user

Auth
    .get
    /api/auth
        get user info in session

    .post
    /api/auth
        check login if successed save user info in session

    .delete
    /api/auth
        destroy session : logout


