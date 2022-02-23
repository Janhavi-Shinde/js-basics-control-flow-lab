let rideFeet; 
let freeRide; 

function scuberGreetingForFeet(rideFeet) {
  if (rideFeet <= 400) {
    return "This one is on me!";
  } else if (rideFeet > 2500) {
return "No can do.";
    } else if (rideFeet > 2000) {
   return "I will gladly take your thirty bucks.";
    }
 }
scuberGreetingForFeet(199);

let city = "NYC";
let nyc = "Ok, sounds good."
let notNYC = "No go."
function ternaryCheckCity(city){
  return city === "NYC" ? nyc : notNYC;
     } 
  ternaryCheckCity ("Pittsburgh")

  
let message;
function switchOnCharmFromTip(tip) {
  switch (tip) {
      case "generous": 
        return message = "Thank you so much.";
        break; 
      case "not as generous":
        return message = "Thank you.";
        break;
        default: return "Bye."; 
        break;
        }  
  }

switchOnCharmFromTip("generous");


