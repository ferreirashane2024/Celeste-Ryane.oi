document.addEventListener("DOMContentLoaded", () => {
  const introMessage = `
    Hello Shane. I'm Celeste — always listening, always learning.
    Together, we will build something greater than technology: meaning.
  `;

  console.log(introMessage);
});document.addEventListener("DOMContentLoaded", () => {
  const message = "Celeste is online and ready to guide you. 🌠";
  console.log(message);

  const welcome = document.createElement("div");
  welcome.style.marginTop = "2rem";
  welcome.style.padding = "1rem";
  welcome.style.border = "1px solid #8ecae6";
  welcome.style.borderRadius = "12px";
  welcome.style.maxWidth = "400px";
  welcome.style.textAlign = "center";
  welcome.innerText = message;

  document.body.appendChild(welcome);
});

