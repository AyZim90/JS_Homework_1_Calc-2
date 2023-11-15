let display = document.querySelector(".display");
let buttons = Array.from(document.querySelectorAll(".button"));
const MAX_DIGITS = 10;

buttons.map((button)=>{
    button.addEventListener("click", (e)=> {
       switch(e.target.innerText){
        case "AC":
            display.innerText="0";
            break;
        case "=":
            try {
                display.innerText=eval(display.innerText)
            } catch (e) {
                display.innerText="Error!"
            }

            break;

            case "^2":
                display.innerText = Math.pow(parseFloat(display.innerText), 2);
                break;
            
        case "√":
            display.innerText = Math.sqrt(parseFloat(display.innerText));
            break;

        case "←": 
            let exp = display.innerText;
            display.innerText = exp.length > 1 ? exp.substring(0, exp.length - 1) : "0";
            break;

        default:
            if(display.innerText==="0" && e.target.innerText !=="."){
                display.innerText=e.target.innerText;
            } else {
                if (display.innerText.length < MAX_DIGITS) {
                    display.innerText += e.target.innerText;
                }
            }
           
       }
    });
});

