var formUser = document.getElementById("formUser");
var btnUser = document.getElementById("btnUser");
var tableUser = document.getElementById("user");

// Fetching  User Data
fetch("http://localhost:2222/user")
  .then(res => res.json())
  .then(res => {
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
