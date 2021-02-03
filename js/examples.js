

function activarSonido(){
    document.getElementById("primero").play()
}

window.addEventListener('load', function () {
    document.getElementById("spinner").remove()
    document.getElementById("main").style.visibility = "visible"
  })

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })


  function mute() {

   let audios = document.getElementsByTagName("audio") 
   let primeraudio = document.getElementById("primero")


    if(primeraudio.muted === false){
        for (let i = 0; i < audios.length; i++) {
            audios[i].muted = true
            document.getElementById("sound").src = "img/no-sound.png"
        }
    }
    else{
        for (let i = 0; i < audios.length; i++) {
            audios[i].muted = false
            document.getElementById("sound").src = "img/sound-on.png"

            
        }
    }

  
      
  }
