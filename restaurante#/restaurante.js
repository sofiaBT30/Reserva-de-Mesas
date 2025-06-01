function mostrarSeccion(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  if (id !== 'inicio') {
    document.getElementById("mainNav").style.display = "flex";
  } else {
    document.getElementById("mainNav").style.display = "none";
  }
}

function cerrarSesion() {
  mostrarSeccion('inicio');
  document.getElementById("mainNav").style.display = "none";
  alert("Sesión cerrada.");
}

function validarLogin() {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  if (!email.includes("@") || pass === "") {
    alert("Ingrese datos válidos.");
    return false;
  }

  mostrarSeccion('perfil');
  return false;
}

function validarRegistro() {
  const nombre = document.getElementById("regNombre").value;
  const email = document.getElementById("regEmail").value;
  const pass1 = document.getElementById("regPass1").value;
  const pass2 = document.getElementById("regPass2").value;

  if (!nombre || !email.includes("@") || pass1.length < 6 || pass1 !== pass2) {
    alert("Complete correctamente todos los campos.");
    return false;
  }

  mostrarSeccion('perfil');
  return false;
}

function validarPerfil() {
  const nombre = document.getElementById("perfilNombre").value;
  const tel = document.getElementById("perfilTel").value;
  const dir = document.getElementById("perfilDir").value;

  if (!nombre || !tel || !dir) {
    alert("Todos los campos son obligatorios.");
    return false;
  }

  alert("Perfil guardado.");
  mostrarSeccion('reserva');
  return false;
}

function validarReserva() {
  const rest = document.getElementById("resRestaurante").value;
  const fecha = document.getElementById("resFecha").value;
  const hora = document.getElementById("resHora").value;
  const personas = document.getElementById("resPersonas").value;

  if (!rest || !fecha || !hora || personas < 1) {
    alert("Complete todos los datos de la reserva.");
    return false;
  }

  alert("Reserva realizada con éxito.");
  mostrarSeccion('resena');
  return false;
}

function validarResena() {
  const rest = document.getElementById("resenaRest").value;
  const punt = document.getElementById("resenaPunt").value;
  const coment = document.getElementById("resenaComent").value;

  if (!rest || punt < 1 || punt > 10 || coment.trim() === "") {
    alert("Complete todos los campos de la reseña.");
    return false;
  }

  alert("Gracias por tu reseña.");
  mostrarSeccion('inicio');
  return false;
}
const opcionesComida = {
      "1": ["Pizza Margarita", "Pizza Pepperoni", "Pizza Cuatro Quesos"],
      "2": ["Sushi Maki", "Nigiri Salmón", "Temaki de Atún"],
      "3": ["Big Mac", "McNuggets", "Papas Grandes"],
      "4": ["Bucket Familiar", "Alitas BBQ", "Sándwich Crispy"],
      "5": ["Pollo a la brasa", "Chicharrón", "Arroz con pollo"],
      "6": ["Arepa con queso", "Empanadas", "Batido de guanábana"]
    };

    function cargarComidas() {
      const restaurante = document.getElementById("resRestaurante").value;
      const comidaSelect = document.getElementById("resComida");

      // Limpiar opciones anteriores
      comidaSelect.innerHTML = '<option value="">Seleccione comida</option>';

      // Si hay restaurante seleccionado
      if (opcionesComida[restaurante]) {
        opcionesComida[restaurante].forEach(comida => {
          const option = document.createElement("option");
          option.value = comida;
          option.textContent = comida;
          comidaSelect.appendChild(option);
        });
      }
    }



