const container = document.querySelector('.container');
const inputName = document.querySelector('.input-name');
const inputUsername = document.querySelector('.input-username');
const inputEmail = document.querySelector('.input-email');
const inputCompany = document.querySelector('.input-company');
const inputCity = document.querySelector('.input-city');
const inputStreet = document.querySelector('.input-street');
const submit = document.querySelector('.submit')

function createDiv(spanValue, infoValue) {
  const info = document.createElement('div');
  const span = document.createElement('span');
  info.appendChild(span);
  span.classList.add('grey');
  span.innerHTML = spanValue;
  info.innerHTML += infoValue;

  return info;
}

function newUser(user){
  const users = document.createElement("div");
  users.classList.add('user');

  const nameDiv = document.createElement("div");
  nameDiv.classList.add('name');
  nameDiv.innerHTML = user.name;
  
  const info = createDiv('Username:', user.username);
  const email = createDiv('Email:', user.email);
  const company = createDiv('Company:', user.company.name);

  const divs = [nameDiv, info, email, company];
  divs.forEach(div => users.appendChild(div));

  users.innerHTML += '<div class="address"> <span class="grey"> ADDRESS:</span> <li> <span class="grey"> CITY:</span> ' +(user.address.city)+'</li> <li> <span class="grey"> STREET:</span>' +(user.address.street)+'</li> </div>';

  container.appendChild(users);
}

  axios 
  .get('http://jsonplaceholder.typicode.com/users')
  .then(response =>  {
    return response.data;
  })
  .then(data => {
    // for(let i=0; i<data.length; i++) {
    //   let div = document.createElement("div");
    //   div.innerHTML = (JSON.stringify(data[i]));
    //   container.appendChild(div);
    // }
    data.forEach(user => {
     newUser(user);
    });
  })
  .catch(error => {
    console.log(error)
  })

submit.addEventListener('click', function (e) {
  e.preventDefault();
  fetch('http://jsonplaceholder.typicode.com/users',{
    method:'POST',
    body: JSON.stringify({
      name: inputName.value,
      username: inputUsername.value,
      email: inputEmail.value,
      company: {
        name: inputCompany.value
      },
      address: {
       city: inputCity.value,
       street: inputStreet.value
      },
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((user) => {
    newUser(user);
  }); 
})
  
// axios
//   .get('http://jsonplaceholder.typicode.com/users')
//   .then((res) => {
//     console.log(res)
//   })
//   .catch(error => console.log(error));

/*const div = document.querySelector('div');
async function main () {
  try {
    const data = await axios .get('http://jsonplaceholder.typicode.com/users');
    console.log(data);
  }
  catch (error) {
    console.log(error);
  }
}
main(); */