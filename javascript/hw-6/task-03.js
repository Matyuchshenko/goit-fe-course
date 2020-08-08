"use strict";
import users from "./users.js";

const getUsersWithGender = (users, gender) => {
    const filterByGender = (users) => users.gender === gender;

    const usersWithGender = users.filter(filterByGender);
    return usersWithGender;

  };
  
  console.log(getUsersWithGender(users, 'male')); 
  // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]