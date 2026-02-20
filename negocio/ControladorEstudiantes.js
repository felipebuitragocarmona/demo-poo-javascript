document.addEventListener("DOMContentLoaded", function () {

    let boton = document.getElementById("agregarBtn");
    let estudiantes = EstudianteStorage.cargar();
    let contador = 1;

    renderizarTabla();

    function renderizarTabla() {
        let contenedor = document.getElementById("contenedorEstudiantes");
        contenedor.innerHTML = "";
        contador = 1;

        estudiantes.forEach(estudiante => {
            contenedor.innerHTML += `
                <tr>
                    <td>${contador}</td>
                    <td>${estudiante.id}</td>
                    <td>${estudiante.nombre}</td>
                    <td>${estudiante.correo}</td>
                    <td>${estudiante.fechaNacimiento}</td>
                </tr>
            `;
            contador++;
        });
    }

    boton.addEventListener("click", function () {

        let id = document.getElementById("idInput").value.trim();
        let nombre = document.getElementById("nombreInput").value.trim();
        let correo = document.getElementById("correoInput").value.trim();
        let fecha = document.getElementById("fechaInput").value.trim();

        if (id !== "" && nombre !== "" && correo !== "" && fecha !== "") {

            let estudiante = new Estudiante(
                parseInt(id),
                nombre,
                correo,
                fecha
            );

            estudiantes.push(estudiante);

            EstudianteStorage.guardar(estudiantes);
            renderizarTabla();

            document.getElementById("idInput").value = "";
            document.getElementById("nombreInput").value = "";
            document.getElementById("correoInput").value = "";
            document.getElementById("fechaInput").value = "";
        }
    });

});
