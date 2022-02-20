console.log("Start");

setTimeout(() => {

    document.getElementById('btn').
        addEventListener('click',
            function cb() {

                console.log("Call Back");
            });
}, 6000);

console.log("End");