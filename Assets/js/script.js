document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});
document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('translate-x-full');
});

document.getElementById('submitBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});