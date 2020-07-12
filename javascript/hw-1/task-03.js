const ADMIN_PASSWORD = "qwe123";
let message;

message = prompt("Введите пароль");
if (message === ADMIN_PASSWORD) {
  console.log("Добро пожаловать!");
}else if (message === null) {
  console.log("Отменено пользователем.");
} else if (message !== ADMIN_PASSWORD) {
  console.log("Доступ запрещён, неверный пароль.");
}

alert(message);