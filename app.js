(function() {
    'use strict';

    const canvas = document.getElementById("jsCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = 700;
    canvas.height = 700;
    
    ctx.strockStyle = "#000000";
    ctx.lineWidth = 2.5;
    
    let painting = false;

    const stopPainting = function() {
        painting = false;
    };
    const startPainting = function() {
        painting = true;
    };

    const onMouseMove = function(evnet) {
        const x = event.offsetX;
        const y = event.offsetY;

        if (!painting) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };

    const onMouseDown = function(event) {
        startPainting();
    };

    //main
    (function() {
        if (canvas) {
            canvas.addEventListener("mousemove", onMouseMove);
            canvas.addEventListener("mousedown", startPainting);
            canvas.addEventListener("mouseup", stopPainting);
            canvas.addEventListener("mouseleave", stopPainting);
        };
    })();
})();