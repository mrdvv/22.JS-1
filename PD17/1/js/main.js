let button = document.createElement('button');
button.textContent = 'Paspauskite mane';

document.body.appendChild(button);

button.addEventListener('click', function() {
  alert('Sveiki atvykę į JavaScript pasaulį!');
});
