function submitQuiz(section) {
  const form = document.getElementById(`quiz-seccion${section}`);
  const result = document.getElementById(`quiz-result-seccion${section}`);
  const answers = {
    1: { q1: 'a', q2: 'b' },
    2: { q1: 'b', q2: 'b' },
    3: { q1: 'b', q2: 'b' },
    4: { q1: 'a', q2: 'a' },
    5: { q1: 'a', q2: 'a' }
  };

  let score = 0;
  let totalQuestions = Object.keys(answers[section]).length;

  for (let answer in answers[section]) {
    const userAnswer = form.querySelector(`input[name="${answer}"]:checked`);
    if (userAnswer && userAnswer.value === answers[section][answer]) {
      score++;
    }
  }

  if (score === totalQuestions) {
    result.textContent = `Tu puntuación es: ${score} de ${totalQuestions}. ¡Has completado esta sección!`;
    document.getElementById(`seccion${section}`).style.display = 'none';
    if (section < 5) {
      document.getElementById(`seccion${section + 1}`).style.display = 'block';
    } else {
      document.getElementById('final').style.display = 'block';
    }
  } else {
    result.textContent = `Tu puntuación es: ${score} de ${totalQuestions}. Debes responder correctamente todas las preguntas para avanzar.`;
  }
}
