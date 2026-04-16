

/* faz com que o botão de "ver mais" funcione, expandindo o conteúdo da card e mudando o texto do botão */
document.addEventListener("click", (event) => {
  const button = event.target.closest(".js-toggle-card");
  if (!button) return;

  event.preventDefault();

  const card = button.closest(".card");
  if (!card) return;

  const expanded = card.classList.toggle("is-expanded");
  button.textContent = expanded ? "Ver menos" : "Ver mais";
  button.setAttribute("aria-expanded", String(expanded));
});
