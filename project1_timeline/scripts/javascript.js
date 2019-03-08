var audio = $("#mySoundClip")[0];
$("nav a").mouseenter(function() {
  audio.play();
});


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
}
