let IsUserLoggedIn = false;
if (IsUserLoggedIn) {
alert("You are loged in!");
}else{
    alert("You are not logged in");
}

let isUserHaveBadConection = false;
isUserHaveBadConection ? alert("Please check your internet connection") : alert("Your internet conection is fine");
//тернарний оператор...                /*якщо умова справдилась*/                 /*якщо умова не справдилась*/

//operator switch
let age = 17;
switch(age){
    case 10:
        alert("Your age is 10,you can`t buy this product")
        break;
        case 18:
            alert("Your age is 18,you can buy this product")
            break;
            case 30:
                alert("Your age is 30, you can buy this product")
                break;
                default:
                    alert("Enter your age ")

}
