class Universidad {

    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.estudiantes = []; // 1-n con Estudiante
        this.cursos = [];      // 1-n con Curso
    }

    // ===== MÉTODOS PARA ESTUDIANTES =====
    agregarEstudiante(estudiante) {
        this.estudiantes.push(estudiante);
    }

    eliminarEstudiantePorId(idEstudiante) {
        var nuevaLista = [];

        for (var i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].id !== idEstudiante) {
                nuevaLista.push(this.estudiantes[i]);
            }
        }

        this.estudiantes = nuevaLista;
    }

    // ===== MÉTODOS PARA CURSOS =====
    agregarCurso(curso) {
        this.cursos.push(curso);
    }

    eliminarCursoPorId(idCurso) {
        var nuevaLista = [];

        for (var i = 0; i < this.cursos.length; i++) {
            if (this.cursos[i].id !== idCurso) {
                nuevaLista.push(this.cursos[i]);
            }
        }

        this.cursos = nuevaLista;
    }
}
