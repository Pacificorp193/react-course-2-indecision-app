var nameVar = 'Gavin';
nameVar = 'Ricky';
console.log('nameVar', nameVar);

let nameLet = 'Elise';
nameLet = 'Hulia';
console.log('nameLet', nameLet);

const nameConst = 'Jim';
console.log('nameConst', nameConst);

const fullName = 'Amy Sabo';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);