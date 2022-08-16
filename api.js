// tankapi source

let button = document.querySelector('button');

/*
    Speedrun Timer
    THIS TOOK ME WAYY TOO LONG!!!!
*/


const stopwatchBtn = document.createElement("button");
stopwatchBtn.innerText = ("Click Here to start the Speedrun Timer!");
body.appendChild(stopwatchBtn);
setTimeout(() => {stopwatchBtn.style.display = "none";}, 3000);

let count = 0;
let clickedB = false;

stopwatchBtn.addEventListener("click", function() {
    clickedB = true;
    stopwatch = setInterval(() => {
        count++;
        button.innerText = ("Speedrun Timer: " + count + " Click Here!");
    }, 1000);

    stopwatchBtn.style.display = "none";
})

button.addEventListener("click", function() {
    stopwatchBtn.style.display = "none";
});

/*
    Tank API (actual code)
*/

function tankAPI() { // tankapi
    tank1 = document.createElement("img");
    tank1.src = "https://cdn.discordapp.com/attachments/984720122180694066/985029929580232743/tank.png";
    
    var body = document.getElementsByTagName("body")[0];

    tank2 = document.createElement("img");
    tank2.src = "https://cdn.discordapp.com/attachments/984720122180694066/985030797658578964/tank1.png"; 

    tank3 = document.createElement("img");
    tank3.src = "https://cdn.discordapp.com/attachments/984720122180694066/985031506412044328/tank2.png"; 

    tank4 = document.createElement("img");
    tank4.src = "https://cdn.discordapp.com/attachments/984720122180694066/985031929860616222/tank3.png"; 
    
    tank5 = document.createElement("img");
    tank5.src = "https://cdn.discordapp.com/attachments/984720073203789874/985032965761404958/tank4.png"; 

    tank6 = document.createElement("img");
    tank6.src = "https://cdn.discordapp.com/attachments/984720073203789874/985033436412661890/tank5.png"; 

    tank7 = document.createElement("img");
    tank7.src = "https://cdn.discordapp.com/attachments/984720073203789874/985034469188726864/tank6.png"; 

    tank8 = document.createElement("img");
    tank8.src = "https://cdn.discordapp.com/attachments/984720160122368020/985034506153123840/tank7.png"; 
    
    tank9 = document.createElement("img");
    tank9.src = "https://cdn.discordapp.com/attachments/986513318497890344/986519986254274580/tank8.png"; 

    tank10 = document.createElement("img");
    tank10.src = "https://cdn.discordapp.com/attachments/986513318497890344/986520029082292294/tank9.png"; 

    tank11 = document.createElement("img");
    tank11.src = "https://cdn.discordapp.com/attachments/984720160122368020/995969337284374568/tank10.png";

    tank12 = document.createElement("img");
    tank12.src = "https://cdn.discordapp.com/attachments/984720160122368020/995969379416154143/tank11.png";

    // found legendary tank?

    legendaryFound = document.createElement("img");

    legendaryFound.style.transition = "all 1s";
    legendaryFound.style.position = "absolute";
    legendaryFound.style.top = "-10%";
    legendaryFound.style.left = "50%";
    legendaryFound.style.transform = "translate(-50%, 0%)";

    legendaryFound.src = "https://cdn.discordapp.com/attachments/984720160122368020/985072665154965534/foundlegendary.png";

    button.disabled = true;

    setTimeout(() => { button.disabled = false; }, 2000); // hide button

    let num = Math.floor(Math.random() * 12); // random number gen

    if (clickedB == true) {
        if (num == 7) {
            clearInterval(stopwatch);
            console.log("Your time was " + count + " seconds!");
            button.innerText = ("Grab a Random Tank!");
        }
    }

    /*
        replaced with awkward error handling
        Previous code:
        //
        switch (num) {
            case 0:
                body.appendChild(tank1);
                localStorage.setItem('Common Tank 1', tank1.src);
                break;
            case 1:
                body.appendChild(tank2);
                localStorage.setItem('Common Tank 2', tank2.src);
                break;
            case 2:
                body.appendChild(tank3);
                localStorage.setItem('Common Tank 3', tank3.src);
                break;
            case 3:
                body.appendChild(tank4);
                localStorage.setItem('Common Tank 4', tank4.src);
                break;
            case 4:
                body.appendChild(tank5);
                localStorage.setItem('Rare Tank 1', tank5.src);
                break;
            case 5:
                body.appendChild(tank6);
                localStorage.setItem('Rare Tank 2', tank6.src);
                break;
            case 6:
                body.appendChild(tank7);
                localStorage.setItem('Rare Tank 3', tank7.src);
                break;
            case 7:
                body.appendChild(tank8);
                localStorage.setItem('Legendary Tank', tank8.src);
                body.appendChild(legendaryFound);
    
                setTimeout(() => { legendaryFound.style.top = "1%"; }, 0);
                setTimeout(() => { legendaryFound.style.top = "-50%"; }, 1000);
                break;
            case 8:
                body.appendChild(tank9);
                localStorage.setItem('Gold Tank 1', tank9.src);
                break;
            case 9:
                body.appendChild(tank10);
                localStorage.setItem('Gold Tank 2', tank10.src);
                break;
            case 10:
                body.appendChild(tank11);
                localStorage.setItem('Baby Blurred Camo Tank', tank11.src);
                break;
            case 11:
                body.appendChild(tank12);
                localStorage.setItem('Baby Legendary Tank', tank12.src);
        }
        //
    */

    try {
        switch (num) {
            case 0:
                body.appendChild(tank1);
                localStorage.setItem('Common Tank 1', tank1.src);
                break;
            case 1:
                body.appendChild(tank2);
                localStorage.setItem('Common Tank 2', tank2.src);
                break;
            case 2:
                body.appendChild(tank3);
                localStorage.setItem('Common Tank 3', tank3.src);
                break;
            case 3:
                body.appendChild(tank4);
                localStorage.setItem('Common Tank 4', tank4.src);
                break;
            case 4:
                body.appendChild(tank5);
                localStorage.setItem('Rare Tank 1', tank5.src);
                break;
            case 5:
                body.appendChild(tank6);
                localStorage.setItem('Rare Tank 2', tank6.src);
                break;
            case 6:
                body.appendChild(tank7);
                localStorage.setItem('Rare Tank 3', tank7.src);
                break;
            case 7:
                body.appendChild(tank8);
                localStorage.setItem('Legendary Tank', tank8.src);
                body.appendChild(legendaryFound);
    
                setTimeout(() => { legendaryFound.style.top = "1%"; }, 0);
                setTimeout(() => { legendaryFound.style.top = "-50%"; }, 1000);
                break;
            case 8:
                body.appendChild(tank9);
                localStorage.setItem('Gold Tank 1', tank9.src);
                break;
            case 9:
                body.appendChild(tank10);
                localStorage.setItem('Gold Tank 2', tank10.src);
                break;
            case 10:
                body.appendChild(tank11);
                localStorage.setItem('Baby Blurred Camo Tank', tank11.src);
                break;
            case 11:
                body.appendChild(tank12);
                localStorage.setItem('Baby Legendary Tank', tank12.src);
        }
    } catch (error) {
        alert('Tank API had a problem, sorry for the inconvenience!')
    }
}