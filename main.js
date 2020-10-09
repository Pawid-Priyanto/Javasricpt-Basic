const users = [
    {
        id: 1,
        nama: 'Audi',
        pass: '123456',
        username: 'Audi123',
        pekerjaan: 'Developer',
        alamat: 'mampang prapatan 1',
        hobi: 'jalan-jalan'
    },
    {
        id: 2,
        nama: 'Bima',
        pass: '123456',
        username: 'Bimai8',
        pekerjaan: 'negarawan',
        alamat: 'mampang prapatan 12',
        hobi: 'belanja online'
    },
    {
        id: 3,
        nama: 'Chevo',
        pass: '123456',
        username: 'Chevo11',
        pekerjaan: 'Gitaris',
        alamat: 'mampang prapatan 3',
        hobi: 'sepeda'
    },
    {
        id: 4,
        nama: 'Kia',
        pass: '123456',
        username: 'Kia88',
        pekerjaan: 'Wiraswasta',
        alamat: 'mampang prapatan 4',
        hobi: 'karaoke'
    },
    {
        id: 5,
        nama: 'Galih',
        pass: '123456',
        username: 'Glh123',
        pekerjaan: 'Pelukis',
        alamat: 'mampang prapatan 5',
        hobi: 'jalan-jalan'
    }
]

const table = document.getElementById('table-body');
let editinguser = false;




function printAll() {

    table.innerHTML = '';

    users.forEach((user, index) => {
        const userdatas = 
        `<tr>
            <td>${index + 1}</td>
            <td>${user.nama}</td>
            <td>${user.pass}</td>
            <td>${user.username}</td>
            <td>${user.pekerjaan}</td>
            <td>${user.alamat}</td>
            <td>${user.hobi}</td>
            <td>
            <button class="btn btn-primary btn-sm" onclick="edituserButton(${user.id})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="removeuser(${user.id})">Delete</button>
            </td>
        </tr>`
        table.innerHTML += userdatas;
    });
}

function adduser() {
    
    const newId = users.length;

    const newuser = {
        id: newId+1,
        nama: document.getElementById('nama').value,
        pass: document.getElementById('pass').value,
        username: document.getElementById('username').value,
        pekerjaan: document.getElementById('pekerjaan').value,
        alamat: document.getElementById('alamat').value,
        hobi: document.getElementById('hobi').value
        
    }

    users.push(newuser);
    printAll();

    console.log(users)
}

function removeuser(id) {
    const user = users.findIndex((user) => user.id===id);
    if(users.splice(user, 1)){
        alert("are you sure want to delete?")
    };
    printAll();
    
}


function submituser() {
    if(editinguser) {
        edituser();
    } else {
        adduser();
    }
  
}

function edituser() {
    const nama = document.getElementById('nama').value;
    const pass = document.getElementById('pass').value;
    const username = document.getElementById('username').value;
    const pekerjaan = document.getElementById('pekerjaan').value;
    const alamat = document.getElementById('alamat').value;
    const hobi = document.getElementById('hobi').value;
    editinguser.nama = nama;
    editinguser.pass = pass;
    editinguser.username = username;
    editinguser.pekerjaan = pekerjaan;
    editinguser.alamat = alamat;
    editinguser.hobi = hobi;
    printAll();
    editinguser=false;
}

function edituserButton(id) {
    const user = users.find((user) => user.id===id);
    document.getElementById('nama').value = user.nama;
    document.getElementById('pass').value = user.pass;
    document.getElementById('username').value = user.username;
    document.getElementById('pekerjaan').value = user.pekerjaan;
    document.getElementById('alamat').value = user.alamat;
    document.getElementById('hobi').value = user.hobi;
    editinguser = user;
}

printAll();
// login();

// const check = (form) =>
// {
//     users.filter((value) => {
//         if(form.userid.value == value.username && form.pswrd.value == value.pass)
//         {
//           window.open('index.html')
//         }
//        else
//        {
//          alert("Error Password or Username")
//         }
//     });

// }




function validasi() {

    let user = document.getElementById('username');
    let listNames = ["Audi123","Bimai8","Chevo11","Kia88","Glh123"];
  
  
    for (let i = 0; i < listNames.length; i++) {
      if (listNames[i] === user.value) {
        alert('The username already exist')
      }
    }
    return false;
  }
 