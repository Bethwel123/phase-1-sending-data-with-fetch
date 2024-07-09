// Add your code here
const configurationObject = {
    method: "POST",
    headers: {
        "content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle",
    }),
  };

fetch('http://localhost:3000/dogs', configurationObject)
.then(res => res.json)
.then(object => HTMLFormControlsCollection.log(object))
.catch(function (error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
});

function submitData(name, email) {
  return fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({ name: name, email: email })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const id = data.id;
    const newId = document.createElement('p');
    newId.textContent = `New User ID: ${id}`;
    document.body.appendChild(newId);
  })
  .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorMessage);
  });
}