// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
 	    { time: 0, text: "Él la estaba esperando,\ncon una flor amarilla." },
            { time: 6, text: "Ella lo estaba soñando,\ncon la luz en su pupila." },
            { time: 14, text: "Y el amarillo del sol\niluminaba la esquina." },
            { time: 22, text: "Lo sentía tan cercano,\nlo sentía desde niña." },
            { time: 26, text: "Ella sabía que él sabía\nque algún día pasaría." },
            { time: 31, text: "Que vendría él a buscarla\ncon sus flores amarillas." },
            { time: 39, text: "No te apures, no detengas\nel instante del encuentro." },
            { time: 44, text: "Está dicho que es un hecho,\nno la pierdas, no hay	derecho." },
            { time: 48, text: "No te olvides que la vida\ncasi nunca está dormida." },
            { time: 74, text: "En ese bar tan desierto\nnos esperaba el encuentro." },
            { time: 80, text: "Ella llegó en limusina\namarilla por supuesto." },
            { time: 89, text: "Él se acercó de repente,\nla miró tan de frente." },
            { time: 95, text: "Toda una vida soñada\ny no pudo decir nada." },
            { time: 103, text: "Ella sabía que él sabía\nque algún día pasaría." },
            { time: 109, text: "Que vendría él a buscarla\ncon sus flores amarillas." },
            { time: 114, text: "No te apures, no detengas\nel instante del encuentro." },
            { time: 120, text: "Está dicho que es un hecho,\nno la pierdas, no hay derecho." },
            { time: 128, text: "No te olvides que la vida\ncasi nunca está dormida." },
            { time: 150, text: "Ella sabía que él sabía\nque algún día pasaría." },
            { time: 155, text: "Que vendría él a buscarla\ncon sus flores amarillas." },
            { time: 160, text: "No te apures, no detengas\nel instante del encuentro." },
            { time: 164, text: "Está dicho que es un hecho,\nno la pierdas, no hay derecho." },
            { time: 169, text: "No te olvides que la vida\ncasi nunca está dormida." },
            { time: 175, text: "Ella sabía que él sabía.\nÉl sabía, ella sabía." },
            { time: 182, text: "Que él sabía, ella sabía.\nY se olvidaron de sus flores amarillas." },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);