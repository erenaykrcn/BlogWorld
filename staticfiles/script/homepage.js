var imgs = document.getElementsByClassName("img-container");
var sI = 1;
var i;
var img = document.getElementsByClassName("mySlides");

if (window.innerWidth>1000) {
    document.getElementById("clink").style.display = "none";
} else {
    document.getElementById("clink").style.display = "block";
}


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";


        if (parseInt(document.body.scrollTop, 10) / parseInt(screen.height, 10) > 0.10) {
            document.getElementById("nav_div").style.position = "fixed";
            document.getElementById("nav_div").style.width = "100%";
            document.getElementById("nav_div").style.left = "0";
            document.getElementById("nav_div1").style.paddingLeft = "6vw";
            document.getElementById("nav_div1").style.paddingRight = "20vw";
        } else {
            document.getElementById("nav_div").style.position = "relative";
            document.getElementById("nav_div").style.width = "100%";
            document.getElementById("nav_div1").style.paddingLeft = "2vw";
            document.getElementById("nav_div1").style.paddingRight = "2vw";
        }

}



for (i = 1; i < img.length; i++) {
        img[i].style.display = "none";
}
img[0].style.display = "block";



for (i = 1; i < imgs.length; i++) {
        imgs[i].style.display = "none";
}
imgs[0].style.display = "block";

if (window.innerWidth >1000) {
    document.getElementById("world").style.border = "2px solid rgb(53, 47, 115)";
    document.getElementById("world").style.borderBottom = "none";
} else {

}

for (i=1;i<10;i++) {
    document.getElementsByClassName("cat_img")[i].style.display = "none";
}


for (i=0;i<imgs.length;i++) {
    var button_nav = document.createElement("button");
    document.getElementsByClassName("slide_icons")[0].appendChild(button_nav);
    button_nav.className = "slide-but";
}

document.getElementsByClassName("slide-but")[0].style.background = "#bfbfbf";

var setSl = setInterval(slider, 8000);

function slider() {
    for(i=0;i<imgs.length;i++) {
        if (window.getComputedStyle(imgs[i]).getPropertyValue("display")==="block") {
            vcurrent = i;
        }
    }
    if (vcurrent===imgs.length-1) {
        imgs[vcurrent].style.display = "none";
        imgs[0].style.display = "block";
        document.getElementsByClassName("slide-but")[0].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[vcurrent].style.background = "Transparent";
        document.getElementsByClassName("desc")[vcurrent].style.display = "none";
        document.getElementsByClassName("desc")[vcurrent].style.height = "0";
        document.getElementsByClassName("desc")[vcurrent].style.paddingTop = "0";
        } else {
        imgs[vcurrent].style.display = "none";
        imgs[vcurrent+1].style.display = "block";
        document.getElementsByClassName("slide-but")[vcurrent+1].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[vcurrent].style.background = "Transparent";
        document.getElementsByClassName("desc")[vcurrent].style.display = "none";
        document.getElementsByClassName("desc")[vcurrent].style.height = "0";
        document.getElementsByClassName("desc")[vcurrent].style.paddingTop = "0";
    }
}

function prev() {
    for(i=0;i<imgs.length;i++) {
        if (window.getComputedStyle(imgs[i]).getPropertyValue("display")==="block") {
            currenti = i;
        }
    }
    if (currenti===0) {
        imgs[0].style.display = "none";
        imgs[imgs.length-1].style.display = "block";
        document.getElementsByClassName("slide-but")[imgs.length-1].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[currenti].style.background = "Transparent";
        document.getElementsByClassName("desc")[currenti].style.display = "none";
        document.getElementsByClassName("desc")[currenti].style.height = "0";
        document.getElementsByClassName("desc")[currenti].style.paddingTop = "0";
    } else {
        imgs[currenti].style.display = "none";
        imgs[currenti-1].style.display = "block";
        document.getElementsByClassName("slide-but")[currenti-1].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[currenti].style.background = "Transparent";
        document.getElementsByClassName("desc")[currenti].style.display = "none";
        document.getElementsByClassName("desc")[currenti].style.height = "0";
        document.getElementsByClassName("desc")[currenti].style.paddingTop = "0";
    }
}

