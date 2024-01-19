var texturl = document.querySelector(".texturl");
var btn = document.querySelector(".btn1");
var img = document.querySelector(".img");

function btnclick() {
    if (texturl.value !== "") {
       var url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + texturl.value;
        img.src = url;
    } else {
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";
    }
  
}

