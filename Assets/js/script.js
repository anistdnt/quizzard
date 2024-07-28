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
    const user = document.getElementById("user-details-username").innerHTML;
    const level = document.getElementById("user-details-level").innerHTML;
    const domain = document.getElementById("user-details-domain").innerHTML;

    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const jsonData = {
        username : user.toLowerCase(),
        qtype : level.toLowerCase(),
        domain : domain.toLowerCase(),
        useranswer : formObject
    };

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
