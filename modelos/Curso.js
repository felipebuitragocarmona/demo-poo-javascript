class Curso {

    constructor(id, nombre, cupos, creditos) {
        this.id = id;
        this.nombre = nombre;
        this.cupos = cupos;
        this.creditos = creditos;

        this.matriculas = []; // n-n con Estudiante mediante Matricula
    }

    // ===== MÉTODOS PARA MATRÍCULAS =====
    agregarMatricula(matricula) {
        if (this.matriculas.length < this.cupos) {
            this.matriculas.push(matricula);
        } else {
            console.log("No hay cupos disponibles en el curso.");
        }
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

    // ===== MÉTODO OPCIONAL =====
    cuposDisponibles() {
        return this.cupos - this.matriculas.length;
    }
}
