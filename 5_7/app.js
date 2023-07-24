
// json API
const api = 'https://jsonplaceholder.typicode.com/todos'
let data =[]

const request = new XMLHttpRequest()
request.addEventListener('readystatechange',()=>{
    if(request.readyState == 4 && request.status == 200){
         data = JSON.parse(request.responseText)
        radioFunc(data)
        // updateUI(data)
        console.log(data)
    }
    else if(request.readyState==4){
        console.log('Error')
    }
    else{
        console.log('Loading')
    }
})

request.open('get',api) // Olmoqdamiz
request.send(); // Va jo'natmoqdamiz

const uli = document.querySelector('ul')
let value
function radioFunc(data) {
    let result = [];
    switch (value) {
      case "true":
        result = data.filter((item) => item.completed);
        break;
      case "false":
        result = data.filter((item) => !item.completed);
        break;
      default:
        result = data;
        break;
    }
    result.forEach((todo, index) => {
      uli.innerHTML += `<li><h3>ID:${todo.id}</h3><h4>${
        todo.completed ? "true" : "false"
      }</h4><p>${todo.title}<p></li>`;
    });
  }
  const getValue = function (radio) {
    uli.innerHTML = "";
    value = radio.value;
    radioFunc(data);
  };

// function updateUI(data){
//     data.slice(0,20).forEach((todo)=>{
//         uli.innerHTML += `
//         <li id="li">
//         <h3 >ID :${todo.id}</h3>
//         <h4 >Compleated : ${todo.cmpleted}</h4>
//         <p >${todo.title}</p>
//     </li>
//         `
//     })
// }
