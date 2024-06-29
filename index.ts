interface User {
    id: number;
    name: string;
    email: string;
    avatar: string;
}

const users: User[] = [
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

const userListElement = document.getElementById("userList") as HTMLLIElement;

function displayUsers(users: User[]) {
    userListElement.innerHTML = "";

    users.forEach((user) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div>
                <strong>${user.name}</strong> (${user.email})
                <input type="file" accept="image/*" onchange="handleImageUpload(event)">
                <button onclick="editUser(${user.id})">Редактировать</button>
            </div>
            <img src="${user.avatar}" alt="Oops.." width="100"> `;

        userListElement.appendChild(listItem);
    });
}

function handleImageUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files[0]) {
        const file = input.files[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const img = document.querySelector("img");
            if (img && e.target) {
                img.src = e.target.result as string;
            }
        };

        reader.readAsDataURL(file);
    }
}

function editUser(userId: number) {
    const newName = prompt("Введите новое имя:");
    const newEmail = prompt("Введите новый email:");

    for (let i = 0; i < users.length; i++) {
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

window.onload = () => {
    displayUsers(users);
};
