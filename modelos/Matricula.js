class Matricula {

    constructor(id, fechaInicio, fechaFin, semestre, estado, nota, estudiante, curso) {
        this.id = id;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.semestre = semestre;
        this.estado = estado;
        this.nota = nota;

        this.estudiante = estudiante;
        this.curso = curso;
    }

    // ===== MÉTODOS OPCIONALES =====

    aprobar() {
        this.estado = "Aprobado";
    }

    reprobar() {
        this.estado = "Reprobado";
    }

    estaActiva() {
        return this.estado === "Activa";
    }
}
