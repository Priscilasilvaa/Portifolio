const corHexadecimal = "#FFF7E9";
const textoMudandoCor = document.getElementById("textoMudardeCor");
const cores = ["#FFF7E9","red", "orange"];
let indiceCor = 0;

function changeColor() {
    textoMudardeCor.style.color = cores[indiceCor];
    indiceCor = (indiceCor + 1) % cores.length;
    setTimeout(changeColor, 3000); // Intervalo de tempo entre mudanças de cor
  }
  changeColor();
