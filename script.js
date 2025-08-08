const quotes = [
  "Ти сильніша, ніж здається 💪",
  "Все вийде — тільки не зупиняйся 🚀",
  "Ніхто не ідеальний — і це прекрасно 🌸",
  "Навіть помилки — це досвід! 📚",
  "Сьогодні — класний день 💖",
  "Ти можеш усе, просто почни 🦋",
  "Кожен крок — це прогрес 👣",
  "Твій час — це зараз ⏳"
];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const chosenQuote = quotes[randomIndex];
    document.getElementById("quote").textContent = chosenQuote;
}