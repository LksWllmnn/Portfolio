"use strict";
var mediaObjektePortfolio;
(function (mediaObjektePortfolio) {
    let burgerKasten = document.getElementById("burger1");
    if (burgerKasten)
        burgerKasten.className = "burger";
    let burgerSeite1 = document.getElementById("burgerClick1");
    let burgerKasten2 = document.getElementById("burger2");
    if (burgerKasten2)
        burgerKasten2.className = "burger";
    let burgerSeite2 = document.getElementById("burgerClick2");
    let burgerKasten3 = document.getElementById("burger3");
    if (burgerKasten3)
        burgerKasten3.className = "burger";
    let burgerSeite3 = document.getElementById("burgerClick3");
    let burgerKasten4 = document.getElementById("burger4");
    if (burgerKasten4)
        burgerKasten4.className = "burger";
    let burgerSeite4 = document.getElementById("burgerClick4");
    let burgerKasten5 = document.getElementById("burger5");
    if (burgerKasten5)
        burgerKasten5.className = "burger";
    let burgerSeite5 = document.getElementById("burgerClick5");
    if (burgerSeite1) {
        burgerSeite1.addEventListener("click", ausfahren1);
    }
    if (burgerSeite2) {
        burgerSeite2.addEventListener("click", ausfahren2);
    }
    if (burgerSeite3) {
        burgerSeite3.addEventListener("click", ausfahren3);
    }
    if (burgerSeite4) {
        burgerSeite4.addEventListener("click", ausfahren4);
    }
    if (burgerSeite5) {
        burgerSeite5.addEventListener("click", ausfahren5);
    }
    function ausfahren1() {
        switch (burgerKasten.className) {
            case "burger":
                burgerKasten.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, 210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten.className = "burger show";
                }, 1000);
                break;
            case "burger show":
                burgerKasten.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, -210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten.className = "burger";
                }, 1000);
                break;
        }
    }
    function ausfahren2() {
        switch (burgerKasten2.className) {
            case "burger":
                burgerKasten2.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, 210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten2.className = "burger show";
                }, 1000);
                break;
            case "burger show":
                burgerKasten2.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, -210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten2.className = "burger";
                }, 1000);
                break;
        }
    }
    function ausfahren3() {
        switch (burgerKasten3.className) {
            case "burger":
                burgerKasten3.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, 210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten3.className = "burger show";
                }, 1000);
                break;
            case "burger show":
                burgerKasten3.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, -210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten3.className = "burger";
                }, 1000);
                break;
        }
    }
    function ausfahren4() {
        switch (burgerKasten4.className) {
            case "burger":
                burgerKasten4.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, 210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten4.className = "burger show";
                }, 1000);
                break;
            case "burger show":
                burgerKasten4.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, -210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten4.className = "burger";
                }, 1000);
                break;
        }
    }
    function ausfahren5() {
        switch (burgerKasten5.className) {
            case "burger":
                burgerKasten5.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, 210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten5.className = "burger show";
                }, 1000);
                break;
            case "burger show":
                burgerKasten5.animate([
                    { transform: "translate3D(0, 0, 0)" },
                    { transform: "translate3D(0, -210px, 0)" }
                ], { duration: 1000 });
                setTimeout(function () {
                    burgerKasten5.className = "burger";
                }, 1000);
                break;
        }
    }
})(mediaObjektePortfolio || (mediaObjektePortfolio = {}));
//# sourceMappingURL=burger.js.map