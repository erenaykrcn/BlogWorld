var index = 0;

document.addEventListener("wheel",  function (e) {

    if (e.deltaY > 0) {
        switch (index) {
            case 0: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-100vh";
                document.getElementsByClassName("desc_port")[0].style.width = "50%";
                document.getElementsByClassName("img_cont")[0].style.width = "49%";
                document.getElementsByClassName("prwe_inner1")[0].style.width = "50%";
                document.getElementsByClassName("prwe_inner2")[0].style.width = "39%";
                index++;
                break
            }

            case 1: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-200vh";
                document.getElementsByClassName("backend_cont")[0].style.width = "50vw";
                document.getElementsByClassName("backend_logos")[0].style.width = "40vw";
                index++;
                break
            }

            case 2: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-300vh";
                index++;
                break
            }

            case 3: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-400vh";
                index++;
                break
            }

            case 4: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-400vh";
            }
        }
    } else {

        switch (index) {
            case 0: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "0";
                break
            }

            case 1: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "0";
                index -= 1;
                break
            }

            case 2: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-100vh";
                index -= 1;
                break
            }

            case 3: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-200vh";
                index -= 1;
                break
            }

            case 4: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-300vh";
                index -= 1;
            }
        }

    }

},true);

function down(id) {
        switch (index) {
            case 0: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-100vh";
                document.getElementsByClassName("desc_port")[0].style.width = "50%";
                document.getElementsByClassName("img_cont")[0].style.width = "49%";
                document.getElementsByClassName("prwe_inner1")[0].style.width = "60%";
                document.getElementsByClassName("prwe_inner2")[0].style.width = "39%";

                index++;
                break
            }

            case 1: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-200vh";
                document.getElementsByClassName("backend_cont")[0].style.width = "50vw";
                document.getElementsByClassName("backend_logos")[0].style.width = "40vw";
                index++;
                break
            }

            case 2: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-300vh";
                index++;
                break
            }

            case 3: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-400vh";
                index++;
                break
            }

            case 4: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-400vh";
            }
        }
}

function up(id) {

        switch (index) {
            case 0: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "0";
                break
            }

            case 1: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "0";
                index -= 1;
                break
            }

            case 2: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-100vh";
                index -= 1;
                break
            }

            case 3: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-200vh";
                index -= 1;
                break
            }

            case 4: {
                document.getElementsByClassName("slider_port")["s0"].style.marginTop = "-300vh";
                index -= 1;
            }
        }

}