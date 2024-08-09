const botao = document.getElementById("btn");
const resultado = document.createElement("span");
const sd = document.getElementById("sd");

botao.addEventListener("click", function () {
  const email = document.getElementById("email").value;

  if (
    email.includes("@gmail.com") &&
    email.indexOf("@gmail.com") == email.length - 10
  ) {
    document.getElementById("email").style.border = "0.5px solid var(--cor1)";
    resultado.innerHTML = "<p>Nice</p>";
    sd.appendChild(resultado);
  } else {
    document.getElementById("email").style.border = "2px solid red";
    resultado.innerHTML = "<p>Please provide a valid email address</p>";
    sd.appendChild(resultado);
  }
});
