"use strict";
import users from "./users.js";

const getUserNames = users.map(({ name }) => name);

console.log(getUserNames);
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