function next() {
    for(i=0;i<imgs.length;i++) {
        if (window.getComputedStyle(imgs[i]).getPropertyValue("display")==="block") {
            currentii = i;
        }
    }
    if (currentii===imgs.length-1) {
        imgs[imgs.length-1].style.display = "none";
        imgs[0].style.display = "block";
        document.getElementsByClassName("slide-but")[0].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[currentii].style.background = "Transparent";
        document.getElementsByClassName("desc")[currentii].style.display = "none";
        document.getElementsByClassName("desc")[currentii].style.height = "0";
        document.getElementsByClassName("desc")[currentii].style.paddingTop = "0";
    } else {
        imgs[currentii].style.display = "none";
        imgs[currentii+1].style.display = "block";
        document.getElementsByClassName("slide-but")[currentii+1].style.background = "#bfbfbf";
        document.getElementsByClassName("slide-but")[currentii].style.background = "Transparent";
        document.getElementsByClassName("desc")[currentii].style.display = "none";
        document.getElementsByClassName("desc")[currentii].style.height = "0";
        document.getElementsByClassName("desc")[currentii].style.paddingTop = "0";
    }
}



var slideIndex = 1;

var setInt = window.setInterval(carousel, 3000);

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
      x[slideIndex-1].style.display = "block";
}



function mobilecheck() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

if(mobilecheck()) {
    document.getElementsByClassName("navbar")[0].style.display = "none";
    document.getElementsByClassName("openbtn")[0].style.display = "block";
    document.getElementsByClassName("mobile_blogworld")[0].style.display = "inline-block";
}

function openNav() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("mySidebar").style.width = "100%";
    window.clearInterval(setInt);
    window.clearInterval(setSl);
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("mySidebar").style.display = "none";
  setInt = window.setInterval(carousel, 3000);
  setSl = window.setInterval(slider,3000);
}

function show_sub0() {
    if (window.getComputedStyle(document.getElementById("acc_col0")).getPropertyValue("display")==="none") {
        document.getElementById("acc_col0").style.display = "block";
    } else {
        document.getElementById("acc_col0").style.display = "none";
    }
}

function show_sub1() {
    if (window.getComputedStyle(document.getElementById("acc_col1")).getPropertyValue("display")==="none") {
        document.getElementById("acc_col1").style.display = "block";
    } else {
        document.getElementById("acc_col1").style.display = "none";
    }
}

function see_desc() {
    for(i=0;i<imgs.length;i++) {
        if (window.getComputedStyle(imgs[i]).getPropertyValue("display")==="block") {
            current_s = i;
        }
    }
    document.getElementsByClassName("desc")[current_s].style.display = "block";
    document.getElementsByClassName("desc")[current_s].style.paddingTop = "5vw";
    document.getElementsByClassName("desc")[current_s].style.height = "13vw";
    document.getElementsByClassName("de")[current_s].style.fontSize = "1.5vw";
    document.getElementsByClassName("de1")[current_s].style.fontSize = "1.5vw";
    var bottom = window.setInterval( function () {window.scrollTo(0, document.body.scrollHeight);}, 1);
    setInterval(function () {window.clearInterval(bottom)}, 1000);
}

function hide_d() {
    for(i=0;i<imgs.length;i++) {
        if (window.getComputedStyle(imgs[i]).getPropertyValue("display")==="block") {
            current_s = i;
        }
    }
    document.getElementsByClassName("desc")[current_s].style.display = "none";
}




function cat_mouse(x) {
    if (window.innerWidth>1000) {
        document.getElementById("clink").style.display = "none";
    } else {
        document.getElementById("clink").style.display = "block";
    }


    if (window.innerWidth>1000) {
        var butts = document.getElementsByClassName("inner_cat");
        var butts1 = document.getElementsByClassName("inner_cat1");

        for (i = 0; i < 10; i++) {
            if (window.getComputedStyle(document.getElementsByClassName("cat_img")[i]).getPropertyValue("display") === "block") {
                cur = i;
            }
        }

        if (x !== 0) {
            document.getElementById("world").style.border = "none";
        }
        if (x < 5) {
            butts[x].style.border = "2px solid rgb(53, 47, 115)";
            butts[x].style.borderBottom = "none";
        } else {
            butts1[x - 5].style.border = "2px solid rgb(53, 47, 115)";
            butts1[x - 5].style.borderTop = "none";
        }
        switch (x) {
            case 0: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(56, 1, 69, 1), rgba(153, 197, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 10s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 10s ease infinite";
                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[0].style.display = "block";
                break
            }
            case 1: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgb(138, 203, 219), rgba(215, 219, 138, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";
                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[1].style.display = "block";
                break
            }
            case 2: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(247, 77, 102, 1), rgba(186, 202, 245, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";

                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[2].style.display = "block";
                break
            }
            case 3: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(207, 119, 12, 1), rgba(26, 49, 143, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[3].style.display = "block";
                break
            }
            case 4: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(29, 181, 140, 1), rgba(227, 141, 154, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[4].style.display = "block";
                break
            }
            case 5: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(171, 204, 163, 1), rgba(33, 7, 36, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[5].style.display = "block";
                break
            }
            case 6: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(247, 241, 124, 1), rgba(124, 136, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[6].style.display = "block";
                break
            }
            case 7: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(105, 0, 31, 1), rgba(153, 197, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[7].style.display = "block";
                break
            }
            case 8: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(35, 247, 74, 1), rgba(3, 66, 27, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[8].style.display = "block";
                break
            }
            case 9: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(7, 93, 105, 1), rgba(59, 5, 22, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 10s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 10s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[9].style.display = "block";
                break
            }
        }
    }
}

