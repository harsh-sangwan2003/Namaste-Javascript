// function x() {

//     for (var i = 1; i <= 5; i++) {

//         function y(i) {

//             setTimeout(function () {

//                 console.log(i);
//             }, i * 1000);
//         }

//         y(i);
//     }

//     console.log("Namaste JavaScript");
// }


function x() {

    for (let i = 1; i <= 5; i++) {

        setTimeout(function () {

            console.log(i);
        }, i * 1000);
    }

    console.log("Namaste JavaScript");
}

x();