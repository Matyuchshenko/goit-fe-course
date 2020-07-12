const cina = "100";
const chile = "250";

const australia = "170";
const india = "80";
const jamaica = "120";

let country = prompt("Введите страну получатель.");
let countryLower = country.toLocaleLowerCase();

switch (countryLower) {
  case "китай":
    console.log(`Доставка в ${countryLower} будет стоить ${cina} кредитов`);
    break;

  case "чили":
    console.log(`Доставка в ${countryLower} будет стоить ${chile} кредитов`);
    break;

  case "австралия":
    console.log(`Доставка в ${countryLower} будет стоить ${australia} кредитов`);
    break;

  case "индия":
    console.log(`Доставка в ${countryLower} будет стоить ${india} кредитов`);
    break;

  case "ямайка":
    console.log(`Доставка в ${countryLower} будет стоить ${jamaica} кредитов`);
    break;

  default:
    alert("В вашей стране доставка не доступна.");
}
