const div1 = document.getElementById("js");

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    div1.innerHTML = "JavaScript działa na telefonach";
} else {
    div1.innerHTML = "JavaScript działa na kompach";
}