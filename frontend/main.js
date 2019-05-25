var formUser = document.getElementById("formUser");
var btnUser = document.getElementById("btnUser");
var tableUser = document.getElementById("user");

showAllUser();

// Fetching  User Data
function showAllUser() {
  fetch("http://localhost:2222/user")
    .then(res => res.json())
    .then(res => {
      tableUser.innerHTML = "";
      for (var i = 0; i < res.data.length; i++) {
        tableUser.innerHTML += `
                <tr>
                    <th> ${res.data[i].name} </th>
                    <td rowspan="2">
                        <input type="text" placeholder="Input new skill" />
                        <button>add skill</button>
                    </td>
                </tr>
                <tr>
                    <td> ${res.data[i].skill} </td>
                </tr>
            `;
      }
    });
}

function AddUser(url = "", data = {}) {
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(res => {
      showAllUser();
    });
}

// Add User
btnUser.addEventListener("click", function(e) {
  e.preventDefault();
  AddUser("http://localhost:2222/user", { name: formUser.value });
  formUser.value = "";
});
