// Selecciona los elementos
const alertBox = document.getElementById("alert");
const closeBtn = document.getElementById("close-alert");

// Añade el evento de clic al botón de cierre
closeBtn.addEventListener("click", () => {
  alertBox.style.display = "none"; // Oculta el mensaje sin afectar al contenedor
});
