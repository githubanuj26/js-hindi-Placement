const accountId = 144553 
let accountEmail = "anujprajapati2608@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

accountEmail = "anuj@26gmail"
accountPassword = "124456"
accountCity = "Bengaluru"

console.log(accountId);


/*  
prefer not to use var
become of issue in block scope and function
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])