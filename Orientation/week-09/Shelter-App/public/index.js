
window.onload = () => {
  let luckyTable = document.querySelector('.fillable');
  let unluckyTable = document.querySelector('.unlucky');
  let getDogs = new XMLHttpRequest();
  getDogs.open('GET', 'http://localhost:3022/getDogs',true);
  getDogs.onload = (response) => {
    if (response.target.status = 200) {
      console.log(response.target.response);
      let dogs = JSON.parse(response.target.response);
      dogs.forEach(dog => {
          let row = document.createElement('tr');

          let name = document.createElement('td');
          name.textContent = dog.name;
          row.appendChild(name);


          let age = document.createElement('td');
          age.textContent = dog.age;
          row.appendChild(age);

          let date = document.createElement('td');
          date.textContent = dog.date;
          row.appendChild(date);

          let id = document.createElement('td');
          id.textContent = dog.id;
          row.appendChild(id);

          let hasHome = document.createElement('td');
          hasHome.textContent = dog.hashome === 1 ? "YES" : "NO";
          row.appendChild(hasHome);

          let button = document.createElement('button');
          button.textContent = 'DELETE';
          button.addEventListener('click', (event) => {
            let deleteDog = new XMLHttpRequest();
            deleteDog.open('DELETE', `http://localhost:3022/delete/${dog.id}`, true);
            deleteDog.send();
            // console.log(dog.id);
          })
          row.appendChild(button);

          let takeHomeButton = document.createElement('button');
          takeHomeButton.textContent = 'TAKE HOME';
          takeHomeButton.addEventListener('click', (event) => {
            let takeHomeDog = new XMLHttpRequest();
            takeHomeDog.open('PATCH', `http://localhost:3022/takehome/${dog.id}`, true);
            takeHomeDog.send();
            // console.log(dog.id);
          })
          row.appendChild(takeHomeButton);
          
          if(dog.hashome == 1) {
            luckyTable.appendChild(row);
          }
          else {
            unluckyTable.appendChild(row);
          }
        });
        // console.log(dogs)
    }
  }
  getDogs.send();

  let senddata = document.querySelector('.senddata');
  senddata.addEventListener('submit', (event) => {
    event.preventDefault();
    const {name, age} = event.target.elements;
    console.log(name.value, age.value);
    let bodyToSend = {name: name.value, age: age.value, date: Date.now(), hashome: false};
    let sendDog = new XMLHttpRequest();
    sendDog.open('POST', 'http://localhost:3021/',true);
    sendDog.setRequestHeader("Content-Type", "application/json")
    sendDog.send(JSON.stringify(bodyToSend));
  })
};
