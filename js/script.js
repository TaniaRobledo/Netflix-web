// Alert para la página de información
const alertBox = document.getElementById("alert");
const closeBtn = document.getElementById("close-alert");

closeBtn.addEventListener("click", () => {
  alertBox.style.display = "none"; 
});

// Validación de formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Limpiar mensajes de error
  emailError.classList.add('hidden');
  passwordError.classList.add('hidden');

  let valid = true;

  // Validar email
  if (!email.checkValidity()) {
    emailError.textContent = 'Por favor, introduce un correo electrónico válido.';
    emailError.classList.remove('hidden');
    valid = false;
  }

  // Validar contraseña
  if (!password.checkValidity()) {
    passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y un carácter especial.';
    passwordError.classList.remove('hidden');
    valid = false;
  }

  // Detener el envío si hay errores
  if (!valid) {
    event.preventDefault();
  }
});
