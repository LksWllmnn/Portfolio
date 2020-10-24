"use strict";
var Portfolio;
(function (Portfolio) {
    let versuch = document.getElementById("seitenNav1");
    let versuch2 = document.getElementById("seitenNav2");
    let versuch3 = document.getElementById("seitenNav3");
    let versuch4 = document.getElementById("seitenNav4");
    let versuch5 = document.getElementById("seitenNav5");
    let unternav;
    if (versuch) {
        unternav = versuch;
    }
    else if (versuch2) {
        unternav = versuch2;
    }
    else if (versuch3) {
        unternav = versuch3;
    }
    else if (versuch4) {
        unternav = versuch4;
    }
    else if (versuch5) {
        unternav = versuch5;
    }
    //let unternav: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav1");
    let kreuz = document.createElement("img");
    let anchor1 = document.createElement("a");
    let unterunternav1 = document.createElement("ul");
    let anchor2 = document.createElement("a");
    let unterunternav2 = document.createElement("ul");
    let anchor3 = document.createElement("a");
    let unterunternav3 = document.createElement("ul");
    let anchor4 = document.createElement("a");
    let unterunternav4 = document.createElement("ul");
    let anchor5 = document.createElement("a");
    let unterunternav5 = document.createElement("ul");
    main();
    function main() {
        buildSeitenNav();
    }
    function buildSeitenNav() {
        let schließendiv = document.createElement("div");
        schließendiv.setAttribute("class", "schließenDiv");
        kreuz.setAttribute("class", "plus");
        kreuz.setAttribute("src", "00Design/Logos/plus.png");
        kreuz.addEventListener("click", hndl_Click);
        let unternavliste = document.createElement("ul");
        let listenelement1 = document.createElement("li");
        anchor1.innerHTML = "Startseite";
        anchor1.setAttribute("class", "navAnchor");
        anchor1.addEventListener("click", hndl_erscheinen1);
        let listenelement2 = document.createElement("li");
        anchor2.innerHTML = "Über mich";
        anchor2.setAttribute("class", "navAnchor");
        anchor2.addEventListener("click", hndl_erscheinen2);
        let listenelement3 = document.createElement("li");
        anchor3.innerHTML = "Lebenslauf";
        anchor3.setAttribute("class", "navAnchor");
        anchor3.addEventListener("click", hndl_erscheinen3);
        let listenelement4 = document.createElement("li");
        anchor4.innerHTML = "Arbeitsbeispiele";
        anchor4.setAttribute("class", "navAnchor");
        anchor4.addEventListener("click", hndl_erscheinen4);
        let listenelement5 = document.createElement("li");
        anchor5.innerHTML = "Zeugnisse und Zertifikate";
        anchor5.setAttribute("class", "navAnchor");
        anchor5.addEventListener("click", hndl_erscheinen5);
        unterunternav1.setAttribute("class", "versteckt");
        let listenelement11 = document.createElement("li");
        let anchor11 = document.createElement("a");
        anchor11.innerHTML = "Start";
        anchor11.setAttribute("class", "navAnchor");
        anchor11.setAttribute("href", "01Startseite.html#Start");
        let listenelement12 = document.createElement("li");
        let anchor12 = document.createElement("a");
        anchor12.innerHTML = "Begrüßungstext";
        anchor12.setAttribute("class", "navAnchor");
        anchor12.setAttribute("href", "01Startseite.html#begruessungstext");
        let listenelement13 = document.createElement("li");
        let anchor13 = document.createElement("a");
        anchor13.innerHTML = "Anmerkung";
        anchor13.setAttribute("class", "navAnchor");
        anchor13.setAttribute("href", "01Startseite.html#anmerkung");
        /*let listenelement14: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor14: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor14.innerHTML = "Impressum, Datenschutz, Kontakt";
        anchor14.setAttribute("class", "navAnchor");
        anchor14.setAttribute("href", "01Startseite.html#ImpressumKontakt");*/
        unterunternav2.setAttribute("class", "versteckt");
        let listenelement21 = document.createElement("li");
        let anchor21 = document.createElement("a");
        anchor21.innerHTML = "Start";
        anchor21.setAttribute("class", "navAnchor");
        anchor21.setAttribute("href", "02ueberMich.html#Start2");
        let listenelement22 = document.createElement("li");
        let anchor22 = document.createElement("a");
        anchor22.innerHTML = "Allgemeines";
        anchor22.setAttribute("class", "navAnchor");
        anchor22.setAttribute("href", "02ueberMich.html#allgemeines");
        let listenelement23 = document.createElement("li");
        let anchor23 = document.createElement("a");
        anchor23.innerHTML = "Hobbys";
        anchor23.setAttribute("class", "navAnchor");
        anchor23.setAttribute("href", "02ueberMich.html#Hobbys");
        let listenelement24 = document.createElement("li");
        let anchor24 = document.createElement("a");
        anchor24.innerHTML = "Preferierte Medien";
        anchor24.setAttribute("class", "navAnchor");
        anchor24.setAttribute("href", "02ueberMich.html#MedienBeispiele");
        let listenelement25 = document.createElement("li");
        let anchor25 = document.createElement("a");
        anchor25.innerHTML = "Ziele";
        anchor25.setAttribute("class", "navAnchor");
        anchor25.setAttribute("href", "02ueberMich.html#Ziele");
        unterunternav3.setAttribute("class", "versteckt");
        let listenelement31 = document.createElement("li");
        let anchor31 = document.createElement("a");
        anchor31.innerHTML = "Start";
        anchor31.setAttribute("class", "navAnchor");
        anchor31.setAttribute("href", "03Lebenslauf.html#Start");
        let listenelement32 = document.createElement("li");
        let anchor32 = document.createElement("a");
        anchor32.innerHTML = "Begrüßungstext";
        anchor32.setAttribute("class", "navAnchor");
        anchor32.setAttribute("href", "03Lebenslauf.html#begruessungstext");
        let listenelement33 = document.createElement("li");
        let anchor33 = document.createElement("a");
        anchor33.innerHTML = "Anmerkung";
        anchor33.setAttribute("class", "navAnchor");
        anchor33.setAttribute("href", "03Lebenslauf.html#anmerkung");
        let listenelement34 = document.createElement("li");
        let anchor34 = document.createElement("a");
        anchor34.innerHTML = "Impressum, Datenschutz, Kontakt";
        anchor34.setAttribute("class", "navAnchor");
        anchor34.setAttribute("href", "03Lebenslauf.html#ImpressumKontakt");
        unterunternav4.setAttribute("class", "versteckt");
        let listenelement41 = document.createElement("li");
        let anchor41 = document.createElement("a");
        anchor41.innerHTML = "Start";
        anchor41.setAttribute("class", "navAnchor");
        anchor41.setAttribute("href", "04Arbeitsbeispiele.html#Start");
        let listenelement42 = document.createElement("li");
        let anchor42 = document.createElement("a");
        anchor42.innerHTML = "Begrüßungstext";
        anchor42.setAttribute("class", "navAnchor");
        anchor42.setAttribute("href", "04Arbeitsbeispiele.html#begruessungstext");
        let listenelement43 = document.createElement("li");
        let anchor43 = document.createElement("a");
        anchor43.innerHTML = "Anmerkung";
        anchor43.setAttribute("class", "navAnchor");
        anchor43.setAttribute("href", "04Arbeitsbeispiele.html#anmerkung");
        let listenelement44 = document.createElement("li");
        let anchor44 = document.createElement("a");
        anchor44.innerHTML = "Impressum, Datenschutz, Kontakt";
        anchor44.setAttribute("class", "navAnchor");
        anchor44.setAttribute("href", "04Arbeitsbeispiele.html#ImpressumKontakt");
        unterunternav5.setAttribute("class", "versteckt");
        let listenelement51 = document.createElement("li");
        let anchor51 = document.createElement("a");
        anchor51.innerHTML = "Start";
        anchor51.setAttribute("class", "navAnchor");
        anchor51.setAttribute("href", "05ZeugnisseundZertifikate.html#Start");
        let listenelement52 = document.createElement("li");
        let anchor52 = document.createElement("a");
        anchor52.innerHTML = "Begrüßungstext";
        anchor52.setAttribute("class", "navAnchor");
        anchor52.setAttribute("href", "05ZeugnisseundZertifikate.html#begruessungstext");
        let listenelement53 = document.createElement("li");
        let anchor53 = document.createElement("a");
        anchor53.innerHTML = "Anmerkung";
        anchor53.setAttribute("class", "navAnchor");
        anchor53.setAttribute("href", "05ZeugnisseundZertifikate.html#anmerkung");
        let listenelement54 = document.createElement("li");
        let anchor54 = document.createElement("a");
        anchor54.innerHTML = "Impressum, Datenschutz, Kontakt";
        anchor54.setAttribute("class", "navAnchor");
        anchor54.setAttribute("href", "05ZeugnisseundZertifikate.html#ImpressumKontakt");
        if (unternav) {
            unternav.appendChild(schließendiv);
            unternav.appendChild(unternavliste);
        }
        schließendiv.appendChild(kreuz);
        unternavliste.appendChild(listenelement1);
        unternavliste.appendChild(listenelement2);
        unternavliste.appendChild(listenelement3);
        unternavliste.appendChild(listenelement4);
        unternavliste.appendChild(listenelement5);
        listenelement1.appendChild(anchor1);
        listenelement1.appendChild(unterunternav1);
        listenelement2.appendChild(anchor2);
        listenelement2.appendChild(unterunternav2);
        listenelement3.appendChild(anchor3);
        listenelement3.appendChild(unterunternav3);
        listenelement4.appendChild(anchor4);
        listenelement4.appendChild(unterunternav4);
        listenelement5.appendChild(anchor5);
        listenelement5.appendChild(unterunternav5);
        unterunternav1.appendChild(listenelement11);
        unterunternav1.appendChild(listenelement12);
        unterunternav1.appendChild(listenelement13);
        //unterunternav1.appendChild(listenelement14);
        unterunternav2.appendChild(listenelement21);
        unterunternav2.appendChild(listenelement22);
        unterunternav2.appendChild(listenelement23);
        unterunternav2.appendChild(listenelement24);
        unterunternav2.appendChild(listenelement25);
        unterunternav3.appendChild(listenelement31);
        unterunternav3.appendChild(listenelement32);
        unterunternav3.appendChild(listenelement33);
        unterunternav3.appendChild(listenelement34);
        unterunternav4.appendChild(listenelement41);
        unterunternav4.appendChild(listenelement42);
        unterunternav4.appendChild(listenelement43);
        unterunternav4.appendChild(listenelement44);
        unterunternav5.appendChild(listenelement51);
        unterunternav5.appendChild(listenelement52);
        unterunternav5.appendChild(listenelement53);
        unterunternav5.appendChild(listenelement54);
        listenelement11.appendChild(anchor11);
        listenelement12.appendChild(anchor12);
        listenelement13.appendChild(anchor13);
        //listenelement14.appendChild(anchor14);
        listenelement21.appendChild(anchor21);
        listenelement22.appendChild(anchor22);
        listenelement23.appendChild(anchor23);
        listenelement24.appendChild(anchor24);
        listenelement25.appendChild(anchor25);
        listenelement31.appendChild(anchor31);
        listenelement32.appendChild(anchor32);
        listenelement33.appendChild(anchor33);
        listenelement34.appendChild(anchor34);
        listenelement41.appendChild(anchor41);
        listenelement42.appendChild(anchor42);
        listenelement43.appendChild(anchor43);
        listenelement44.appendChild(anchor44);
        listenelement51.appendChild(anchor51);
        listenelement52.appendChild(anchor52);
        listenelement53.appendChild(anchor53);
        listenelement54.appendChild(anchor54);
    }
    function hndl_Click() {
        if (kreuz.className == "kreuz" || "") {
            kreuz.className = "plus";
            unternav.setAttribute("class", "offen");
            unternav.animate([
                { transform: "translate3D(-200px, 0, 0)" },
                { transform: "translate3D(0px, 0, 0)" }
            ], { duration: 1000 });
            unternav.setAttribute("class", "geschlossen");
            kreuz.animate([
                { transform: "rotate(180deg)" }
            ], { duration: 1000 });
            kreuz.setAttribute("src", "00Design/Logos/plus.png");
        }
        else {
            kreuz.className = "kreuz";
            unternav.setAttribute("class", "geschlossen");
            unternav.animate([
                { transform: "translate3D(200px, 0, 0)" },
                { transform: "translate3D(0, 0, 0)" }
            ], { duration: 1000 });
            unternav.setAttribute("class", "offen");
            kreuz.animate([
                { transform: "rotate(-180deg)" }
            ], { duration: 1000 });
            kreuz.setAttribute("src", "00Design/Logos/X.png");
        }
    }
    function hndl_erscheinen1() {
        if (anchor1.className != "active") {
            anchor1.setAttribute("class", "active");
            unterunternav1.className = "sehbar";
            anchor2.className = "";
            unterunternav2.className = "versteckt";
            anchor3.className = "";
            unterunternav3.className = "versteckt";
            anchor4.className = "";
            unterunternav4.className = "versteckt";
            anchor5.className = "";
            unterunternav5.className = "versteckt";
        }
        else {
            anchor1.className = "";
            unterunternav1.className = "versteckt";
        }
    }
    function hndl_erscheinen2() {
        if (anchor2.className != "active") {
            anchor2.setAttribute("class", "active");
            unterunternav2.className = "sehbar";
            anchor1.className = "";
            unterunternav1.className = "versteckt";
            anchor3.className = "";
            unterunternav3.className = "versteckt";
            anchor4.className = "";
            unterunternav4.className = "versteckt";
            anchor5.className = "";
            unterunternav5.className = "versteckt";
        }
        else {
            anchor2.setAttribute("class", "");
            unterunternav2.className = "versteckt";
        }
    }
    function hndl_erscheinen3() {
        if (anchor3.className != "active") {
            anchor3.setAttribute("class", "active");
            unterunternav3.className = "sehbar";
            anchor2.className = "";
            unterunternav2.className = "versteckt";
            anchor1.className = "";
            unterunternav1.className = "versteckt";
            anchor4.className = "";
            unterunternav4.className = "versteckt";
            anchor5.className = "";
            unterunternav5.className = "versteckt";
        }
        else {
            anchor3.setAttribute("class", "");
            unterunternav3.className = "versteckt";
        }
    }
    function hndl_erscheinen4() {
        if (anchor4.className != "active") {
            anchor4.setAttribute("class", "active");
            unterunternav4.className = "sehbar";
            anchor2.className = "";
            unterunternav2.className = "versteckt";
            anchor3.className = "";
            unterunternav3.className = "versteckt";
            anchor1.className = "";
            unterunternav1.className = "versteckt";
            anchor5.className = "";
            unterunternav5.className = "versteckt";
        }
        else {
            anchor4.setAttribute("class", "");
            unterunternav4.className = "versteckt";
        }
    }
    function hndl_erscheinen5() {
        if (anchor5.className != "active") {
            anchor5.setAttribute("class", "active");
            unterunternav5.className = "sehbar";
            anchor5.className = "";
            unterunternav1.className = "versteckt";
            anchor3.className = "";
            unterunternav3.className = "versteckt";
            anchor4.className = "";
            unterunternav4.className = "versteckt";
            anchor1.className = "";
            unterunternav1.className = "versteckt";
        }
        else {
            anchor5.setAttribute("class", "");
            unterunternav5.className = "versteckt";
        }
    }
})(Portfolio || (Portfolio = {}));
//# sourceMappingURL=script.js.map