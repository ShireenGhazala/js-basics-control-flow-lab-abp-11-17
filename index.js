


function scuberGreetingForFeet(feet) {
  If (feet===400 || feet<400){
    return "This one is on me!"
    }
 elseif(feet>2000 && feet<2500){
    return "I will gladly take your thirty bucks."
 }
 elseif(feet>2500){
   return "No can do."
 }
}

function ternaryCheckCity(city) {
city="NYC"? "Ok, sounds good.":"No Go.";
}

function switchOnCharmFromTip(Tip) {
  switch (Tip) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not so generous":
       return "Thank you.";
       break;
    default:
       return "Bye";
  }

}
