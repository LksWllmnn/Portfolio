namespace mediaObjektePortfolio {
    //Media und Text Divs in welche die Inhalte ringeladen werden
    let windowProgText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowProg");
    let windowProgMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediaWindowProg");
    
    let windowCGIText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowCGI");
    let windowCGIMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediaWindowCGI");
    
    let windowAudText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowAud");
    let windowAudMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediaWindowAud");
    
    let windowPicText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowPic");
    let windowPicMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediaWindowPic");
    
    let windowUXText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowUX");
    let windowUXMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediaWindowUX");
    
    let windowZeugText: HTMLDivElement = <HTMLDivElement>document.getElementById("textWindowZert");
    let windowZeugMedia: HTMLDivElement = <HTMLDivElement>document.getElementById("mediatWindowZert");
    
    //Knöpfe zur Bedienung des Rondels
    let butLinksProg: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksProg");
    if (butLinksProg) {
        butLinksProg.addEventListener("click", hndl_links_Prog);
        butLinksProg.className = "klickbar";
    }
    let butLinksProgSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksProgSmall");
    if (butLinksProgSmall) {
        butLinksProgSmall.addEventListener("click", hndl_links_ProgSmall);
        butLinksProgSmall.className = "klickbar";
    }
    let butRechtsProg: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsProg");
    if (butRechtsProg) {
        butRechtsProg.addEventListener("click", hndl_rechts_Prog);
        butRechtsProg.className = "nichtKlickbar";
    }
    let butRechtsProgSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsProgSmall");
    if (butRechtsProgSmall) {
        butRechtsProgSmall.addEventListener("click", hndl_rechts_ProgSmall);
        butRechtsProgSmall.className = "nichtKlickbar";
    }
    
    let butLinksCGI: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksCGI");
    if (butLinksCGI) {
        butLinksCGI.addEventListener("click", hndl_links_CGI);
        butLinksCGI.className = "klickbar";
    }
    let butLinksCGISmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksCGISmall");
    if (butLinksCGISmall) {
        butLinksCGISmall.addEventListener("click", hndl_links_CGISmall);
        butLinksCGISmall.className = "klickbar";
    }
    let butRechtsCGI: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsCGI");
    if (butRechtsCGI) {
        butRechtsCGI.addEventListener("click", hndl_rechts_CGI);
        butRechtsCGI.className = "nichtKlickbar";
    }
    let butRechtsCGISmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsCGISmall");
    if (butRechtsCGISmall) {
        butRechtsCGISmall.addEventListener("click", hndl_rechts_CGISmall);
        butRechtsCGISmall.className = "nichtKlickbar";
    }
    
    let butLinksPic: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksPic");
    if (butLinksPic) {
        butLinksPic.addEventListener("click", hndl_links_Pic);
        butLinksPic.className = "klickbar";
    }
    let butLinksPicSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksPicSmall");
    if (butLinksPicSmall) {
        butLinksPicSmall.addEventListener("click", hndl_links_PicSmall);
        butLinksPicSmall.className = "klickbar";
    }
    let butRechtsPic: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsPic");
    if (butRechtsPic) {
        butRechtsPic.addEventListener("click", hndl_rechts_Pic);
        butRechtsPic.className = "nichtKlickbar";
    }
    let butRechtsPicSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsPicSmall");
    if (butRechtsPicSmall) {
        butRechtsPicSmall.addEventListener("click", hndl_rechts_PicSmall);
        butRechtsPicSmall.className = "nichtKlickbar";
    }
    
    let butLinksUX: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksUX");
    if (butLinksUX) {
        butLinksUX.addEventListener("click", hndl_links_UX);
        butLinksUX.className = "klickbar";
    }
    let butLinksUXSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksUXSmall");
    if (butLinksUXSmall) {
        butLinksUXSmall.addEventListener("click", hndl_links_UXSmall);
        butLinksUXSmall.className = "klickbar";
    }
    let butRechtsUX: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsUX");
    if (butRechtsUX) {
        butRechtsUX.addEventListener("click", hndl_rechts_UX);
        butRechtsUX.className = "nichtKlickbar";
    }
    let butRechtsUXSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsUXSmall");
    if (butRechtsUXSmall) {
        butRechtsUXSmall.addEventListener("click", hndl_rechts_UXSmall);
        butRechtsUXSmall.className = "nichtKlickbar";
    }
    
    let butLinksAud: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksAud");
    if (butLinksAud) {
        butLinksAud.addEventListener("click", hndl_links_Aud);
        butLinksAud.className = "klickbar";
    }
    let butLinksAudSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksAudSmall");
    if (butLinksAudSmall) {
        butLinksAudSmall.addEventListener("click", hndl_links_AudSmall);
        butLinksAudSmall.className = "klickbar";
    }
    let butRechtsAud: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsAud");
    if (butRechtsAud) {
        butRechtsAud.addEventListener("click", hndl_rechts_Aud);
        butRechtsAud.className = "nichtKlickbar";
    }
    let butRechtsAudSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsAudSmall");
    if (butRechtsAudSmall) {
        butRechtsAudSmall.addEventListener("click", hndl_rechts_AudSmall);
        butRechtsAudSmall.className = "nichtKlickbar";
    }
    
    let butLinksZert: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksZert");
    if (butLinksZert) {
        butLinksZert.addEventListener("click", hndl_links_Zert);
        butLinksZert.className = "klickbar";
    }
    let butLinksZertSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butLinksZertSmall");
    if (butLinksZertSmall) {
        butLinksZertSmall.addEventListener("click", hndl_links_ZertSmall);
        butLinksZertSmall.className = "klickbar";
    }
    let butRechtsZert: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsZert");
    if (butRechtsZert) {
        butRechtsZert.addEventListener("click", hndl_rechts_Zert);
        butRechtsZert.className = "nichtKlickbar";
    }
    let butRechtsZertSmall: HTMLButtonElement = <HTMLButtonElement>document.getElementById("butRechtsZertSmall");
    if (butRechtsZertSmall) {
        butRechtsZertSmall.addEventListener("click", hndl_rechts_ZertSmall);
        butRechtsZertSmall.className = "nichtKlickbar";
    }
    
    let rondelProgAktiv: number = 1;
    let rondelCGIAktiv: number = 1;
    let rondelPicAktiv: number = 1;
    let rondelUXAktiv: number = 1;
    let rondelAudAktiv: number = 1;
    let rondelZertAktiv: number = 1;

    let platzhalter: HTMLDivElement = <HTMLDivElement>document.createElement("div");
    

    let divConProgText: HTMLDivElement[] = [platzhalter];
    let divConProgMed: HTMLDivElement[]  = [platzhalter];
    let divConCGIText: HTMLDivElement[]  = [platzhalter];
    let divConCGIMed: HTMLDivElement[]  = [platzhalter];
    let divConPicText: HTMLDivElement[]  = [platzhalter];
    let divConPicMed: HTMLDivElement[] = [platzhalter];
    let divConUXText: HTMLDivElement[] = [platzhalter];
    let divConUXMed: HTMLDivElement[] = [platzhalter];
    let divConAudText: HTMLDivElement[] = [platzhalter];
    let divConAudMed: HTMLDivElement[] = [platzhalter];
    let divConZertText: HTMLDivElement[] = [platzhalter];
    let divConZertMed: HTMLDivElement[] = [platzhalter];
    main();
    
    function main(): void {
        fillrondel();
        show("all", "start");
    }

    function fillrondel(): void {
        
        for (let i: number = 0; i < listMedia.length; i++) {
            let divText: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            let divMedia: HTMLDivElement = <HTMLDivElement> document.createElement("div");
            let text: HTMLParagraphElement = <HTMLParagraphElement> document.createElement("p");
            text.innerHTML = listMedia[i].text;
            text.className = "rondelElementText";
            divText.appendChild(text);
            switch (listMedia[i].typ) {
                case "bild":
                    let mediaBild: HTMLImageElement = <HTMLImageElement> document.createElement("img");
                    mediaBild.src = listMedia[i].mediapfad;
                    mediaBild.className = "rondelElementBild";
                    mediaBild.alt = listMedia[i].typ;
                    divMedia.appendChild(mediaBild);
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
                    divMedia.appendChild(mediaVideo);
                    break;
                case "audio":
                    let mediaAudio: HTMLAudioElement = <HTMLAudioElement> document.createElement("audio");
                    mediaAudio.setAttribute("controls", "");
                    mediaAudio.innerHTML = "Your Browser does not support this tag";
                    let mediaAudioSource: HTMLSourceElement = <HTMLSourceElement> document.createElement("source");
                    mediaAudioSource.src = listMedia[i].mediapfad;
                    mediaAudioSource.type = "audio/mpeg";
                    mediaAudio.appendChild(mediaAudioSource);
                    divMedia.appendChild(mediaAudio);
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
        wechsel("Prog", "+1");
        butLinksProg.removeEventListener("click", hndl_links_Prog);
        setTimeout(function(): void {
            butLinksProg.addEventListener("click", hndl_links_Prog);
        },         400);
    }

    function hndl_links_ProgSmall(): void {
        wechsel("Prog", "+1");
        butLinksProgSmall.removeEventListener("click", hndl_links_ProgSmall);
        setTimeout(function(): void {
            butLinksProgSmall.addEventListener("click", hndl_links_ProgSmall);
        },         400);
    }

    function hndl_rechts_Prog(): void {
        wechsel("Prog", "-1");
        butRechtsProg.removeEventListener("click", hndl_rechts_Prog);
        setTimeout(function(): void {
            butRechtsProg.addEventListener("click", hndl_rechts_Prog);
        },         400);
    }

    function hndl_rechts_ProgSmall(): void {
        wechsel("Prog", "-1");
        butRechtsProgSmall.removeEventListener("click", hndl_rechts_ProgSmall);
        setTimeout(function(): void {
            butRechtsProgSmall.addEventListener("click", hndl_rechts_ProgSmall);
        },         400);
    }

    function hndl_links_CGI(): void {
        wechsel("CGI", "+1");
        butLinksCGI.removeEventListener("click", hndl_links_CGI);
        setTimeout(function(): void {
            butLinksCGI.addEventListener("click", hndl_links_CGI);
        },         400);
    }

    function hndl_links_CGISmall(): void {
        wechsel("CGI", "+1");
        butLinksCGISmall.removeEventListener("click", hndl_links_CGISmall);
        setTimeout(function(): void {
            butLinksCGISmall.addEventListener("click", hndl_links_CGISmall);
        },         400);
    }

    function hndl_rechts_CGI(): void {
        wechsel("CGI", "-1");
        butRechtsCGI.removeEventListener("click", hndl_rechts_CGI);
        setTimeout(function(): void {
            butRechtsCGI.addEventListener("click", hndl_rechts_CGI);
        },         400);
    }

    function hndl_rechts_CGISmall(): void {
        wechsel("CGI", "-1");
        butRechtsCGISmall.removeEventListener("click", hndl_rechts_CGISmall);
        setTimeout(function(): void {
            butRechtsCGISmall.addEventListener("click", hndl_rechts_CGISmall);
        },         400);
    }

    function hndl_links_Pic(): void {
        wechsel("Pic", "+1");
        butLinksPic.removeEventListener("click", hndl_links_Pic);
        setTimeout(function(): void {
            butLinksPic.addEventListener("click", hndl_links_Pic);
        },         400);
    }

    function hndl_links_PicSmall(): void {
        wechsel("Pic", "+1");
        butLinksPicSmall.removeEventListener("click", hndl_links_PicSmall);
        setTimeout(function(): void {
            butLinksPicSmall.addEventListener("click", hndl_links_PicSmall);
        },         400);
    }

    function hndl_rechts_Pic(): void {
        wechsel("Pic", "-1");
        butRechtsPic.removeEventListener("click", hndl_rechts_Pic);
        setTimeout(function(): void {
            butRechtsPic.addEventListener("click", hndl_rechts_Pic);
        },         400);
    }

    function hndl_rechts_PicSmall(): void {
        wechsel("Pic", "-1");
        butRechtsPicSmall.removeEventListener("click", hndl_rechts_PicSmall);
        setTimeout(function(): void {
            butRechtsPicSmall.addEventListener("click", hndl_rechts_PicSmall);
        },         400);
    }

    function hndl_links_UX(): void {
        wechsel("UX", "+1");
        butLinksUX.removeEventListener("click", hndl_links_UX);
        setTimeout(function(): void {
            butLinksUX.addEventListener("click", hndl_links_UX);
        },         400);
    }

    function hndl_links_UXSmall(): void {
        wechsel("UX", "+1");
        butLinksUXSmall.removeEventListener("click", hndl_links_UXSmall);
        setTimeout(function(): void {
            butLinksUXSmall.addEventListener("click", hndl_links_UXSmall);
        },         400);
    }

    function hndl_rechts_UX(): void {
        wechsel("UX", "-1");
        butRechtsUX.removeEventListener("click", hndl_rechts_UX);
        setTimeout(function(): void {
            butRechtsUX.addEventListener("click", hndl_rechts_UX);
        },         400);
    }

    function hndl_rechts_UXSmall(): void {
        wechsel("UX", "-1");
        butRechtsUXSmall.removeEventListener("click", hndl_rechts_UXSmall);
        setTimeout(function(): void {
            butRechtsUXSmall.addEventListener("click", hndl_rechts_UXSmall);
        },         400);
    }

    function hndl_links_Aud(): void {
        wechsel("Aud", "+1");
        butLinksAud.removeEventListener("click", hndl_links_Aud);
        setTimeout(function(): void {
            butLinksAud.addEventListener("click", hndl_links_Aud);
        },         400);
    }

    function hndl_links_AudSmall(): void {
        wechsel("Aud", "+1");
        butLinksAudSmall.removeEventListener("click", hndl_links_AudSmall);
        setTimeout(function(): void {
            butLinksAudSmall.addEventListener("click", hndl_links_AudSmall);
        },         400);
    }

    function hndl_rechts_Aud(): void {
        wechsel("Aud", "-1");
        butRechtsAud.removeEventListener("click", hndl_rechts_Aud);
        setTimeout(function(): void {
            butRechtsAud.addEventListener("click", hndl_rechts_Aud);
        },         400);
    }

    function hndl_rechts_AudSmall(): void {
        wechsel("Aud", "-1");
        butRechtsAudSmall.removeEventListener("click", hndl_rechts_AudSmall);
        setTimeout(function(): void {
            butRechtsAudSmall.addEventListener("click", hndl_rechts_AudSmall);
        },         400);
    }

    function hndl_links_Zert(): void {
        wechsel("Zert", "+1");
        butLinksZert.removeEventListener("click", hndl_links_Zert);
        setTimeout(function(): void {
            butLinksZert.addEventListener("click", hndl_links_Zert);
        },         400);
    }

    function hndl_links_ZertSmall(): void {
        wechsel("Zert", "+1");
        butLinksZertSmall.removeEventListener("click", hndl_links_ZertSmall);
        setTimeout(function(): void {
            butLinksZertSmall.addEventListener("click", hndl_links_ZertSmall);
        },         400);
    }

    function hndl_rechts_Zert(): void {
        wechsel("Zert", "-1");
        butRechtsZert.removeEventListener("click", hndl_rechts_Zert);
        setTimeout(function(): void {
            butRechtsZert.addEventListener("click", hndl_rechts_Zert);
        },         400);
    }

    function hndl_rechts_ZertSmall(): void {
        wechsel("Zert", "-1");
        butRechtsZertSmall.removeEventListener("click", hndl_rechts_ZertSmall);
        setTimeout(function(): void {
            butRechtsZertSmall.addEventListener("click", hndl_rechts_ZertSmall);
        },         400);
    }

    function show (_section: string, _order: string): void {
        
        //alle bilder und Texte werden als childelemente dem Fenster Prog zugeordnet aber später werden nicht alle angezeigt
        for (let i: number = 0; i < divConProgText.length; i++) {
            if (windowProgText && windowProgMedia ) {
                divConProgText[i].className = "rondelNichtAngezeigt";
                windowProgText.appendChild(divConProgText[i]);
                divConProgMed[i].className = "rondelNichtAngezeigt";
                windowProgMedia.appendChild(divConProgMed[i]);
            }
        }

        for (let i: number = 0; i < divConCGIText.length; i++) {
            if (windowCGIText && windowCGIMedia) {
                divConCGIText[i].className = "rondelNichtAngezeigt";
                windowCGIText.appendChild(divConCGIText[i]);
                divConCGIMed[i].className = "rondelNichtAngezeigt";
                windowCGIMedia.appendChild(divConCGIMed[i]);
            }
        }

        for (let i: number = 0; i < divConAudText.length; i++) {
            if (windowAudText && windowAudMedia) {
                divConAudText[i].className = "rondelNichtAngezeigt";
                windowAudText.appendChild(divConAudText[i]);
                divConAudMed[i].className = "rondelNichtAngezeigt";
                windowAudMedia.appendChild(divConAudMed[i]);
            }
        }

        for (let i: number = 0; i < divConPicText.length; i++) {
            if (windowPicText && windowPicMedia) {
                divConPicText[i].className = "rondelNichtAngezeigt";
                windowPicText.appendChild(divConPicText[i]);
                divConPicMed[i].className = "rondelNichtAngezeigt";
                windowPicMedia.appendChild(divConPicMed[i]);
            }
        }

        for (let i: number = 0; i < divConUXText.length; i++) {
            if (windowUXText && windowUXMedia) {
                divConUXText[i].className = "rondelNichtAngezeigt";
                windowUXText.appendChild(divConUXText[i]);
                divConUXMed[i].className = "rondelNichtAngezeigt";
                windowUXMedia.appendChild(divConUXMed[i]);
            }
        }

        for (let i: number = 0; i < divConZertText.length; i++) {
            if (windowZeugText && windowZeugMedia) {
                divConZertText[i].className = "rondelNichtAngezeigt";
                windowZeugText.appendChild(divConZertText[i]);
                divConZertMed[i].className = "rondelNichtAngezeigt";
                windowZeugMedia.appendChild(divConZertMed[i]);
            }
        }
            
        if (windowProgText)
            divConProgText[1].className = "rondelAngezeigt";
        if (windowProgMedia)
            divConProgMed[1].className = "rondelAngezeigt";
        if (windowCGIText)
            divConCGIText[1].className = "rondelAngezeigt";
        if (windowCGIMedia)
            divConCGIMed[1].className = "rondelAngezeigt";
        if (windowPicText)
            divConPicText[1].className = "rondelAngezeigt";
        if (windowPicMedia)
            divConPicMed[1].className = "rondelAngezeigt";
        if (windowUXText)
            divConUXText[1].className = "rondelAngezeigt";
        if (windowUXMedia)
            divConUXMed[1].className = "rondelAngezeigt";
        if (windowAudText)
            divConAudText[1].className = "rondelAngezeigt";
        if (windowAudMedia)
            divConAudMed[1].className = "rondelAngezeigt";
        if (windowZeugText)
            divConZertText[1].className = "rondelAngezeigt";
        if (windowZeugMedia)
            divConZertMed[1].className = "rondelAngezeigt";
    }

    function wechsel(_section: string, _order: string): void {
        switch (_section) {
            case "Prog":
                if (_order == "+1") {
                    if (rondelProgAktiv < divConProgText.length - 1) {
                        rondelProgAktiv++;
                        divConProgText[rondelProgAktiv - 1].className = "rondelAngezeigt";
                        /*divConProgText[rondelProgAktiv - 1].animate([
                            { transform: "scale(1)" }, 
                            { transform: "scale(10)" }
                        ], 
                                                                    {duration: 1000}
                        );*/
                        
                        divConProgText[rondelProgAktiv - 1].className = "rondelNichtAngezeigt";
                        
                        divConProgText[rondelProgAktiv].className = "rondelAngezeigt";
                        /*divConProgText[rondelProgAktiv].animate([
                            { transform: "scale(10)" }, 
                            { transform: "scale(1)" }
                        ], 
                                                                {duration: 1000}
                        );*/
                        

                        divConProgMed[rondelProgAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                                   {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConProgMed[rondelProgAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConProgMed[rondelProgAktiv].className = "rondelAngezeigt";
                        divConProgMed[rondelProgAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                               {duration: 500}
                        );
                        butRechtsProg.className = "klickbar";
                        butRechtsProgSmall.className = "klickbar";
                        if (rondelProgAktiv == divConProgMed.length - 1) {
                            butLinksProg.className = "nichtKlickbar";
                            butLinksProgSmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelProgAktiv > 1) {
                        rondelProgAktiv--;
                        /*divConProgText[rondelProgAktiv + 1].animate([
                            { transform: "scale(1)" }, 
                            { transform: "scale(10)" }
                        ], 
                                                                    {duration: 1000}
                        );*/
                        
                        divConProgText[rondelProgAktiv + 1].className = "rondelNichtAngezeigt";
                        
                        
                        /*divConProgText[rondelProgAktiv].animate([
                            { transform: "scale(10)" }, 
                            { transform: "scale(1)" }
                        ], 
                                                                {duration: 1000}
                        );*/
                        divConProgText[rondelProgAktiv].className = "rondelAngezeigt";

                        divConProgMed[rondelProgAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(400px, 0, 0)" }
                        ], 
                                                                   {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConProgMed[rondelProgAktiv + 1].className = "rondelNichtAngezeigt";
                        },         400);
                        
                        divConProgMed[rondelProgAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                               {duration: 500}
                        );
                        divConProgMed[rondelProgAktiv].className = "rondelAngezeigt";
                        
                        butLinksProg.className = "klickbar";
                        butLinksProgSmall.className = "klickbar";
                        if (rondelProgAktiv == 1) {
                            butRechtsProg.className = "nichtKlickbar";
                            butRechtsProgSmall.className = "nichtKlickbar";
                        }
                        
                    } else if (rondelProgAktiv == 1) {
                        divConProgText[rondelProgAktiv].className = "rondelAngezeigt";
                        divConProgMed[rondelProgAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
            case "CGI":
                if (_order == "+1") {
                    if (rondelCGIAktiv < divConCGIText.length - 1) {
                        rondelCGIAktiv++;
                        divConCGIText[rondelCGIAktiv - 1].className = "rondelNichtAngezeigt";
                        divConCGIText[rondelCGIAktiv].className = "rondelAngezeigt";

                        divConCGIMed[rondelCGIAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                                 {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConCGIMed[rondelCGIAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
                        divConCGIMed[rondelCGIAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                             {duration: 500}
                        );
                        butRechtsCGI.className = "klickbar";
                        butRechtsCGISmall.className = "klickbar";
                        if (rondelCGIAktiv == divConCGIMed.length - 1) {
                            butLinksCGI.className = "nichtKlickbar";
                            butLinksCGISmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelCGIAktiv > 1) {
                    rondelCGIAktiv--;
                    divConCGIText[rondelCGIAktiv + 1].className = "rondelNichtAngezeigt";
                    divConCGIText[rondelCGIAktiv].className = "rondelAngezeigt";

                    divConCGIMed[rondelCGIAktiv + 1].animate([
                        { transform: "translate3D(0, 0, 0)" }, 
                        { transform: "translate3D(400px, 0, 0)" }
                    ], 
                                                             {duration: 500}
                    );
                    setTimeout(function (): void {
                        divConCGIMed[rondelCGIAktiv + 1].className = "rondelNichtAngezeigt";
                    },         500);
                    divConCGIMed[rondelCGIAktiv].animate([
                        { transform: "translate3D(-400px, 0, 0)" }, 
                        { transform: "translate3D(0px, 0, 0)" }
                    ], 
                                                         {duration: 500}
                    );
                    divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
                    } else if (rondelCGIAktiv == 1) {
                        divConCGIText[rondelCGIAktiv].className = "rondelAngezeigt";
                        divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
                    }
                    butLinksCGI.className = "klickbar";
                    butLinksCGISmall.className = "klickbar";
                    if (rondelCGIAktiv == 1) {
                        butRechtsCGI.className = "nichtKlickbar";
                        butRechtsCGISmall.className = "nichtKlickbar";
                    }
                }
                break;
            case "Pic":
                if (_order == "+1") {
                    if (rondelPicAktiv < divConPicText.length - 1) {
                        rondelPicAktiv++;
                        divConPicText[rondelPicAktiv - 1].className = "rondelNichtAngezeigt";
                        divConPicText[rondelPicAktiv].className = "rondelAngezeigt";

                        divConCGIMed[rondelCGIAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                                 {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConPicMed[rondelPicAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConPicMed[rondelPicAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                             {duration: 500}
                        );
                        divConPicMed[rondelPicAktiv].className = "rondelAngezeigt";
                        butRechtsPic.className = "klickbar";
                        butRechtsPicSmall.className = "klickbar";
                        if (rondelPicAktiv == divConPicMed.length - 1) {
                            butLinksPic.className = "nichtKlickbar";
                            butLinksPicSmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelPicAktiv > 1) {
                    rondelPicAktiv--;
                    divConPicText[rondelPicAktiv + 1].className = "rondelNichtAngezeigt";
                    divConPicText[rondelPicAktiv].className = "rondelAngezeigt";

                    divConPicMed[rondelPicAktiv + 1].animate([
                        { transform: "translate3D(0, 0, 0)" }, 
                        { transform: "translate3D(400px, 0, 0)" }
                    ], 
                                                             {duration: 500}
                    );
                    setTimeout(function (): void {
                        divConPicMed[rondelPicAktiv + 1].className = "rondelNichtAngezeigt";
                    },         400);
                    divConPicMed[rondelPicAktiv].animate([
                        { transform: "translate3D(-400px, 0, 0)" }, 
                        { transform: "translate3D(0px, 0, 0)" }
                    ], 
                                                         {duration: 500}
                    );
                    divConPicMed[rondelPicAktiv].className = "rondelAngezeigt";
                    
                    butLinksPic.className = "klickbar";
                    butLinksPicSmall.className = "klickbar";
                    if (rondelPicAktiv == 1) {
                        butRechtsPic.className = "nichtKlickbar";
                        butRechtsPicSmall.className = "nichtKlickbar";
                    }

                    } else if (rondelPicAktiv == 1) {
                        divConPicText[rondelPicAktiv].className = "rondelAngezeigt";
                        divConPicMed[rondelPicAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
            case "UX":
                if (_order == "+1") {
                    if (rondelUXAktiv < divConUXText.length - 1) {
                        rondelUXAktiv++;
                        divConUXText[rondelUXAktiv - 1].className = "rondelNichtAngezeigt";
                        divConUXText[rondelUXAktiv].className = "rondelAngezeigt";

                        divConUXMed[rondelUXAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                               {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConUXMed[rondelUXAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConUXMed[rondelUXAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                           {duration: 500}
                        );
                        divConUXMed[rondelUXAktiv].className = "rondelAngezeigt";
                        butRechtsUX.className = "klickbar";
                        butRechtsUXSmall.className = "klickbar";
                        if (rondelUXAktiv == divConUXMed.length - 1) {
                            butLinksUX.className = "nichtKlickbar";
                            butLinksUXSmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelUXAktiv > 1) {
                    rondelUXAktiv--;
                    divConUXText[rondelUXAktiv + 1].className = "rondelNichtAngezeigt";
                    divConUXText[rondelUXAktiv].className = "rondelAngezeigt";

                    divConUXMed[rondelUXAktiv + 1].animate([
                        { transform: "translate3D(0, 0, 0)" }, 
                        { transform: "translate3D(400px, 0, 0)" }
                    ], 
                                                           {duration: 500}
                    );
                    setTimeout(function (): void {
                        divConUXMed[rondelUXAktiv + 1].className = "rondelNichtAngezeigt";
                    },         400);
                    divConUXMed[rondelUXAktiv].animate([
                        { transform: "translate3D(-400px, 0, 0)" }, 
                        { transform: "translate3D(0px, 0, 0)" }
                    ], 
                                                       {duration: 500}
                    );
                    divConUXMed[rondelUXAktiv].className = "rondelAngezeigt";
                    butLinksUX.className = "klickbar";
                    butLinksUXSmall.className = "klickbar";
                    if (rondelUXAktiv == 1) {
                        butRechtsUX.className = "nichtKlickbar";
                        butRechtsUXSmall.className = "nichtKlickbar";
                    }

                    
                    } else if (rondelUXAktiv == 1) {
                        divConUXText[rondelUXAktiv].className = "rondelAngezeigt";
                        divConUXMed[rondelUXAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
            case "Aud":
                if (_order == "+1") {
                    if (rondelAudAktiv < divConAudText.length - 1) {
                        rondelAudAktiv++;
                        divConAudText[rondelAudAktiv - 1].className = "rondelNichtAngezeigt";
                        divConAudText[rondelAudAktiv].className = "rondelAngezeigt";

                        divConAudMed[rondelAudAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                                 {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConAudMed[rondelAudAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConAudMed[rondelAudAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                             {duration: 500}
                        );
                        divConAudMed[rondelAudAktiv].className = "rondelAngezeigt";
                        butRechtsAud.className = "klickbar";
                        butRechtsAudSmall.className = "klickbar";
                        if (rondelAudAktiv == divConAudMed.length - 1) {
                            butLinksAud.className = "nichtKlickbar";
                            butLinksAudSmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelAudAktiv > 1) {
                    rondelAudAktiv--;
                    divConAudText[rondelAudAktiv + 1].className = "rondelNichtAngezeigt";
                    divConAudText[rondelAudAktiv].className = "rondelAngezeigt";

                    divConAudMed[rondelAudAktiv + 1].animate([
                        { transform: "translate3D(0, 0, 0)" }, 
                        { transform: "translate3D(400px, 0, 0)" }
                    ], 
                                                             {duration: 500}
                    );
                    setTimeout(function (): void {
                        divConAudMed[rondelAudAktiv + 1].className = "rondelNichtAngezeigt";
                    },         400);
                    divConAudMed[rondelAudAktiv].animate([
                        { transform: "translate3D(-400px, 0, 0)" }, 
                        { transform: "translate3D(0px, 0, 0)" }
                    ], 
                                                         {duration: 500}
                    );
                    divConAudMed[rondelAudAktiv].className = "rondelAngezeigt";

                    butLinksAud.className = "klickbar";
                    butLinksAudSmall.className = "klickbar";
                    if (rondelAudAktiv == 1) {
                        butRechtsAud.className = "nichtKlickbar";
                        butRechtsAudSmall.className = "nichtKlickbar";
                    }

                    } else if (rondelAudAktiv == 1) {
                        divConAudText[rondelAudAktiv].className = "rondelAngezeigt";
                        divConAudMed[rondelAudAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
            case "Zert":
                if (_order == "+1") {
                    if (rondelZertAktiv < divConZertText.length - 1) {
                        rondelZertAktiv++;
                        divConZertText[rondelZertAktiv - 1].className = "rondelNichtAngezeigt";
                        divConZertText[rondelZertAktiv].className = "rondelAngezeigt";

                        divConZertMed[rondelZertAktiv - 1].animate([
                            { transform: "translate3D(0, 0, 0)" }, 
                            { transform: "translate3D(-400px, 0, 0)" }
                        ], 
                                                                   {duration: 500}
                        );
                        setTimeout(function (): void {
                            divConZertMed[rondelZertAktiv - 1].className = "rondelNichtAngezeigt";
                        },         400);
                        divConZertMed[rondelZertAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" }, 
                            { transform: "translate3D(0px, 0, 0)" }
                        ], 
                                                               {duration: 500}
                        );
                        divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";
                        
                        butRechtsZert.className = "klickbar";
                        butRechtsZertSmall.className = "klickbar";
                        if (rondelZertAktiv == divConZertMed.length - 1) {
                            butLinksZert.className = "nichtKlickbar";
                            butLinksZertSmall.className = "nichtKlickbar";
                        }
                    }
                } else {
                    if (rondelZertAktiv > 1) {
                    rondelZertAktiv--;
                    divConZertText[rondelZertAktiv + 1].className = "rondelNichtAngezeigt";
                    divConZertText[rondelZertAktiv].className = "rondelAngezeigt";

                    divConZertMed[rondelZertAktiv + 1].animate([
                        { transform: "translate3D(0, 0, 0)" }, 
                        { transform: "translate3D(400px, 0, 0)" }
                    ], 
                                                               {duration: 500}
                    );
                    setTimeout(function (): void {
                        divConZertMed[rondelZertAktiv + 1].className = "rondelNichtAngezeigt";
                    },         400);
                    divConZertMed[rondelZertAktiv].animate([
                        { transform: "translate3D(-400px, 0, 0)" }, 
                        { transform: "translate3D(0px, 0, 0)" }
                    ], 
                                                           {duration: 500}
                    );
                    divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";

                    butLinksZert.className = "klickbar";
                    butLinksZertSmall.className = "klickbar";
                    if (rondelZertAktiv == 1) {
                        butRechtsZert.className = "nichtKlickbar";
                        butRechtsZertSmall.className = "nichtKlickbar";
                    }

                    } else if (rondelZertAktiv == 1) {
                        divConZertText[rondelZertAktiv].className = "rondelAngezeigt";
                        divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
                default:
                console.log("Etwas stimmt mit den anzeigenbefehlen nicht");
        }
    }
}