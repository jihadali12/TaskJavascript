
let Drinks = (prompt("Enter the name of the drink:"));

switch (Drinks)
{
    case "Water":
        document.write(Drinks ," price of  drink is 1JD ")
        break;
    case "Soft drinks":
        document.write(Drinks ," price of a  drink is 2JD ")
        break;

    case "Juice":
        document.write(Drinks ," price of a  drink is 3JD ")
        break;  
    case "Coffee":
        document.write(Drinks ," price of a drink is 4JD ")
        break;
    default:
        document.write("Invalid drink")
}