"use strict";
import users from "./users.js";

const getUserNames = users.map(({ name }) => name);

console.group("Task-1");
console.log(getUserNames);
console.groupEnd();

const getUsersWithEyeColor = (users, color) => {
  return users.filter((users) => users.eyeColor === color);
};
console.group("Task-2");
console.log(getUsersWithEyeColor(users, "blue"));
console.groupEnd();

const getUsersWithGender = (users, gender) => {
  return users.filter((users) => users.gender === gender);
};
console.group("Task-3");
console.log(getUsersWithGender(users, "male"));
console.groupEnd();

const getInactiveUsers = users.filter((user) => !user.isActive);
console.group("Task-4");
console.log(getInactiveUsers);
console.groupEnd();

const getUserWithEmail = (users, email) => {
  return users.find((users) => users.email === email);
};
console.group("Task-5");
console.log(getUserWithEmail(users, "shereeanthony@kog.com"));
console.log(getUserWithEmail(users, "elmahead@omatom.com"));
console.groupEnd();

const getUsersWithAge = (users, min, max) => {
  return users.filter((users) => users.age > min && users.age < max);
};
console.group("Task-6");
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));
console.groupEnd();

const calculateTotalBalance = (users) => {
  return users.reduce((acc, user) => (acc += user.balance), 0);
};
console.group("Task-7");
console.log(calculateTotalBalance(users));
console.groupEnd();

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter((user) => user.friends.includes(friendName))
    .map((user) => user.name);
};
console.group("Task-8");
console.log(getUsersWithFriend(users, "Briana Decker"));
console.log(getUsersWithFriend(users, "Goldie Gentry"));
console.groupEnd();

const getNamesSortedByFriendsCount = users => {
  return [...users]
  .sort((a, b) => a.friends.length - b.friends.length)
  .map((users) => users.name);
  
};
console.group("Task-9");
console.log(getNamesSortedByFriendsCount(users));
console.groupEnd();

const getSortedUniqueSkills = (users) => {
  return users
    .reduce((acc, user) => [...acc, ...user.skills], [])
    .filter((item, index,array) => array.indexOf(item) === index)
    .sort()
};
console.group("Task-10");
console.log(getSortedUniqueSkills(users));
console.groupEnd();