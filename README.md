**Demo POO - Proyecto de ejemplo**

Proyecto educativo que demuestra conceptos de programación orientada a objetos en JavaScript.

**Descripción**:
- **Qué:** Aplicación de ejemplo para gestionar estudiantes, matrículas y cuentas (ahorros/corriente).
- **Propósito:** Material didáctico para practicar diseño de clases, persistencia simple y una UI mínima.

**Estructura del repositorio**
- **acceso_datos:** Contiene la capa de persistencia (por ejemplo, `EstudianteStorage.js`).
- **modelos:** Clases del dominio (`Estudiante.js`, `Cuenta.js`, `CuentaAhorros.js`, `CuentaCorriente.js`, `Curso.js`, `Matricula.js`, `Universidad.js`, `Carnet.js`).
- **negocio:** Lógica de aplicación y controladores (`ControladorEstudiantes.js`).
- **presentacion:** Recursos de interfaz (estilos y vistas). La vista principal es `vistas/Estudiantes.html`.

los archivos mediante un servidor local.

**Cómo ejecutar**
- Opción rápida: abrir `presentacion/vistas/Estudiantes.html` directamente en el navegador.
- Servidor simple con Python (desde la raíz del proyecto):

**Uso básico**
- La vista `Estudiantes.html` muestra la interfaz para listar y gestionar estudiantes.
- Los datos se guardan/leen mediante la capa en `acceso_datos/EstudianteStorage.js`.

**Cómo extender**
- Añadir un nuevo modelo en `modelos/` y exponerlo desde el controlador en `negocio/`.
- Actualizar la vista en `presentacion/vistas/` y conectar eventos con `ControladorEstudiantes.js`.