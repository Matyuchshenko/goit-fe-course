"use strict";
import users from "./users.js";

const getInactiveUsers = users.filter(user => !user.isActive);
  
  console.log(getInactiveUsers); 
  // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]