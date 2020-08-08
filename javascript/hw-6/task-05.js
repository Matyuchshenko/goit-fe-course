"use strict";
import users from "./users.js";

const getUserWithEmail = (users, email) => {
    const userWithEmail = users.find(users => users.email === email);
    return userWithEmail;
    };
  
  
  console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}