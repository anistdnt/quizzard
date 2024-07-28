document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});

document.getElementById('exam-submit-yes').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById("exam-submit-yes").addEventListener("click",()=>{
    const formData = new FormData(document.getElementById("questions"));

    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const jsonData = JSON.stringify(formObject);

    console.log(jsonData);
    document.getElementById("examination-popup").classList.toggle("hidden");
    document.getElementById("questions").reset();
})

document.getElementById("exam-submit-no").addEventListener("click",()=>{
    document.getElementById("examination-popup").classList.toggle("hidden");
})

document.getElementById("questions").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("examination-popup").classList.toggle("hidden");
})
