const div = document.querySelector('div');

axios
  .get('http://jsonplaceholder.typicode.com/users')
  .then(response =>  {
    return response.data
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.log(error)
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