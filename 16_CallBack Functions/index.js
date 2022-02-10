// CallBack Fn - When a function is passed to another function it is called as callback function

setTimeout(function () {

    console.log("timer");
}, 5000);

function x(y) {

    console.log("x");
    y();
}

x(function () {

    console.log("y");
})