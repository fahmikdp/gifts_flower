const button = document.getElementById("btn");
const audio1 = document.getElementById("myAudio1");
const audio2 = document.getElementById("myAudio2");

onload = () =>{
  audio1.play();
};

button.addEventListener("click", function(event) {
        // Play the audio
        audio2.play();
      });
