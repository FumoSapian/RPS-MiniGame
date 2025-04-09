let text;
let RPS = prompt("Please select one of the following: R, P or S: ");
var RPSCPUValue = Math.floor(Math.random() * 2);
var RPSPlayerChoice;
var RPSPlayerValue = 0;

switch(RPSPlayerChoice) {
  case "R":
    RPSPlayerValue = 0;
    if(RPSCPUValue = 1)
    {
        prompt("You Have Won the Game!!!")
    }
    else if(RPSPlayerValue == RPSCPUValue)
    {
        prompt("Draw!!!! please refresh the page")
    }
    else
    {
        prompt("You have lost please refresh the page")
    }
    break;
  case "P":
    RPSPlayerValue = 1;
    if(RPSCPUValue = 2)
    {
        prompt("You Have Won the Game!!!")
    }
    else if(RPSPlayerValue == RPSCPUValue)
    {
        prompt("Draw!!!! please refresh the page")
    }
    else
    {
        prompt("You have lost please refresh the page")
    }
    
    break;
  case "S":
    RPSPlayerValue = 2;
    if(RPSCPUValue = 0)
    {
        prompt("You Have Won the Game!!!")
    }
    else if(RPSPlayerValue == RPSCPUValue)
    {
        prompt("Draw!!!! please refresh the page")
    }
    else
    {
        prompt("You have lost please refresh the page")
    }    
    break;
  default:
    text = "Invalid Input Please Refresh the Page.";
}