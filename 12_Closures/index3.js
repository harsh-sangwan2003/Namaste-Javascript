function z() {

    var a = 900;

    function x() {

        var b = 7;

        //Forms a closure with both z & x
        function y() {

            console.log(a, b);

        }

        a = 100;
        y();
    }

    x();
}

z();
