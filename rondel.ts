namespace mediaObjektePortfolio {
    main();
    function main(): void {
        fillrondel();
        show("all", "start");
    }
    

    let butLinksProg: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksProg");
    butLinksProg.addEventListener("click", hndl_links_Prog);
    let butRechtsProg: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksProg");
    butRechtsProg.addEventListener("click", hndl_rechts_Prog);

    let butLinksCGI: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksCGI");
    butLinksCGI.addEventListener("click", hndl_links_CGI);
    let butRechtsCGI: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsCGI");
    butRechtsCGI.addEventListener("click", hndl_rechts_CGI);

    let butLinksPic: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksPic");
    butLinksPic.addEventListener("click", hndl_links_Pic);
    let butRechtsPic: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsPic");
    butRechtsPic.addEventListener("click", hndl_rechts_Pic);

    let butLinksUX: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksUX");
    butLinksUX.addEventListener("click", hndl_links_UX);
    let butRechtsUX: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsUX");
    butRechtsUX.addEventListener("click", hndl_rechts_UX);

    let butLinksAud: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksAud");
    butLinksAud.addEventListener("click", hndl_links_Aud);
    let butRechtsAud: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsAud");
    butRechtsAud.addEventListener("click", hndl_rechts_Aud);

    let butLinksZert: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksZert");
    butLinksZert.addEventListener("click", hndl_links_Zert);
    let butRechtsZert: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsZert");
    butRechtsZert.addEventListener("click", hndl_rechts_Zert);

    /*let angezeigtProg: mediaObjekt[];
    let angezeigtCGI: mediaObjekt[];
    let angezeigtPic: mediaObjekt[];
    let angezeigtUX: mediaObjekt[];
    let angezeigtAud: mediaObjekt[];
    let angezeigtZert: mediaObjekt[];*/

    let divConProgText: HTMLDivElement[];
    let divConProgMed: HTMLDivElement[];
    let divConCGIText: HTMLDivElement[];
    let divConCGIMed: HTMLDivElement[];
    let divConPicText: HTMLDivElement[];
    let divConPicMed: HTMLDivElement[];
    let divConUXText: HTMLDivElement[];
    let divConUXMed: HTMLDivElement[];
    let divConAudText: HTMLDivElement[];
    let divConAudMed: HTMLDivElement[];
    let divConZertText: HTMLDivElement[];
    let divConZertMed: HTMLDivElement[];

    /*function selectSection(): void {
        
            switch (listMedia[i].seite) {
                case "rondelProg":
                    //angezeigtProg.push(listMedia[i]);
                    fillrondel(i);
                    break;
                case "rondelCGI":
                    //angezeigtCGI.push(listMedia[i]);
                    fillrondel(i);
                    break;
                case "rondelPic":
                    //angezeigtPic.push(listMedia[i]);
                    fillrondel(i);
                    break;
                case "rondelUX":
                    //angezeigtUX.push(listMedia[i]);
                    fillrondel(i);
                    break;
                case "rondelAud":
                    //angezeigtAud.push(listMedia[i]);
                    fillrondel(i);
                    break;
                case "rondelZert":
                    //angezeigtZert.push(listMedia[i]);
                    fillrondel( i);
                    break;
                default:
                    console.log("Es ist ein Objekt erfasst worden welches keine richtige Kategorie besitzt.");
                    break;
            }
        }
    }*/

    function fillrondel(): void {
        
        for (let i: number = 0; i < listMedia.length; i++) {
            let divText: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            let divMedia: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            let text: HTMLParagraphElement = <HTMLParagraphElement> document.createElement("p");
            text.innerHTML = listMedia[i].text;
            text.className = "rondelElementText";
            switch (listMedia[i].typ) {
                case "bild":
                    let mediaBild: HTMLImageElement = <HTMLImageElement> document.createElement("img");
                    mediaBild.src = listMedia[i].mediapfad;
                    mediaBild.className = "rondelElementBild";
                    mediaBild.alt = listMedia[i].typ;
                    break;
                case "video":
                    let mediaVideo: HTMLVideoElement = <HTMLVideoElement> document.createElement("video");
                    let mediaVideoSource: HTMLSourceElement = <HTMLSourceElement> document.createElement("source");
                    mediaVideoSource.src = listMedia[i].mediapfad;
                    mediaVideoSource.type = "video/mp4";
                    mediaVideo.setAttribute("controls", "");
                    mediaVideo.className = "rondelElementVideo";
                    mediaVideo.innerHTML = "Your Browser does not support this tag";
                    mediaVideo.appendChild(mediaVideoSource);
                    break;
                case "audio":
                    let mediaAudio: HTMLAudioElement = <HTMLAudioElement> document.createElement("audio");
                    mediaAudio.setAttribute("controls", "");
                    mediaAudio.innerHTML = "Your Browser does not support this tag";
                    let mediaAudioSource: HTMLSourceElement = <HTMLSourceElement> document.createElement("source");
                    mediaAudioSource.src = listMedia[i].mediapfad;
                    mediaAudioSource.type = "audio/mpeg";
                    mediaAudio.appendChild(mediaAudioSource);
                    break;
                default:
                    console.log("Es gibt ein Problem bei den Mediaarten.");
                    break;
            }
            
            switch (listMedia[i].kapitel) {
                case "rondelProg":
                    divConProgText.push(divText);
                    divConProgMed.push(divMedia);
                    break;
                case "rondelCGI":
                    divConCGIText.push(divText);
                    divConCGIMed.push(divMedia);
                    break;
                case "rondelrondelPic":
                    divConPicText.push(divText);
                    divConPicMed.push(divMedia);
                    break;
                case "rondelUX":
                    divConUXText.push(divText);
                    divConUXMed.push(divMedia);
                    break;
                case "rondelAud":
                    divConAudText.push(divText);
                    divConAudMed.push(divMedia);
                    break;
                case "rondelZert":
                    divConZertText.push(divText);
                    divConZertMed.push(divMedia);
                    break;
            }
        }
    }

    function hndl_links_Prog(): void {
        show("Prog", "+1");
    }

    function hndl_rechts_Prog(): void {
        show("Prog", "-1");
    }

    function hndl_links_CGI(): void {
        show("CGI", "+1");
    }

    function hndl_rechts_CGI(): void {
        show("CGI", "-1");
    }

    function hndl_links_Pic(): void {
        show("Pic", "+1");
    }

    function hndl_rechts_Pic(): void {
        show("Pic", "-1");
    }

    function hndl_links_UX(): void {
        show("UX", "+1");
    }

    function hndl_rechts_UX(): void {
        show("UX", "-1");
    }

    function hndl_links_Aud(): void {
        show("Aud", "+1");
    }

    function hndl_rechts_Aud(): void {
        show("Aud", "-1");
    }

    function hndl_links_Zert(): void {
        show("Zert", "+1");
    }

    function hndl_rechts_Zert(): void {
        show("Zert", "-1");
    }

    function show (_section: string, _order: string): void {
        let rondelDivProgtext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelProgtext");
        let rondelDivProgmed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelProgmed");
        let rondelDivCGItext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelCGItext");
        let rondelDivCGImed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelCGImed");
        let rondelDivPictext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelPictext");
        let rondelDivPicmed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelPicmed");
        let rondelDivUXtext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelUXtext");
        let rondelDivUXmed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelUXmed");
        let rondelDivAudtext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelAudtext");
        let rondelDivAudmed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelAudmed");
        let rondelDivZerttext: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelZerttext");
        let rondelDivZertmed: HTMLDivElement = <HTMLDivElement>document.getElementById("rondelZertmed");
        switch (_section) {
            case "all": 
                if (rondelDivProgtext)
                    rondelDivProgmed.appendChild(divConProgText[0]);
                if (rondelDivProgmed)
                    rondelDivProgmed.appendChild(divConProgMed[0]);
                if (rondelDivCGItext)
                    rondelDivCGItext.appendChild(divConCGIText[0]);
                if (rondelDivCGImed)
                    rondelDivCGImed.appendChild(divConCGIMed[0]);
                if (rondelDivPictext)
                    rondelDivPictext.appendChild(divConPicText[0]);
                if (rondelDivPicmed)
                    rondelDivPicmed.appendChild(divConPicMed[0]);
                if (rondelDivUXtext)
                    rondelDivUXtext.appendChild(divConUXText[0]);
                if (rondelDivUXmed)
                    rondelDivUXmed.appendChild(divConUXMed[0]);
                if (rondelDivAudtext)
                    rondelDivAudtext.appendChild(divConAudText[0]);
                if (rondelDivAudmed)
                    rondelDivAudmed.appendChild(divConAudMed[0]);
                if (rondelDivZerttext)
                    rondelDivZerttext.appendChild(divConZertText[0]);
                if (rondelDivZertmed)
                    rondelDivZertmed.appendChild(divConZertMed[0]);
                break;
            case "Prog":
                break;
            case "CGI":
                break;
            case "Pic":
                break;
            case "UX":
                break;
            case "Aud":
                break;
            case "Zert":
                break;
            default:
                console.log("Etwas stimmt mit den anzeigenbefehlen nicht");
        }
    }
}