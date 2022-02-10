(function attachEvent() {

    let count = 0;
    document.getElementById('clickMe').addEventListener('click', function () {

        console.log("Button Clicked", ++count);
    })
})();


/* 
It is important to remove event listeners as they consumes a lot of space dur to the closures formed
*/