

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});


document.getElementById("exam-submit-no").addEventListener("click",()=>{
    document.getElementById("examination-popup").classList.toggle("hidden");
})

document.getElementById("exam-submit-yes").addEventListener("click",async()=>{
    const formData = new FormData(document.getElementById("questions"));
    const user = document.getElementById("user-details-username").innerHTML;
    const level = document.getElementById("user-details-level").innerHTML;
    const domain = document.getElementById("user-details-domain").innerHTML;

    const formObject = {};
    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    const jsonData = {
        username : user,
        qtype : level.toLowerCase(),
        domain : domain.toLowerCase(),
        useranswer : formObject
    };

    let response = await fetch('/exam',{
        method : "POST",
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json"
        },
        body:JSON.stringify(jsonData)
    })
    
    const data = await response.json()
    document.getElementById("examination-popup").classList.toggle("hidden");
    document.getElementById("questions").reset();
    // console.log(data)
    window.location.href = `/result?auth=1&token=${data.token}`;
})

document.getElementById("questions").addEventListener("submit",(e)=>{
    e.preventDefault();
    document.getElementById("examination-popup").classList.toggle("hidden");
})
