document.addEventListener("DOMContentLoaded", () => {
  const question = document.querySelector("#quiz-question");
  const result = document.querySelector("#quiz-result");
  const options = document.querySelectorAll(".quiz-option");

  options.forEach((option) => {
    option.addEventListener("click", () => {
      const isCorrect = option.dataset.correct === "true";
      const resultIcon = result.querySelector(".result-icon");
      const resultLabel = result.querySelector(".result-label");
      const resultMessage = result.querySelector(".result-message");

      question.hidden = true;
      result.hidden = false;
      result.classList.toggle("is-wrong", !isCorrect);

      if (isCorrect) {
        resultIcon.textContent = "✓";
        resultLabel.textContent = "You verified the motion";
        resultMessage.textContent = "Congrats! You just proved MLLMs are not even close to human intelligence.";
      } else {
        resultIcon.textContent = "×";
        resultLabel.textContent = "Context got you";
        resultMessage.textContent = "Oops! Even the best MLLMs make the same mistake.";
      }

      result.focus?.();
    });
  });

  const copyButton = document.querySelector("#copy-bibtex");
  const bibtex = document.querySelector("#bibtex-code");

  if (copyButton && bibtex) {
    copyButton.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibtex.textContent.trim());
        copyButton.textContent = "Copied!";
      } catch (error) {
        copyButton.textContent = "Select and copy below";
      }

      window.setTimeout(() => {
        copyButton.textContent = "Copy citation";
      }, 2000);
    });
  }
});
