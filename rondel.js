"use strict";
var mediaObjektePortfolio;
(function (mediaObjektePortfolio) {
    //Media und Text Divs in welche die Inhalte ringeladen werden
    let windowProgText = document.getElementById("textWindowProg");
    let windowProgMedia = document.getElementById("mediaWindowProg");
    let windowCGIText = document.getElementById("textWindowCGI");
    let windowCGIMedia = document.getElementById("mediaWindowCGI");
    let windowAudText = document.getElementById("textWindowAud");
    let windowAudMedia = document.getElementById("mediaWindowAud");
    let windowPicText = document.getElementById("textWindowPic");
    let windowPicMedia = document.getElementById("mediaWindowPic");
    let windowUXText = document.getElementById("textWindowUX");
    let windowUXMedia = document.getElementById("mediaWindowUX");
    let windowZeugText = document.getElementById("textWindowZert");
    let windowZeugMedia = document.getElementById("mediatWindowZert");
    //Knöpfe zur Bedienung des Rondels
    let butLinksProg = document.getElementById("butLinksProg");
    if (butLinksProg)
        butLinksProg.addEventListener("click", hndl_links_Prog);
    let butRechtsProg = document.getElementById("butRechtsProg");
    if (butRechtsProg)
        butRechtsProg.addEventListener("click", hndl_rechts_Prog);
    let butLinksCGI = document.getElementById("butLinksCGI");
    if (butLinksCGI)
        butLinksCGI.addEventListener("click", hndl_links_CGI);
    let butRechtsCGI = document.getElementById("butRechtsCGI");
    if (butRechtsCGI)
        butRechtsCGI.addEventListener("click", hndl_rechts_CGI);
    let butLinksPic = document.getElementById("butLinksPic");
    if (butLinksPic)
        butLinksPic.addEventListener("click", hndl_links_Pic);
    let butRechtsPic = document.getElementById("butRechtsPic");
    if (butRechtsPic)
        butRechtsPic.addEventListener("click", hndl_rechts_Pic);
    let butLinksUX = document.getElementById("butLinksUX");
    if (butLinksUX)
        butLinksUX.addEventListener("click", hndl_links_UX);
    let butRechtsUX = document.getElementById("butRechtsUX");
    if (butRechtsUX)
        butRechtsUX.addEventListener("click", hndl_rechts_UX);
    let butLinksAud = document.getElementById("butLinksAud");
    if (butLinksAud)
        butLinksAud.addEventListener("click", hndl_links_Aud);
    let butRechtsAud = document.getElementById("butRechtsAud");
    if (butRechtsAud)
        butRechtsAud.addEventListener("click", hndl_rechts_Aud);
    let butLinksZert = document.getElementById("butLinksZert");
    if (butLinksZert)
        butLinksZert.addEventListener("click", hndl_links_Zert);
    let butRechtsZert = document.getElementById("butRechtsZert");
    if (butRechtsZert)
        butRechtsZert.addEventListener("click", hndl_rechts_Zert);
    let rondelProgAktiv = 0;
    let rondelCGIAktiv = 0;
    let rondelPicAktiv = 0;
    let rondelUXAktiv = 0;
    let rondelAudAktiv = 0;
    let rondelZertAktiv = 0;
    let platzhalter = document.createElement("div");
    let divConProgText = [platzhalter];
    let divConProgMed = [platzhalter];
    let divConCGIText = [platzhalter];
    let divConCGIMed = [platzhalter];
    let divConPicText = [platzhalter];
    let divConPicMed = [platzhalter];
    let divConUXText = [platzhalter];
    let divConUXMed = [platzhalter];
    let divConAudText = [platzhalter];
    let divConAudMed = [platzhalter];
    let divConZertText = [platzhalter];
    let divConZertMed = [platzhalter];
    main();
    function main() {
        fillrondel();
        show("all", "start");
    }
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
        wechsel("Prog", "+1");
    }
    function hndl_rechts_Prog() {
        wechsel("Prog", "-1");
    }
    function hndl_links_CGI() {
        wechsel("CGI", "+1");
    }
    function hndl_rechts_CGI() {
        wechsel("CGI", "-1");
    }
    function hndl_links_Pic() {
        wechsel("Pic", "+1");
    }
    function hndl_rechts_Pic() {
        wechsel("Pic", "-1");
    }
    function hndl_links_UX() {
        wechsel("UX", "+1");
    }
    function hndl_rechts_UX() {
        wechsel("UX", "-1");
    }
    function hndl_links_Aud() {
        wechsel("Aud", "+1");
    }
    function hndl_rechts_Aud() {
        wechsel("Aud", "-1");
    }
    function hndl_links_Zert() {
        wechsel("Zert", "+1");
    }
    function hndl_rechts_Zert() {
        wechsel("Zert", "-1");
    }
    function show(_section, _order) {
        //alle bilder und Texte werden als childelemente dem Fenster Prog zugeordnet aber später werden nicht alle angezeigt
        for (let i = 0; i < divConProgText.length; i++) {
            if (windowProgText && windowProgMedia) {
                divConProgText[i].className = "rondelNichtAngezeigt";
                windowProgText.appendChild(divConProgText[i]);
                divConProgMed[i].className = "rondelNichtAngezeigt";
                windowProgMedia.appendChild(divConProgMed[i]);
            }
        }
        for (let i = 0; i < divConCGIText.length; i++) {
            if (windowCGIText && windowCGIMedia) {
                divConCGIText[i].className = "rondelNichtAngezeigt";
                windowCGIText.appendChild(divConCGIText[i]);
                divConCGIMed[i].className = "rondelNichtAngezeigt";
                windowCGIMedia.appendChild(divConCGIMed[i]);
            }
        }
        for (let i = 0; i < divConAudText.length; i++) {
            if (windowAudText && windowAudMedia) {
                divConAudText[i].className = "rondelNichtAngezeigt";
                windowAudText.appendChild(divConAudText[i]);
                divConAudMed[i].className = "rondelNichtAngezeigt";
                windowAudMedia.appendChild(divConAudMed[i]);
            }
        }
        for (let i = 0; i < divConPicText.length; i++) {
            if (windowPicText && windowPicMedia) {
                divConPicText[i].className = "rondelNichtAngezeigt";
                windowPicText.appendChild(divConPicText[i]);
                divConPicMed[i].className = "rondelNichtAngezeigt";
                windowPicMedia.appendChild(divConPicMed[i]);
            }
        }
        for (let i = 0; i < divConUXText.length; i++) {
            if (windowUXText && windowUXMedia) {
                divConUXText[i].className = "rondelNichtAngezeigt";
                windowUXText.appendChild(divConUXText[i]);
                divConUXMed[i].className = "rondelNichtAngezeigt";
                windowUXMedia.appendChild(divConUXMed[i]);
            }
        }
        for (let i = 0; i < divConZertText.length; i++) {
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
    function wechsel(_section, _order) {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConProgMed[rondelProgAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConProgMed[rondelProgAktiv].className = "rondelAngezeigt";
                        divConProgMed[rondelProgAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                    }
                }
                else {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConProgMed[rondelProgAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConProgMed[rondelProgAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConProgMed[rondelProgAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelProgAktiv == 1) {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConCGIMed[rondelCGIAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
                        divConCGIMed[rondelCGIAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                    }
                }
                else {
                    if (rondelCGIAktiv > 1) {
                        rondelCGIAktiv--;
                        divConCGIText[rondelCGIAktiv + 1].className = "rondelNichtAngezeigt";
                        divConCGIText[rondelCGIAktiv].className = "rondelAngezeigt";
                        divConCGIMed[rondelCGIAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" },
                            { transform: "translate3D(400px, 0, 0)" }
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConCGIMed[rondelCGIAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConCGIMed[rondelCGIAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelCGIAktiv == 1) {
                        divConCGIText[rondelCGIAktiv].className = "rondelAngezeigt";
                        divConCGIMed[rondelCGIAktiv].className = "rondelAngezeigt";
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConPicMed[rondelPicAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConPicMed[rondelPicAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConPicMed[rondelPicAktiv].className = "rondelAngezeigt";
                    }
                }
                else {
                    if (rondelPicAktiv > 1) {
                        rondelPicAktiv--;
                        divConPicText[rondelPicAktiv + 1].className = "rondelNichtAngezeigt";
                        divConPicText[rondelPicAktiv].className = "rondelAngezeigt";
                        divConPicMed[rondelPicAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" },
                            { transform: "translate3D(400px, 0, 0)" }
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConPicMed[rondelPicAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConPicMed[rondelPicAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConPicMed[rondelPicAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelPicAktiv == 1) {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConUXMed[rondelUXAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConUXMed[rondelUXAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConUXMed[rondelUXAktiv].className = "rondelAngezeigt";
                    }
                }
                else {
                    if (rondelUXAktiv > 1) {
                        rondelUXAktiv--;
                        divConUXText[rondelUXAktiv + 1].className = "rondelNichtAngezeigt";
                        divConUXText[rondelUXAktiv].className = "rondelAngezeigt";
                        divConUXMed[rondelUXAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" },
                            { transform: "translate3D(400px, 0, 0)" }
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConUXMed[rondelUXAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConUXMed[rondelUXAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConUXMed[rondelUXAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelUXAktiv == 1) {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConAudMed[rondelAudAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConAudMed[rondelAudAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConAudMed[rondelAudAktiv].className = "rondelAngezeigt";
                    }
                }
                else {
                    if (rondelAudAktiv > 1) {
                        rondelAudAktiv--;
                        divConAudText[rondelAudAktiv + 1].className = "rondelNichtAngezeigt";
                        divConAudText[rondelAudAktiv].className = "rondelAngezeigt";
                        divConAudMed[rondelAudAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" },
                            { transform: "translate3D(400px, 0, 0)" }
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConAudMed[rondelAudAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConAudMed[rondelAudAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConAudMed[rondelAudAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelAudAktiv == 1) {
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
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConZertMed[rondelZertAktiv - 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConZertMed[rondelZertAktiv].animate([
                            { transform: "translate3D(400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";
                    }
                }
                else {
                    if (rondelZertAktiv > 1) {
                        rondelZertAktiv--;
                        divConZertText[rondelZertAktiv + 1].className = "rondelNichtAngezeigt";
                        divConZertText[rondelZertAktiv].className = "rondelAngezeigt";
                        divConZertMed[rondelZertAktiv + 1].animate([
                            { transform: "translate3D(0, 0, 0)" },
                            { transform: "translate3D(400px, 0, 0)" }
                        ], { duration: 1000 });
                        setTimeout(function () {
                            divConZertMed[rondelZertAktiv + 1].className = "rondelNichtAngezeigt";
                        }, 1000);
                        divConAudMed[rondelAudAktiv].animate([
                            { transform: "translate3D(-400px, 0, 0)" },
                            { transform: "translate3D(0px, 0, 0)" }
                        ], { duration: 1000 });
                        divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";
                    }
                    else if (rondelZertAktiv == 1) {
                        divConZertText[rondelZertAktiv].className = "rondelAngezeigt";
                        divConZertMed[rondelZertAktiv].className = "rondelAngezeigt";
                    }
                }
                break;
            default:
                console.log("Etwas stimmt mit den anzeigenbefehlen nicht");
        }
    }
})(mediaObjektePortfolio || (mediaObjektePortfolio = {}));
//# sourceMappingURL=rondel.js.map