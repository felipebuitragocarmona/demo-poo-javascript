class Estudiante {

    constructor(id, nombre, correo, fechaNacimiento) {
        this.id = id;
        this.nombre = nombre;
        this.correo = correo;
        this.fechaNacimiento = fechaNacimiento;

        this.carnet = null;
        this.matriculas = [];
    }

    // ===== MÉTODOS PARA MATRÍCULAS =====
    agregarMatricula(matricula) {
        this.matriculas.push(matricula);
    }

    eliminarMatriculaPorId(idMatricula) {
        var nuevaLista = [];

        for (var i = 0; i < this.matriculas.length; i++) {
            if (this.matriculas[i].id !== idMatricula) {
                nuevaLista.push(this.matriculas[i]);
            }
        }

        this.matriculas = nuevaLista;
    }
}
