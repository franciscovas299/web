document.addEventListener('DOMContentLoaded', () => {
    const cursoTitulo = document.getElementById('curso-titulo');
    const cursoDescripcion = document.getElementById('curso-descripcion');
    const btnBienvenido = document.getElementById('btn-bienvenido');
  
    if (cursoTitulo && cursoDescripcion && btnBienvenido) {
      const cursoActual = localStorage.getItem('cursoActual');
      if (cursoActual) {
        cursoTitulo.textContent = cursoActual;
        switch (cursoActual) {
          case 'HTML Básico':
            cursoDescripcion.textContent = 'Aprende las bases del desarrollo web con HTML.';
            break;
          case 'CSS Avanzado':
            cursoDescripcion.textContent = 'Domina el diseño web con CSS.';
            break;
          case 'JavaScript Intermedio':
            cursoDescripcion.textContent = 'Desarrolla habilidades en JavaScript.';
            break;
          case 'Python para Principiantes':
            cursoDescripcion.textContent = 'Introduce a Python desde cero.';
            break;
          case 'Fundamentos de C':
            cursoDescripcion.textContent = 'Conoce los fundamentos de la programación en C.';
            break;
          case 'PHP y MySQL':
            cursoDescripcion.textContent = 'Desarrolla aplicaciones web con PHP y MySQL.';
            break;
        }
  
        btnBienvenido.addEventListener('click', () => {
          redirigirBienvenida(cursoActual);
        });
      }
    }
  
    function redirigirBienvenida(curso) {
      let url;
      switch (curso) {
        case 'HTML Básico':
          url = '../Proyecto-Web1/curso-html/index.html';
          break;
        case 'CSS Avanzado':
          url = '../Proyecto-Web1/curso-css/index.html';
          break;
        case 'JavaScript Intermedio':
          url = '../Proyecto-Web1/curso-javascript/index.html';
          break;
        case 'Python para Principiantes':
          url = '../Proyecto-Web1/curso-python/index.html';
          break;
        case 'Fundamentos de C':
          url = '../Proyecto-Web1/curso-c/index.html';
          break;
        case 'PHP y MySQL':
          url = '../Proyecto-Web1/curso-php/index.html';
          break;
        default:
          url = 'mis-cursos.html'; // URL por defecto
          break;
      }
      window.location.href = url;
    }
  });
  