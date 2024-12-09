// Alert para la página de información
const alertBox = document.getElementById("alert");
const closeBtn = document.getElementById("close-alert");

closeBtn.addEventListener("click", () => {
  alertBox.style.display = "none"; 
});


// Validacion formulario
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  // Obtener los valores de los campos
  var email = document.getElementById('email').value;
  var password = document.getElementsByName('password')[0].value;
  
  // Limpiar los mensajes de error anteriores
  document.getElementById('emailError').classList.add('hidden');
  document.getElementById('passwordError').classList.add('hidden');
  
  // Validar correo electrónico
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Por favor, introduce tu correo electrónico.';
    document.getElementById('emailError').classList.remove('hidden');
    return;
  }
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Por favor, introduce un correo electrónico válido.';
    document.getElementById('emailError').classList.remove('hidden');
    return;
  }

  // Validar contraseña:
  var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  
  if (password === '') {
    document.getElementById('passwordError').textContent = 'Por favor, introduce tu contraseña.';
    document.getElementById('passwordError').classList.remove('hidden');
    return;
  }
  
  if (!passwordRegex.test(password)) {
    document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.';
    document.getElementById('passwordError').classList.remove('hidden');
    return;
  }

  // Si todo es válido, enviar el formulario
  this.submit();
});
