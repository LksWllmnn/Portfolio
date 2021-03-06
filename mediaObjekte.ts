namespace mediaObjektePortfolio {
    // tslint:disable-next-line: class-name
    export interface mediaObjekt {
        seite: string;
        kapitel: string;
        mediapfad: string;
        typ: string;
        text: string;
    }

    export let listMedia: mediaObjekt[] = [
        { seite: "Arbeitsbeispiele", kapitel: "rondelProg", mediapfad: "01WebentwicklungProjekte/Onlineshop.png", typ: "bild", 
        text: "Im Rahmen des Moduls-Gis (Grundlagen interaktiver Systeme, 2.Semester) hat der Dozent eine Aufgabe gestellt, in welchem man einen <a href='https://lkswllmnn.github.io/GiS-sose-2020/Aufgabe07/Shop.html'>Onlineshop</a> erstellt mithilfe von <strong>HTML</strong>, <strong>CSS</strong> und <strong>Typescript</strong>. Zur Übermittlung von Werten wird der LocalStorage verwendet. Die Bilder und Produkte sind natürlich alles nur Platzhalter. Ein Teil der Aufgabe war es sich ein Gebiet zu suchen welches sonst kein Kommilitone wählen würde. Es kann zu Fehlern in der Darstellung kommen je nach Browser."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelProg", mediapfad: "01WebentwicklungProjekte/Onlinechat.png", typ: "bild", 
        text: "Als Prüfungsaufgabe im Modul GiS wurde unteranderem die Aufgabe gestellt einen Online-Chat zu programmieren. Hierbei habe ich <strong>HTML</strong>, <strong>CSS</strong> und <strong>Typescript</strong> verwendet. Im Backend <strong>NodeJS</strong>, <strong>TypeScript</strong>, <strong>Heroku</strong> und <strong>MongoDB</strong> als Datenbank."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelProg", mediapfad: "01WebentwicklungProjekte/WordpressSeite.mp4", typ: "video", 
        text: "Im Rahmen meines Praktikums bei Schanze und Horn habe ich diverse Webauftritte von regionalen Unternehmen miterstellt, was vom Anlegen beim Host über das Erstellen und Gestalten der Websites bis zu der Veröffentlichung reicht. Zur Erstellung der Websites wird die CMS Wordpress verwendet und diverse Plugins. Teilweise wird mit <strong>JQuery</strong>, <strong>JavaScript</strong>, <strong>PHP</strong> und <strong>CSS</strong> weiter Funktionalität und Gestaltung hinzugefügt."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelProg", mediapfad: "01WebentwicklungProjekte/JavaAufprallSimulation.mp4", typ: "video", 
        text: "Im Rahmen des Moduls Mathematik und Simulation wurden Gruppenaufgaben zugeteilt. Unsere Gruppe mit Frau Thyra Hultsch und Herr Josue Buck bekam die Aufgabe den Aufprall dreier Bälle zu simulieren in elastischen und unelastischen Situationen. Wir verwendeten für die Simulation Java und die Entwicklungsumgebung Eclipse."},

        { seite: "Arbeitsbeispiele", kapitel: "rondelProg", mediapfad: "01WebentwicklungProjekte/portfolio.png", typ: "bild", 
        text: "Das Portfolio wurde mit <strong>HTML</strong>, <strong>CSS</strong> und <strong>TypeScript</strong> erstellt. Die Buttons wurden mit <strong>Affinity Designer</strong> erstellt. Es wurde alles ohne CMS erstellt, weswegen die Erstellung dieses Projekts wohl länger gedauert hat als zu vermuten ist. Für die Links der Seitenwechsel ist außerdem noch ein kurzer <strong>jQuery</strong> Code zum Einsatz gekommen."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/Donut.png", typ: "bild", 
        text: "Anhand des <a href='#https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U'>Youtube Tutorials</a> und dem Program <strong>Blender</strong> wurde dieser Donut erstellt. Der Körper wurde durch einen Ring erstellt und der Zuckerguss durch einen Weiteren, bei welchem der untere Teil der Mesh abgeschnitten wurde. Durch Subdivisoin Surface Modifier wurde die 'glatte' Oberfläche erzeugt. Die Streusel wurden mithilfe des 'Particle Propertys' erzeugt. Gerendert wurde mit Cycles."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/Field.mp4", typ: "video", 
        text: "Anhand des <a href='#https://www.youtube.com/watch?v=TPrnSACiTJ4&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U'>Youtube Tutorials</a> und dem Program <strong>Blender</strong> wurde dieser Donut erstellt. Der Körper wurde durch einen Ring gebaut und der Zuckerguss durch einen Weiteren, bei welchem der untere Teil der Mesh abgeschnitten wurde. Durch Subdivisoin Surface Modifier wurde die 'glatte' Oberfläche erzeugt. Die Streusel wurden mithilfe des 'Particle Propertys' erzeugt. Gerendert wurde mit Cycles."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/Gesicht.png", typ: "bild", 
        text: "Erstellt mit dem Programm <strong>Blender</strong>. Modell eines Gesichts aus dem Internet was ich für diese Website allerdings nicht mehr finde. Gerendert mit Cycles."},
        
        /*{ seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/Herz.png", typ: "bild", 
        text: "Frei modelliert mit <strong>Blender</strong>. Gerendert mit Eevee"},*/
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/loop.mp4", typ: "video", 
        text: "Modelliert nach entsprechenden <a href='#'>Youtube Tutorial</a>. "},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/würfel.mp4", typ: "video", 
        text: "Frei modelliert mit <strong>Blender</strong>. Gerendert mit Eevee."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/uboot.mp4", typ: "video", 
        text: "Im Rahmen des Moduls CGI bekam unser Kurs die Aufgabe ein Ubot zu modellieren und dieses in einer Unterwasserwelt schwimmen zu lassen. Modelliert mit <strong>Blender</strong>. Gerendert mit Eevee."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/roboarm.mp4", typ: "video", 
        text: "Programmiert wurde der Arm mit <strong>c#</strong>. Mithilfe der Grafik-Engine Fusee werden die Bilder erzeugt"},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelCGI", mediapfad: "02Media-Projekte/panzer.mp4", typ: "video", 
        text: "Ein mit <strong>Blender</strong> modellierter Panzer. Mit <strong>Fusee</strong> in <strong>C#</strong> programmiert, dass sich die Räder anwählen lassen und auf Befehl rotieren."},
        
        /*{ seite: "Arbeitsbeispiele", kapitel: "rondelrondelPic", mediapfad: "02Media-Projekte/praktiprojekt.png", typ: "bild", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelrondelPic", mediapfad: "02Media-Projekte/portfolio.png", typ: "bild", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},*/
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelUX", mediapfad: "02Media-Projekte/uxd.mp4", typ: "video", 
        text: "Im Rahmen des Moduls UXD wurden Gruppenarbeiten angesetzt, in welchen die Aufgabe gestellt wurde, der HFU eine neue User Experience zu verleihen. Unser Team bestehend aus Frau Dilara Doganer, Frau Thyra Hultsch und mir entschloss sich eine App zu entwickeln, die es ermöglicht leicht Räume der HFU für Lerngruppen zu mieten und über GPS zu lokalisieren. Dieses Projekt haben wir <a href='#'>hier</a> als Adobe XD Projekt grafisch umgesetzt"},
        
        { seite: "Arbeitsbeispiele", kapitel: "rondelUX", mediapfad: "02Media-Projekte/angular.PNG", typ: "bild", 
        text: "Im Rahmen eines <a href='#'>Youtube Tutorials</a> zum Thema Angular war es ein Schritt, das Projekt erst zu modellieren, um eine Idee von der späteren Umsetzung zu bekommen."},
        
        /*{ seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelAud", mediapfad: "04Zertifikate/ZertifikatHTML.jpg", typ: "audio", 
        text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."},*/
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/HTML.PNG", typ: "bild", 
        text: "In dem 5std. LinkedIn Learning Vortrag gieng es um grundsätzliche html-Tags, html-Meta-Tags etc. ."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/Programm.PNG", typ: "bild", 
        text: "Dieses Zertifikat beschreibt einen Lernweg über mehrere LinkedIn Kurse. Darin wurden unteranderem Objekt orientiertes Entwickeln, die Grundlage von Programmierverständnissen wie Schleifen und Bedinungen sowie aber auch rechtliche Aspekte im Bereich Programmierung besprochen."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/Selbstorga.PNG", typ: "bild", 
        text: "Dieses Zertifikat beschreibt einen Lernweg über mehrere LinkedIn Kurse. Es gieng um Selbstorganisation, Zeitmanagement mit dem Eisenhower Diagram und andere nützliche Tipps für das Arbeiten und Selbstorganisation."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/Animation.PNG", typ: "bild", 
        text: "In diesem Kurs gieng es um die Grundlagen, wie animierte Körper realistisch wirken und wie Bewegungen unser Verständnis zu dem Material eines sich bewegenden Körpers ist."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/GrundlagenGest.PNG", typ: "bild", 
        text: "Der Dozent zu dem HFU Modul Grundlagen der Gestaltung, Herr Fries, hat einen LinkedIn Kurs erstellt um darin nochmal die Grundlagen des Moduls in Videoform festzuhalten. Diesen habe ich neben zur Selbstübung und vorbereitung auf die Prüfung ebenfalls absolviert."},
        
        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/R.PNG", typ: "bild", 
        text: "Da Statistik durchaus ein interessantes Feld ist und sehr nah mit Data Science verbunden ist, habe ich mich durch den Kurs mit der Sprache R und der Entwicklungsumgebung RStudio einmal vertraut gemacht aber bisher noch nicht vertieft."},

        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/GooglAnalytics.PNG", typ: "bild", 
        text: "Bereits wärend meiner Zeit in der Ausbildung habe ich mich schon mit der Analyse von Websites auseinander gesetzt, und wie man messbare Zahlen mit einem TKP (Tausender Kontakt Preis) in Verbindung bringt. Mit dem Zertifikat konnte ich einen Einblick in die Funktionsweise von Google Analytics gewinnen, jedoch habe in noch keine allzu große praktische Erfahrung mit dem Programm."},

        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/GrundOnlMark.PNG", typ: "bild", 
        text: "In der Google Zukunftswerkstatt gibt es einen längeren Kors über online Marketing von online Firmenverzeichnisse über SEO und SEA bis zu Video-Marketing. Außer SEO Einstellungen in Wordpress und Metatags in dieser Seite konnte ich dieses Wissen bisher noch nicht groß einbringen."},

        { seite: "ZeugnisseundZertifikate", kapitel: "rondelZert", mediapfad: "04Zertifikate/KmK.PNG", typ: "bild", 
        text: "In der Berufsschule gab es die Möglichkeit einen Sprachtest zu absolvieren. Dieser entspricht zwar nur dem Sprachniveau B2 (das Abitur C1) aber trotzdem war ich daran interessiert meine Sprachkenntnisse nocheinmal zu testen."}
    ];
}