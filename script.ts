namespace Portfolio {
    let versuch: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav1");
    let versuch2: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav2");
    let versuch3: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav3");
    let versuch4: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav4");
    let versuch5: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav5");

    let unternav: HTMLDivElement;
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
    } else if (versuch5) {
        unternav = versuch5;
    }

    //let unternav: HTMLDivElement = <HTMLDivElement> document.getElementById("seitenNav1");
    let kreuz: HTMLImageElement = <HTMLImageElement> document.createElement("img");

    let anchor1: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
    let unterunternav1: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
    
    let anchor2: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
    let unterunternav2: HTMLUListElement = <HTMLUListElement>document.createElement("ul");

    let anchor3: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
    let unterunternav3: HTMLUListElement = <HTMLUListElement>document.createElement("ul");

    let anchor4: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
    let unterunternav4: HTMLUListElement = <HTMLUListElement>document.createElement("ul");

    let anchor5: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
    let unterunternav5: HTMLUListElement = <HTMLUListElement>document.createElement("ul");

    main();
    function main(): void {
        buildSeitenNav();
    }

    function buildSeitenNav(): void {
        let schließendiv: HTMLDivElement = <HTMLDivElement> document.createElement("div");
        schließendiv.setAttribute("class", "schließenDiv");
    
        
        kreuz.setAttribute("class", "plus");
        kreuz.setAttribute("src", "00Design/Logos/plus.png");
        kreuz.addEventListener("click", hndl_Click);
    
        let unternavliste: HTMLUListElement = <HTMLUListElement>document.createElement("ul");
    
        let listenelement1: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        anchor1.innerHTML = "Startseite";
        anchor1.setAttribute("class", "navAnchor");
        anchor1.addEventListener("click", hndl_erscheinen1);
        let listenelement2: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        anchor2.innerHTML = "Über mich";
        anchor2.setAttribute("class", "navAnchor");
        anchor2.addEventListener("click", hndl_erscheinen2);
        let listenelement3: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        anchor3.innerHTML = "Lebenslauf";
        anchor3.setAttribute("class", "navAnchor");
        anchor3.addEventListener("click", hndl_erscheinen3);
        let listenelement4: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        anchor4.innerHTML = "Arbeitsbeispiele";
        anchor4.setAttribute("class", "navAnchor");
        anchor4.addEventListener("click", hndl_erscheinen4);
        let listenelement5: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        anchor5.innerHTML = "Zeugnisse und Zertifikate";
        anchor5.setAttribute("class", "navAnchor");
        anchor5.addEventListener("click", hndl_erscheinen5);
    
        unterunternav1.setAttribute("class", "versteckt");
        let listenelement11: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor11: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor11.innerHTML = "Start";
        anchor11.setAttribute("class", "navAnchor");
        anchor11.setAttribute("href", "01Startseite.html#Start");
        let listenelement12: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor12: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor12.innerHTML = "Begrüßungstext";
        anchor12.setAttribute("class", "navAnchor");
        anchor12.setAttribute("href", "01Startseite.html#begruessungstext");
        let listenelement13: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor13: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor13.innerHTML = "Anmerkung";
        anchor13.setAttribute("class", "navAnchor");
        anchor13.setAttribute("href", "01Startseite.html#anmerkung");
        /*let listenelement14: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor14: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor14.innerHTML = "Impressum, Datenschutz, Kontakt";
        anchor14.setAttribute("class", "navAnchor");
        anchor14.setAttribute("href", "01Startseite.html#ImpressumKontakt");*/

        
        unterunternav2.setAttribute("class", "versteckt");
        let listenelement21: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor21: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor21.innerHTML = "Start";
        anchor21.setAttribute("class", "navAnchor");
        anchor21.setAttribute("href", "02ueberMich.html#Start2");
        let listenelement22: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor22: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor22.innerHTML = "Allgemeines";
        anchor22.setAttribute("class", "navAnchor");
        anchor22.setAttribute("href", "02ueberMich.html#allgemeines");
        let listenelement23: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor23: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor23.innerHTML = "Hobbys";
        anchor23.setAttribute("class", "navAnchor");
        anchor23.setAttribute("href", "02ueberMich.html#Hobbys");
        let listenelement24: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor24: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor24.innerHTML = "Preferierte Medien";
        anchor24.setAttribute("class", "navAnchor");
        anchor24.setAttribute("href", "02ueberMich.html#MedienBeispiele");
        let listenelement25: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor25: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor25.innerHTML = "Ziele";
        anchor25.setAttribute("class", "navAnchor");
        anchor25.setAttribute("href", "02ueberMich.html#Ziele");

        
        unterunternav3.setAttribute("class", "versteckt");
        let listenelement31: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor31: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor31.innerHTML = "Start";
        anchor31.setAttribute("class", "navAnchor");
        anchor31.setAttribute("href", "03Lebenslauf.html#lebenslauf");
        let listenelement32: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor32: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor32.innerHTML = "Studium Medieninformatik";
        anchor32.setAttribute("class", "navAnchor");
        anchor32.setAttribute("href", "03Lebenslauf.html#Studium");
        let listenelement33: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor33: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor33.innerHTML = "Ausbildung";
        anchor33.setAttribute("class", "navAnchor");
        anchor33.setAttribute("href", "03Lebenslauf.html#Ausbildung");
        let listenelement34: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor34: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor34.innerHTML = "Freiwilliges soziales Jahr";
        anchor34.setAttribute("class", "navAnchor");
        anchor34.setAttribute("href", "03Lebenslauf.html#FSJ");
        let listenelement35: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor35: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor35.innerHTML = "Schulzeit";
        anchor35.setAttribute("class", "navAnchor");
        anchor35.setAttribute("href", "03Lebenslauf.html#Schulzeit");

        
        unterunternav4.setAttribute("class", "versteckt");
        let listenelement41: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor41: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor41.innerHTML = "Start";
        anchor41.setAttribute("class", "navAnchor");
        anchor41.setAttribute("href", "04Arbeitsbeispiele.html#projekte");
        let listenelement42: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor42: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor42.innerHTML = "Webprojekte - Gis";
        anchor42.setAttribute("class", "navAnchor");
        anchor42.setAttribute("href", "04Arbeitsbeispiele.html#WebGis");
        let listenelement43: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor43: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor43.innerHTML = "CGI Projekte";
        anchor43.setAttribute("class", "navAnchor");
        anchor43.setAttribute("href", "04Arbeitsbeispiele.html#CGI");
        let listenelement44: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor44: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor44.innerHTML = "Bildbearbeitungen und Logos";
        anchor44.setAttribute("class", "navAnchor");
        anchor44.setAttribute("href", "04Arbeitsbeispiele.html#Bildbearbeitungen");
        let listenelement45: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor45: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor45.innerHTML = "Sonstige Webprojekte";
        anchor45.setAttribute("class", "navAnchor");
        anchor45.setAttribute("href", "04Arbeitsbeispiele.html#WebPrakt");
        let listenelement46: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor46: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor46.innerHTML = "Audioprojekte";
        anchor46.setAttribute("class", "navAnchor");
        anchor46.setAttribute("href", "04Arbeitsbeispiele.html#Audioprojekte");

        
        unterunternav5.setAttribute("class", "versteckt");
        let listenelement51: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor51: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor51.innerHTML = "Start";
        anchor51.setAttribute("class", "navAnchor");
        anchor51.setAttribute("href", "05ZeugnisseundZertifikate.html#Zeugnisse");
        let listenelement52: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor52: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor52.innerHTML = "Studium Zeugnis";
        anchor52.setAttribute("class", "navAnchor");
        anchor52.setAttribute("href", "05ZeugnisseundZertifikate.html#StudiumZeug");
        let listenelement53: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor53: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor53.innerHTML = "Ausbildungs Zeugnis";
        anchor53.setAttribute("class", "navAnchor");
        anchor53.setAttribute("href", "05ZeugnisseundZertifikate.html#AusbildungZeug");
        let listenelement54: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor54: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor54.innerHTML = "FSJ Bescheinigung";
        anchor54.setAttribute("class", "navAnchor");
        anchor54.setAttribute("href", "05ZeugnisseundZertifikate.html#FSJZeug");
        let listenelement55: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor55: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor55.innerHTML = "Schul-Zeugnis";
        anchor55.setAttribute("class", "navAnchor");
        anchor55.setAttribute("href", "05ZeugnisseundZertifikate.html#SchuleZeug");
        let listenelement56: HTMLLIElement = <HTMLLIElement>document.createElement("li");
        let anchor56: HTMLAnchorElement = <HTMLAnchorElement>document.createElement("a");
        anchor56.innerHTML = "Sonstige Zertifikate";
        anchor56.setAttribute("class", "navAnchor");
        anchor56.setAttribute("href", "05ZeugnisseundZertifikate.html#sonstZert");
        
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
        unterunternav3.appendChild(listenelement35);

        unterunternav4.appendChild(listenelement41);
        unterunternav4.appendChild(listenelement42);
        unterunternav4.appendChild(listenelement43);
        unterunternav4.appendChild(listenelement44);
        unterunternav4.appendChild(listenelement45);
        unterunternav4.appendChild(listenelement46);

        unterunternav5.appendChild(listenelement51);
        unterunternav5.appendChild(listenelement52);
        unterunternav5.appendChild(listenelement53);
        unterunternav5.appendChild(listenelement54);
        unterunternav5.appendChild(listenelement55);
        unterunternav5.appendChild(listenelement56);
    
        listenelement11.appendChild(anchor11);
        listenelement12.appendChild(anchor12);
        listenelement13.appendChild(anchor13);

        listenelement21.appendChild(anchor21);
        listenelement22.appendChild(anchor22);
        listenelement23.appendChild(anchor23);
        listenelement24.appendChild(anchor24);
        listenelement25.appendChild(anchor25);

        listenelement31.appendChild(anchor31);
        listenelement32.appendChild(anchor32);
        listenelement33.appendChild(anchor33);
        listenelement34.appendChild(anchor34);
        listenelement35.appendChild(anchor35);

        listenelement41.appendChild(anchor41);
        listenelement42.appendChild(anchor42);
        listenelement43.appendChild(anchor43);
        listenelement44.appendChild(anchor44);
        listenelement45.appendChild(anchor45);
        listenelement46.appendChild(anchor46);

        listenelement51.appendChild(anchor51);
        listenelement52.appendChild(anchor52);
        listenelement53.appendChild(anchor53);
        listenelement54.appendChild(anchor54);
        listenelement55.appendChild(anchor55);
        listenelement56.appendChild(anchor56);
    }

    function hndl_Click(): void {
        if (kreuz.className == "kreuz" || "" ) {
            kreuz.className = "plus";
            unternav.setAttribute("class", "offen");

            unternav.animate([
                { transform: "translate3D(-200px, 0, 0)" }, 
                { transform: "translate3D(0px, 0, 0)" }
            ], 
                             {duration: 1000}
            );

            unternav.setAttribute("class", "geschlossen");

            kreuz.animate([
                {transform: "rotate(180deg)"}
            ],
                          {duration: 1000}
            );
            kreuz.setAttribute("src", "00Design/Logos/plus.png");
        } else {   
            kreuz.className = "kreuz";
            unternav.setAttribute("class", "geschlossen");
            unternav.animate([
                { transform: "translate3D(200px, 0, 0)" }, 
                { transform: "translate3D(0, 0, 0)" }
            ], 
                             {duration: 1000}
            );
            unternav.setAttribute("class", "offen");
            
            kreuz.animate([
                {transform: "rotate(-180deg)"}
            ],
                          {duration: 1000}
            );
            kreuz.setAttribute("src", "00Design/Logos/X.png");
        }
    }

    function hndl_erscheinen1(): void {
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
        } else {
            anchor1.className = "";
            unterunternav1.className = "versteckt";
        }
    }

    function hndl_erscheinen2(): void {
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
        } else {
            anchor2.setAttribute("class", "");
            unterunternav2.className = "versteckt";
        }
    }

    function hndl_erscheinen3(): void {
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
        } else {
            anchor3.setAttribute("class", "");
            unterunternav3.className = "versteckt";
        }
    }

    function hndl_erscheinen4(): void {
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
        } else {
            anchor4.setAttribute("class", "");
            unterunternav4.className = "versteckt";
        }
    }

    function hndl_erscheinen5(): void {
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
        } else {
            anchor5.setAttribute("class", "");
            unterunternav5.className = "versteckt";
        }
    }

    /*//////////////////////////////////////////////////////////////////////////////*/
    /*Bildrondel*/
    /*//////////////////////////////////////////////////////////////////////////////*/
/*
    let bildrondel: HTMLDivElement = <HTMLDivElement>document.getElementById("bildrondel1");
    let buttonlinks: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    buttonlinks.addEventListener("click", hndl_links);
    let buttonrechts: HTMLButtonElement = <HTMLButtonElement>document.createElement("button");
    buttonrechts.addEventListener("click", hndl_rechts);

    let bild1: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    bild1.setAttribute("src", "00Design/Logos/burger.png");
    bild1.setAttribute("class", "bildactive");

    let bild2: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    bild1.setAttribute("src", "00Design/Logos/plus.png");

    let bild3: HTMLImageElement = <HTMLImageElement>document.createElement("img");
    bild1.setAttribute("src", "00Design/Logos/X.png");

    let bildmagazin: HTMLImageElement[] = [bild1, bild2, bild3];

    function hndl_links(): void {

    }
    
    function hndl_rechts(): void {

    }*/


    /*if (bildrondel)*/
}