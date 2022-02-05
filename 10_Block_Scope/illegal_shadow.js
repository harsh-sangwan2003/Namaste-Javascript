//Legal shadow
/*var a = 200;
{
    var a = 20;
}

let a = 200;
{
    let a = 20;
}

var a = 200;
{
    let a = 20;
}
*/

//Illegal shadow
let a = 200;
{
    var a = 20;
}