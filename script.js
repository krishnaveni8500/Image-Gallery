

let fullimgbox=document.getElementById("fullimgbox")
let fullimg=document.getElementById("fullimg")

function openImg(pic){
    fullimgbox.style.display="flex";
    fullimg.src=pic;
}

function closeImg(){
    fullimgbox.style.display="none";
}

