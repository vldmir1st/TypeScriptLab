var users = [
    {
        id: 1,
        name: "Тархов Владимир",
        email: "tarkhov.ve@dvfu.ru",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkExoKtHH_UavRAUFOIPLm4jLxD8J6pbjaA&s",
    },
    {
        id: 2,
        name: "Петров Андрей",
        email: "petrov.aa@dvfu.ru",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhkGvjHUcAkF7ly-gycQqwQSh0Yj3CKixnQ&s",
    },
    {
        id: 3,
        name: "Федорова Елена",
        email: "fedorova.ek@dvfu.ru",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4g551p7Yi3lYhD5RPWE8TKSRsQuCvsuAHfQ&s",
    },
    {
        id: 4,
        name: "Хоменко Владислава",
        email: "homenko.vv@dvfu.ru",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeMFYiatdckQV2oWC18-0UV2V1pJ9dbVGuhw&s",
    },
];
var userListElement = document.getElementById("userList");
function displayUsers(users) {
    userListElement.innerHTML = "";
    users.forEach(function (user) {
        var listItem = document.createElement("li");
        listItem.innerHTML = "\n            <div>\n                <strong>".concat(user.name, "</strong> (").concat(user.email, ")\n                <input type=\"file\" accept=\"image/*\" onchange=\"handleImageUpload(event)\">\n                <button onclick=\"editUser(").concat(user.id, ")\">\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</button>\n            </div>\n            <img src=\"").concat(user.avatar, "\" alt=\"Oops..\" width=\"100\"> ");
        userListElement.appendChild(listItem);
    });
}
function handleImageUpload(event) {
    var input = event.target;
    if (input.files && input.files[0]) {
        var file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var img = document.querySelector("img");
            if (img && e.target) {
                img.src = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}
function editUser(userId) {
    var newName = prompt("Введите новое имя:");
    var newEmail = prompt("Введите новый email:");
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == userId) {
            if (newName != null) {
                users[i].name = newName;
            }
            if (newEmail != null) {
                users[i].email = newEmail;
            }
            displayUsers(users);
            break;
        }
    }
}
window.onload = function () {
    displayUsers(users);
};
