const box = document.querySelector(".box"),
btn = box.querySelector(".btn");
input = box.querySelector(".input");
qrimg = box.querySelector(".img img");

btn.addEventListener("click",() => {
    let imgValue = input.value;
    if(!imgValue) return;
    btn.innertext = "Generating QR Code...";
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${imgValue}`;
    qrimg.addEventListener("load",() => {
        box.classList.add("active");
        btn.innertext = "Generate QR Code";
    }); 
});

input.addEventListener("keyup",() => {
    if(!input.value){
        box.classList.remove("active");
    }
});