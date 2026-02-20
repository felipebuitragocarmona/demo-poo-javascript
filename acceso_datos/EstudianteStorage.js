class EstudianteStorage {

    static clave = "estudiantes";

    static guardar(estudiantes) {
        localStorage.setItem(this.clave, JSON.stringify(estudiantes));
    }

    static cargar() {
        let datos = localStorage.getItem(this.clave);

        if (!datos) return [];

        let estudiantesPlano = JSON.parse(datos);

        // Convertir objetos planos nuevamente en instancias de Estudiante
        return estudiantesPlano.map(e =>
            new Estudiante(
                e.id,
                e.nombre,
                e.correo,
                e.fechaNacimiento
            )
        );
    }

    static limpiar() {
        localStorage.removeItem(this.clave);
    }
}
