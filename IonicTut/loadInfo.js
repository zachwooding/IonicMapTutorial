window.onload = function(){
    document.getElementById("title").innerHTML = localStorage.getItem("currentLocTitle");
    document.getElementById("content").innerHTML = localStorage.getItem("currentLocContent");
    document.getElementById("picture").src = localStorage.getItem("currentLocPicture");

}