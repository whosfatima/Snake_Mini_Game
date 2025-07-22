const users = [
  {
    id: 1,
    name: "ali",
    lastName: "Male",
    age: 25,
    gender: "Male",
  },
  {
    id: 2,
    name: "Fatemeh",
    lastName: "Hamzeh",
    age: 17,
    gender: "Female",
  },
  {
    id: 3,
    name: "Negar",
    lastName: "Nazary",
    age: 30,
    gender: "Female",
  },
  {
    id: 4,
    name: "milad",
    lastName: "bahrami",
    age: 27,
    gender: "male",
  },
  {
    id: 5,
    name: "pary",
    lastName: "bahrami",
    age: 27,
    gender: "Female",
  },
  {
    id: 6,
    name: "mohammad",
    lastName: "bahrami",
    age: 27,
    gender: "male",
  },
  {
    id: 7,
    name: "jadi",
    lastName: "bahrami",
    age: 27,
    gender: "male",
  },
  {
    id: 8,
    name: "amir",
    lastName: "bahrami",
    age: 27,
    gender: "male",
  },
  {
    id: 9,
    name: "shapoor",
    lastName: "bahrami",
    age: 27,
    gender: "male",
  },
  {
    id: 10,
    name: "fady",
    lastName: "bahrami",
    age: 27,
    gender: "Female",
  },
];
const UserContainer = document.querySelector('.UserContainer');
const FilterInput = document.querySelector('input');
const FilterBtn = document.querySelector('button');
window.onload = () => {
    const userString = getUserElement(users);
    UserContainer.innerHTML = userString;
}
const getUserElement = (users) => {
  let str = ' ';
  users.forEach((user) => (str += `
    <p>${user.id}</p>
       <div class="UserItem">
            <p><b> First Name: </b>${user.name}</p>
            <p><b> Last Name: </b>${user.lastName}</p>
            <p><b> Age: </b>${user.age}</p>
            <p><b> Gender: </b>${user.gender}</p>
        </div>
    `)
);
return str;

};
FilterBtn.onclick = () => {
    const InputValu = FilterInput.value;
    const filterusers = users.filter(user => user.name.includes(InputValu));
    if(filterusers.length >0) {
      UserContainer.innerHTML = getUserElement(filterusers)
    } else{
      UserContainer.innerHTML='<h1>User Not Found</h1>';
    }}