function mouseout_cat(x) {
    if (window.innerWidth>1000) {
        var butts = document.getElementsByClassName("inner_cat");
        var butts1 = document.getElementsByClassName("inner_cat1");


        if (x < 5) {
            butts[x].style.border = "none";
        } else {
            butts1[x - 5].style.border = "none";
        }

        document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(56, 1, 69, 1), rgba(153, 197, 247, 1))";
        document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
        document.getElementsByClassName("lis")[0].style.animation = "back-ani 10s ease infinite";
        document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 10s ease infinite";
    }
}

function cat_click(x) {
    if (window.innerWidth>1000) {
        document.getElementById("clink").style.display = "none";
    } else {
        document.getElementById("clink").style.display = "block";
    }


    if (window.innerWidth>1000) {
        var cats = {
            0: "world", 1: "culture", 2: "technology", 3: "design", 4: "business", 5: "politics", 6: "opinion",
            7: "science", 8: "health", 9: "travel"
        };
        window.location = "/posts/cat/" + cats[x] + "/";
    } else {
        document.getElementById("clink").style.display = "block";

        var butts = document.getElementsByClassName("inner_cat");
        var butts1 = document.getElementsByClassName("inner_cat1");

        for (i = 0; i < 10; i++) {
            if (window.getComputedStyle(document.getElementsByClassName("cat_img")[i]).getPropertyValue("display") === "block") {
                cur = i;
            }
        }

        switch (x) {
            case 0: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(56, 1, 69, 1), rgba(153, 197, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 10s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 10s ease infinite";

                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[0].style.display = "block";

                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").innerText = "See Our 'World' Category";
                document.getElementById("clink").href = "/posts/cat/world/";

                break
            }
            case 1: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgb(138, 203, 219), rgba(215, 219, 138, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";
                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[1].style.display = "block";

                document.getElementById("clink").style.color = "black";
                document.getElementById("clink").innerText = "See Our 'Culture' Category";
                document.getElementById("clink").href = "/posts/cat/culture/";
                break
            }
            case 2: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(247, 77, 102, 1), rgba(186, 202, 245, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";
                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[2].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Technology' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/technology/";
                break
            }
            case 3: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(207, 119, 12, 1), rgba(26, 49, 143, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[3].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Design' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/design/";
                break
            }
            case 4: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(29, 181, 140, 1), rgba(227, 141, 154, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[4].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Business' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/business/";
                break
            }
            case 5: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(171, 204, 163, 1), rgba(33, 7, 36, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[5].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Politics' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/politics/";
                break
            }
            case 6: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(247, 241, 124, 1), rgba(124, 136, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[6].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Opinion' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/opinion/";
                break
            }
            case 7: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(105, 0, 31, 1), rgba(153, 197, 247, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";
                document.getElementById("clink").style.color = "white";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[7].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Science' Category";
                document.getElementById("clink").href = "/posts/cat/science/";
                break
            }
            case 8: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(35, 247, 74, 1), rgba(3, 66, 27, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 1s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 1s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[8].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Health' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/health/";
                break
            }
            case 9: {
                document.getElementsByClassName("lis")[0].style.background = "linear-gradient(260deg, rgba(7, 93, 105, 1), rgba(59, 5, 22, 1))";
                document.getElementsByClassName("lis")[0].style.backgroundSize = "200% 200%";
                document.getElementsByClassName("lis")[0].style.animation = "back-ani 10s ease infinite";
                document.getElementsByClassName("lis")[0].style.webkitAnimation = "back-ani 10s ease infinite";


                document.getElementsByClassName("cat_img")[cur].style.display = "none";
                document.getElementsByClassName("cat_img")[9].style.display = "block";
                document.getElementById("clink").innerText = "See Our 'Travel' Category";
                document.getElementById("clink").style.color = "white";
                document.getElementById("clink").href = "/posts/cat/travel/";
                break
            }
        }

    }
}




