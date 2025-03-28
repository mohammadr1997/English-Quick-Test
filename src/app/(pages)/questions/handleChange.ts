export const handleChange = (
  event,
  correctAnswer,
  id,
  selectedAnswers,
  setSelectedAnswers,
  setCorrectCount,
  setNoSelectedCount,
  setIncorrectCount
) => {
  const selectedAnswer = event.target.value;
  if (selectedAnswers[id]) return;
  setSelectedAnswers((prev) => {
    return [...prev, selectedAnswer];
  });
  if (selectedAnswer == correctAnswer) {
    setCorrectCount((prevCount) => prevCount + 1);
    setNoSelectedCount((prev) => prev - 1);
  } else if (selectedAnswer !== correctAnswer && selectedAnswer !== "") {
    setIncorrectCount((prevCount) => prevCount + 1);
    setNoSelectedCount((prev) => prev - 1);
  }
};
