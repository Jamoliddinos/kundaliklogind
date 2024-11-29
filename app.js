// JSON formatidagi ma'lumotlar (Exceldan olingan)
const data = [
    { name: "Dilshodbek", surname: "Abdubakirov", birthdate: "2008-08-23", login: "dabdubakirov" },
    { name: "Bilol", surname: "Abdurahmonov", birthdate: "2008-09-27", login: "bilol.abdurahmonov" },
    { name: "Shohruzbek", surname: "Abdusamiev", birthdate: "2007-12-19", login: "shohruzabdussamiev" },
    // ... (ma'lumotlaringizni to'liq joylashtiring)
];

// Qidiruv funksiyasi
document.getElementById("searchBtn").addEventListener("click", function () {
    const name = document.getElementById("name").value.toLowerCase().trim();
    const surname = document.getElementById("surname").value.toLowerCase().trim();
    const birthdate = document.getElementById("birthdate").value;

    const result = data.filter(item =>
        item.name.toLowerCase() === name &&
        item.surname.toLowerCase() === surname &&
        item.birthdate === birthdate
    );

    const resultDiv = document.getElementById("result");
    if (result.length > 0) {
        resultDiv.innerHTML = `
            <p><strong>Topildi:</strong> ${result[0].name} ${result[0].surname}</p>
            <p><strong>Login:</strong> <span id="login">${result[0].login}</span></p>
            <p><strong>Parol:</strong> <span id="parol">123456789*</span></p>
            <br>
            <br>
            <button class="copy-btn" onclick="copyLogin()">Loginni nusxa olish</button>
            <button class="copy-btn" onclick="copyParol()">Parolni nusxa olish</button>
        `;
    } else {
        resultDiv.innerHTML = "<p>Ma'lumot topilmadi!</p>";
    }
});

// Loginni nusxalash funksiyasi
function copyLogin() {
    const login = document.getElementById("login").textContent;

    navigator.clipboard.writeText(login).then(() => {
        
    }).catch(err => {
        console.error("Nusxa olishda xatolik: ", err);
    });
}
function copyParol() {
    const parol = document.getElementById("parol").textContent;

    navigator.clipboard.writeText(parol).then(() => {
        
    }).catch(err => {
        console.error("Nusxa olishda xatolik: ", err);
    });
}

// Harf kiritishni cheklash (Ism va Familiya uchun)
document.getElementById('name').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
});

document.getElementById('surname').addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/[^A-Za-z]/g, '');
});