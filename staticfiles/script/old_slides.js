var divs = document.getElementsByClassName("slide-images");
var imgs = document.getElementsByClassName("img-container");
var act_imgs = document.getElementsByClassName("pad1");
var slide_icons = document.getElementsByClassName("slide_icons");
var i,l;
var slide_val = Math.ceil(screen.width*(80/100));


divs[0].style.width = parseInt(imgs.length,10)*slide_val + "px";
for(i=0;i<parseInt(imgs.length, 10);i++) {
    imgs[i].style.width = screen.width*(80/100)+"px";
    act_imgs[i].style.width = screen.width*(80/100)+"px";
    imgs[i].style.height = Math.ceil(slide_val*(50/100)) + "px";
    act_imgs[i].style.height = Math.ceil(slide_val*(50/100)) + "px";
}



for (l = 0; l < parseInt(imgs.length, 10); l++) {
    var button1 = document.createElement("button");
    slide_icons[0].appendChild(button1);
    var numb = parseInt(imgs.length, 10);
    left_val = (slide_val - numb * 20) / 2 + "px";
    button1.style.left = left_val;
    button1.style.height = "20px";
    button1.id = "but"+l;
    button1.style.width = "20px";
    button1.style.position = "relative";
    button1.style.borderRadius = "50%";
    button1.style.display = "inline-block";
    button1.style.opacity = ".4";
    button1.style.background = "rgba(0, 0, 0)";
    button1.disabled = true;
    button1.style.padding = "0 0 0 0";
    button1.style.transition = "1.5s";
    document.getElementById("but0").style.opacity = "1";
}




i= imgs.length-1;


int = window.setInterval(slide, 2500);



function slide() {
    var left = window.getComputedStyle(divs[0]).getPropertyValue("left");
    var left_num = parseInt(left, 10);
    if (left_num <= (parseInt(imgs.length,10)-1)*(-slide_val) && left_num % slide_val === 0) {
        //if at the last slide
        divs[0].style.left = "0px";
        document.getElementById("but0").style.opacity = "1";
        document.getElementById("but"+(imgs.length-1)).style.opacity = ".4"
    } else {
        if (left_num % slide_val === 0) {
            divs[0].style.left = parseInt(left, 10) - slide_val + "px";
            for (l=0;l<parseInt(imgs.length,10);l++) {
                op = window.getComputedStyle(document.getElementById("but"+l)).getPropertyValue("opacity");
                if (op === "1") {
                    selected = l;
                    break
                }
            }
            to_be_selected = selected+1;
            document.getElementById("but"+selected).style.opacity = ".4";
            document.getElementById("but"+to_be_selected).style.opacity = "1"
        }
    }
}

function next() {
    var left = window.getComputedStyle(divs[0]).getPropertyValue("left");
    var left_num = parseInt(left, 10);

    if (left_num <= (parseInt(imgs.length,10)-1)*(-slide_val)) {
        divs[0].style.left = "0px";
        document.getElementById("but0").style.opacity = "1";
        document.getElementById("but"+(imgs.length-1)).style.opacity = ".4"
    } else {
        if (left_num % slide_val === 0){
            divs[0].style.left = left_num - slide_val + "px";
            for (l=0;l<parseInt(imgs.length,10);l++) {
                op = window.getComputedStyle(document.getElementById("but"+l)).getPropertyValue("opacity");
                if (op === "1") {
                    selected = l;
                    break
                }
            }
            to_be_selected = selected+1;
            document.getElementById("but"+selected).style.opacity = ".4";
            document.getElementById("but"+to_be_selected).style.opacity = "1"
        }
    }
}

function prev() {
    var left = window.getComputedStyle(divs[0]).getPropertyValue("left");
    var left_num = parseInt(left, 10);

    if (left_num === 0) {
        divs[0].style.left = -slide_val * (parseInt(imgs.length, 10)-1) + "px";
        document.getElementById("but0").style.opacity = ".4";
        document.getElementById("but"+(imgs.length-1)).style.opacity = "1"
    } else {
        if (left_num % slide_val === 0){
            divs[0].style.left = left_num + slide_val + "px";
            for (l=0;l<parseInt(imgs.length,10);l++) {
                op = window.getComputedStyle(document.getElementById("but"+l)).getPropertyValue("opacity");
                if (op === "1") {
                    selected = l;
                    break
                }
            }
            to_be_selected = selected-1;
            document.getElementById("but"+selected).style.opacity = ".4";
            document.getElementById("but"+to_be_selected).style.opacity = "1"
        }
    }
}