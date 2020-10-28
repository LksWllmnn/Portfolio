"use strict";
var mediaObjektePortfolio;
(function (mediaObjektePortfolio) {
    main();
    function main() {
        fillrondel();
        show("all", "start");
    }
    let butLinksProg = document.getElementById("butLinksProg");
    butLinksProg.addEventListener("click", hndl_links_Prog);
    let butRechtsProg = document.getElementById("butLinksProg");
    butRechtsProg.addEventListener("click", hndl_rechts_Prog);
    let butLinksCGI = document.getElementById("butLinksCGI");
    butLinksCGI.addEventListener("click", hndl_links_CGI);
    let butRechtsCGI = document.getElementById("butRechtsCGI");
    butRechtsCGI.addEventListener("click", hndl_rechts_CGI);
    let butLinksPic = document.getElementById("butLinksPic");
    butLinksPic.addEventListener("click", hndl_links_Pic);
    let butRechtsPic = document.getElementById("butRechtsPic");
    butRechtsPic.addEventListener("click", hndl_rechts_Pic);
    let butLinksUX = document.getElementById("butLinksUX");
    butLinksUX.addEventListener("click", hndl_links_UX);
    let butRechtsUX = document.getElementById("butRechtsUX");
    butRechtsUX.addEventListener("click", hndl_rechts_UX);
    let butLinksAud = document.getElementById("butLinksAud");
    butLinksAud.addEventListener("click", hndl_links_Aud);
    let butRechtsAud = document.getElementById("butRechtsAud");
    butRechtsAud.addEventListener("click", hndl_rechts_Aud);
    let butLinksZert = document.getElementById("butLinksZert");
    butLinksZert.addEventListener("click", hndl_links_Zert);
    let butRechtsZert = document.getElementById("butRechtsZert");
    butRechtsZert.addEventListener("click", hndl_rechts_Zert);
    /*let angezeigtProg: mediaObjekt[];
    let angezeigtCGI: mediaObjekt[];
    let angezeigtPic: mediaObjekt[];
    let angezeigtUX: mediaObjekt[];
    let angezeigtAud: mediaObjekt[];
    let angezeigtZert: mediaObjekt[];*/
    let divConProgText;
    let divConProgMed;
    let divConCGIText;
    let divConCGIMed;
    let divConPicText;
    let divConPicMed;
    let divConUXText;
    let divConUXMed;
    let divConAudText;
    let divConAudMed;
    let divConZertText;
    let divConZertMed;
    let rondelProgAktiv = 0;
    let rondelCGIAktiv = 0;
    let rondelPicAktiv = 0;
    let rondelUXAktiv = 0;
    let rondelAudAktiv = 0;
    let rondelZertAktiv = 0;
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
    function fillrondel() {
        for (let i = 0; i < mediaObjektePortfolio.listMedia.length; i++) {
            let divText = document.createElement("div");
            let divMedia = document.createElement("div");
            let text = document.createElement("p");
            text.innerHTML = mediaObjektePortfolio.listMedia[i].text;
            text.className = "rondelElementText";
            divText.appendChild(text);
            switch (mediaObjektePortfolio.listMedia[i].typ) {
                case "bild":
                    let mediaBild = document.createElement("img");
                    mediaBild.src = mediaObjektePortfolio.listMedia[i].mediapfad;
                    mediaBild.className = "rondelElementBild";
                    mediaBild.alt = mediaObjektePortfolio.listMedia[i].typ;
                    divMedia.appendChild(mediaBild);
                    break;
                case "video":
                    let mediaVideo = document.createElement("video");
                    let mediaVideoSource = document.createElement("source");
                    mediaVideoSource.src = mediaObjektePortfolio.listMedia[i].mediapfad;
                    mediaVideoSource.type = "video/mp4";
                    mediaVideo.setAttribute("controls", "");
                    mediaVideo.className = "rondelElementVideo";
                    mediaVideo.innerHTML = "Your Browser does not support this tag";
                    mediaVideo.appendChild(mediaVideoSource);
                    divMedia.appendChild(mediaVideo);
                    break;
                case "audio":
                    let mediaAudio = document.createElement("audio");
                    mediaAudio.setAttribute("controls", "");
                    mediaAudio.innerHTML = "Your Browser does not support this tag";
                    let mediaAudioSource = document.createElement("source");
                    mediaAudioSource.src = mediaObjektePortfolio.listMedia[i].mediapfad;
                    mediaAudioSource.type = "audio/mpeg";
                    mediaAudio.appendChild(mediaAudioSource);
                    divMedia.appendChild(mediaAudio);
                    break;
                default:
                    console.log("Es gibt ein Problem bei den Mediaarten.");
                    break;
            }
            switch (mediaObjektePortfolio.listMedia[i].kapitel) {
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
    function hndl_links_Prog() {
        show("Prog", "+1");
    }
    function hndl_rechts_Prog() {
        show("Prog", "-1");
    }
    function hndl_links_CGI() {
        show("CGI", "+1");
    }
    function hndl_rechts_CGI() {
        show("CGI", "-1");
    }
    function hndl_links_Pic() {
        show("Pic", "+1");
    }
    function hndl_rechts_Pic() {
        show("Pic", "-1");
    }
    function hndl_links_UX() {
        show("UX", "+1");
    }
    function hndl_rechts_UX() {
        show("UX", "-1");
    }
    function hndl_links_Aud() {
        show("Aud", "+1");
    }
    function hndl_rechts_Aud() {
        show("Aud", "-1");
    }
    function hndl_links_Zert() {
        show("Zert", "+1");
    }
    function hndl_rechts_Zert() {
        show("Zert", "-1");
    }
    function show(_section, _order) {
        let rondelDivProgtext = document.getElementById("rondelProgtext");
        if (rondelDivProgtext)
            rondelDivProgtext.className = "rondel-flex";
        let rondelDivProgmed = document.getElementById("rondelProgmed");
        let rondelDivCGItext = document.getElementById("rondelCGItext");
        let rondelDivCGImed = document.getElementById("rondelCGImed");
        let rondelDivPictext = document.getElementById("rondelPictext");
        let rondelDivPicmed = document.getElementById("rondelPicmed");
        let rondelDivUXtext = document.getElementById("rondelUXtext");
        let rondelDivUXmed = document.getElementById("rondelUXmed");
        let rondelDivAudtext = document.getElementById("rondelAudtext");
        let rondelDivAudmed = document.getElementById("rondelAudmed");
        let rondelDivZerttext = document.getElementById("rondelZerttext");
        let rondelDivZertmed = document.getElementById("rondelZertmed");
        for (let i = 0; i < divConProgText.length; i++) {
        }
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
                if (_order == "+1") {
                    rondelProgAktiv++;
                    divConProgText[rondelProgAktiv - 1].className = "rondelProgNichtAngezeigt";
                    divConProgText[rondelProgAktiv].className = "rondelProgAngezeigt";
                }
                else {
                }
                break;
            case "CGI":
                if (_order == "+1") {
                }
                else {
                }
                break;
            case "Pic":
                if (_order == "+1") {
                }
                else {
                }
                break;
            case "UX":
                if (_order == "+1") {
                }
                else {
                }
                break;
            case "Aud":
                if (_order == "+1") {
                }
                else {
                }
                break;
            case "Zert":
                if (_order == "+1") {
                }
                else {
                }
                break;
            default:
                console.log("Etwas stimmt mit den anzeigenbefehlen nicht");
        }
    }
})(mediaObjektePortfolio || (mediaObjektePortfolio = {}));
//# sourceMappingURL=rondel.js.map