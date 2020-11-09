namespace mediaObjektePortfolio {
    let burgerKasten: HTMLDivElement = <HTMLDivElement>document.getElementById("burger1");
    if (burgerKasten)
        burgerKasten.className = "burger";
    let burgerSeite1: HTMLDivElement = <HTMLDivElement>document.getElementById("burgerClick1");

    let burgerKasten2: HTMLDivElement = <HTMLDivElement>document.getElementById("burger2");
    if (burgerKasten2)
        burgerKasten2.className = "burger";
    let burgerSeite2: HTMLDivElement = <HTMLDivElement>document.getElementById("burgerClick2");

    let burgerKasten3: HTMLDivElement = <HTMLDivElement>document.getElementById("burger3");
    if (burgerKasten3)
        burgerKasten3.className = "burger";
    let burgerSeite3: HTMLDivElement = <HTMLDivElement>document.getElementById("burgerClick3");

    let burgerKasten4: HTMLDivElement = <HTMLDivElement>document.getElementById("burger4");
    if (burgerKasten4)
        burgerKasten4.className = "burger";
    let burgerSeite4: HTMLDivElement = <HTMLDivElement>document.getElementById("burgerClick4");

    let burgerKasten5: HTMLDivElement = <HTMLDivElement>document.getElementById("burger5");
    if (burgerKasten5)
        burgerKasten5.className = "burger";
    let burgerSeite5: HTMLDivElement = <HTMLDivElement>document.getElementById("burgerClick5");

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

    function ausfahren1(): void {
        switch (burgerKasten.className) {
            case "burger":
                burgerKasten.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, 210px, 0)" }
                ], 
                                     {duration: 1000}
                );
                setTimeout(function(): void {
                    burgerKasten.className = "burger show";
                },         1000); 
                break;
            case "burger show":
                burgerKasten.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, -210px, 0)" }
                ], 
                                     {duration: 1000}
                );
                setTimeout(function(): void {
                burgerKasten.className = "burger";
                },         1000);
                break;
        }
    }

    function ausfahren2(): void {
        switch (burgerKasten2.className) {
            case "burger":
                burgerKasten2.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, 210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                    burgerKasten2.className = "burger show";
                },         1000); 
                break;
            case "burger show":
                burgerKasten2.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, -210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                burgerKasten2.className = "burger";
                },         1000);
                break;
        }
    }

    function ausfahren3(): void {
        switch (burgerKasten3.className) {
            case "burger":
                burgerKasten3.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, 210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                    burgerKasten3.className = "burger show";
                },         1000); 
                break;
            case "burger show":
                burgerKasten3.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, -210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                burgerKasten3.className = "burger";
                },         1000);
                break;
        }
    }

    function ausfahren4(): void {
        switch (burgerKasten4.className) {
            case "burger":
                burgerKasten4.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, 210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                    burgerKasten4.className = "burger show";
                },         1000); 
                break;
            case "burger show":
                burgerKasten4.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, -210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                burgerKasten4.className = "burger";
                },         1000);
                break;
        }
    }

    function ausfahren5(): void {
        switch (burgerKasten5.className) {
            case "burger":
                burgerKasten5.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, 210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                    burgerKasten5.className = "burger show";
                },         1000); 
                break;
            case "burger show":
                burgerKasten5.animate([
                    { transform: "translate3D(0, 0, 0)" }, 
                    { transform: "translate3D(0, -210px, 0)" }
                ], 
                                      {duration: 1000}
                );
                setTimeout(function(): void {
                burgerKasten5.className = "burger";
                },         1000);
                break;
        }
    }
}