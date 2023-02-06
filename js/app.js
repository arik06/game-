const playButton = document.getElementById("play-button");

playButton.addEventListener("click", function (event) {
  event.preventDefault();
  const size = document.getElementById("size").value;
  const nick = document.getElementById("nicka").value;
  const email = document.getElementById("email").value;

  if (!nick || !email || !size) {
    alert("Por favor, rellene todos los campos");
  } else {
    alert(`Juego de tamaño ${size} iniciado con ID: ${nick} y correo electrónico: ${email}`);
    // aquí puedes agregar más código para iniciar el juego
  }
});