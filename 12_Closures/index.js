//Function along with its lexical environment is known as closure

function x() {

    var a = 7;
    function y() {

        console.log(a);
    }

    y();
}

x();
