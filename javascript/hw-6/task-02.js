"use strict";
import users from "./users.js";

const getUsersWithEyeColor = (users, color) => {
    const filterByColor = (users) => users.eyeColor === color;
    

    const usersWithEyeColor = users.filter(filterByColor);
    return usersWithEyeColor;
  };

  console.log(getUsersWithEyeColor(users, 'blue'));
   // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
