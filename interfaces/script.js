const form = document.querySelector('form');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (nom.value.trim() === '') {
    alert('Veuillez entrer votre nom');
    nom.focus();
    return;
  }

  if (email.value.trim() === '') {
    alert('Veuillez entrer votre email');
    email.focus();
    return;
  }

  if (message.value.trim() === '') {
    alert('Veuillez entrer votre message');
    message.focus();
    return;
  }

  this.submit();
});
