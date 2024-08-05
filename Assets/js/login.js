document.addEventListener('DOMContentLoaded', function() {
    const password = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    togglePassword.addEventListener('click', function () {
        console.log(1)
      // Toggle the type attribute
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      
      // Toggle the eye icon
      this.classList.toggle('fa-eye');
      this.classList.toggle('fa-eye-slash');
    });
  });

if(document.cookie.includes("user")){
  document.getElementById("account").querySelector('button').innerHTML = 'Log Out'
  document.getElementById("prev").href = '/prev'
}else{
  document.getElementById("account").querySelector('button').innerHTML = 'Login'
  document.getElementById("prev").href = '/login'
}

if(document.getElementById("account").querySelector('button').innerHTML === 'Log Out'){
  
  document.getElementById("account").href = '/'
  
  document.getElementById("account").querySelector('button').addEventListener('click',()=>{
  
    function deleteCookie(name) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith(`${encodeURIComponent(name)}=`)) {
          
          document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
          return;
        }
      }
    
      console.log(`Cookie "${name}" not found.`);
    }
    
    // Usage example
    deleteCookie('user');
    
  })
}else{
  document.getElementById("account").href = '/login'
}