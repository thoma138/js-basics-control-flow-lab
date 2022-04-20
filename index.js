function scuberGreetingForFeet(rideValue) {
  if (rideValue <= 400) {
 return 'This one is on me!';
  } else if (rideValue < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideValue >= 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(theCity) {
 return ((theCity === 'NYC') ? "Ok, sounds good." : "No go.");
}

function switchOnCharmFromTip(theTip){
  switch (theTip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    case 'thanks for everything':
      return 'Bye.';
  }
}