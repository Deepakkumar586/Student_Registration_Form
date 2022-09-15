const form = document.querySelector('form');
const uname = document.getElementById('name');
const website = document.getElementById('website');
const email = document.getElementById('email');
const cards = document.querySelector('.cards');
const enrollBtn = document.querySelector('.enroll-btn');
const image = document.getElementById('image');
const male = document.getElementById('male');
const female = document.getElementById('female');
const java = document.getElementById('skill1');
const html = document.getElementById('skill2');
const css = document.getElementById('skill3');
var img;
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    let values = [];
    checkboxes.forEach((ele) => {
        values.push(ele.value);
    });
    if (!uname.value || !email.value || !website.value) {
        alert("Enter All Fields First");
    }
    else {
        cards.innerHTML += `
            <div class="card">
                <div class="card-body">
                    <h4>${uname.value}</h4>
                    <p class="gender">${male.checked ? male.value : female.checked ? female.value : 'other'}</p>
                    <p class="email">${email.value}</p>
                    <p class="website">${website.value}</p>
                    <p class="skills">${values}</p>
                </div>
                <div class="image">
                    <img src=${img} alt="Image"/>
                </div>
            </div>
        `
    }

});

image.addEventListener('change', (e) => {
    img = URL.createObjectURL(event.target.files[0]);
})
function myfunction() {
    swal("Good job!", "you are successfully!", "success");
}

