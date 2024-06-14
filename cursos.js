document.addEventListener('DOMContentLoaded', () => {
  const cursosMatriculadosContainer = document.getElementById('cursos-matriculados');

  document.querySelectorAll('.matricular-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const courseTitle = btn.previousElementSibling.previousElementSibling.textContent;
      matricularCurso(courseTitle);
    });
  });

  function matricularCurso(curso) {
    const confirmar = confirm(`¿Deseas matricularte en el curso: ${curso}?`);

    if (confirmar) {
      let cursosMatriculados = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
      if (!cursosMatriculados.includes(curso)) {
        cursosMatriculados.push(curso);
        localStorage.setItem('cursosMatriculados', JSON.stringify(cursosMatriculados));
        alert('Te has matriculado en el curso: ' + curso);
        mostrarCursosMatriculados();
      } else {
        alert('Ya estás matriculado en este curso.');
      }
    }
  }

  function mostrarCursosMatriculados() {
    cursosMatriculadosContainer.innerHTML = '';
    const cursosMatriculados = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
    if (cursosMatriculados.length > 0) {
      cursosMatriculados.forEach(curso => {
        const cursoElement = document.createElement('div');
        cursoElement.className = 'cr-curso';
        cursoElement.innerHTML = `
          <h3 class="cr-h3">${curso}</h3>
          <button class="cr-btn-detalle" data-curso="${curso}">Ver Detalles</button>
          <button class="cr-btn-eliminar" data-curso="${curso}">Eliminar</button>
        `;
        cursosMatriculadosContainer.appendChild(cursoElement);
      });

      document.querySelectorAll('.cr-btn-eliminar').forEach(btn => {
        btn.addEventListener('click', () => {
          const curso = btn.getAttribute('data-curso');
          const confirmar = confirm(`¿Estás seguro de que deseas eliminar el curso: ${curso}?`);
          if (confirmar) {
            let cursosMatriculados = JSON.parse(localStorage.getItem('cursosMatriculados')) || [];
            cursosMatriculados = cursosMatriculados.filter(c => c !== curso);
            localStorage.setItem('cursosMatriculados', JSON.stringify(cursosMatriculados));
            btn.parentElement.remove();
            alert('Has eliminado el curso: ' + curso);
            mostrarCursosMatriculados();
          }
        });
      });

      document.querySelectorAll('.cr-btn-detalle').forEach(btn => {
        btn.addEventListener('click', () => {
          const curso = btn.getAttribute('data-curso');
          localStorage.setItem('cursoActual', curso);
          window.location.href = 'curso-detalle.html';
        });
      });
    } else {
      cursosMatriculadosContainer.innerHTML = '<p>No estás matriculado en ningún curso.</p>';
    }
  }

  mostrarCursosMatriculados();
});
