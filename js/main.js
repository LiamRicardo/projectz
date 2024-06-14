document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.getElementById("openFormBtn");
    const modalForm = document.getElementById("modalForm");
    const closeBtn = document.getElementsByClassName("closeBtn")[0];
    const userNameDisplay = document.getElementById("userNameDisplay");

    // Mostrar el formulario modal
    openFormBtn.addEventListener("click", function () {
        modalForm.style.display = "block";
    });

    // Cerrar el formulario modal
    closeBtn.addEventListener("click", function () {
        modalForm.style.display = "none";
    });

    // Cerrar el formulario modal cuando se hace clic fuera del formulario
    window.addEventListener("click", function (event) {
        if (event.target == modalForm) {
            modalForm.style.display = "none";
        }
    });

    // Manejar el envío del formulario
    document.getElementById("userForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        localStorage.setItem("userName", name);
        displayUserName();
        modalForm.style.display = "none";
    });

    // Función para mostrar el nombre del usuario
    function displayUserName() {
        const name = localStorage.getItem("userName");
        if (name) {
            userNameDisplay.textContent = `Bienvenido, ${name}!`;
        } else {
            userNameDisplay.textContent = '';
        }
    }

    // Mostrar el nombre del usuario al cargar la página
    displayUserName();
});
