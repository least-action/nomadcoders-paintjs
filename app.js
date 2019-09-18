(function() {
    'use strict';

    const canvas = document.getElementById("jsCanvas");
    const ctx = canvas.getContext("2d");
    const colors = document.getElementsByClassName("jsColor");
    const range = document.getElementById("jsRange");
    const mode = document.getElementById("jsMode");

    const INITIAL_COLOR = "#000000"
    const CANVAS_SIZE = 700;

    canvas.width = CANVAS_SIZE;
    canvas.height = CANVAS_SIZE;
    
    ctx.strokeStyle = INITIAL_COLOR;
    ctx.fillStyle = INITIAL_COLOR;
    ctx.lineWidth = 2.5;
    
    let painting = false;
    let filling = false;

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

    const handleColorClick = function(event) {
        const color = event.target.style.backgroundColor;
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
    };

    const handleRangeChange = function(event) {
        const size = event.target.value;
        ctx.lineWidth = size;
    };

    const handleModeClick = function() {
        if (filling) {
            filling = false;
            mode.innerText = "fill";
        } else {
            filling = true;
            mode.innerText = "paint";
        }
    };

    const handleCanvasClick = function() {
        if (filling)
            ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    //main
    (function() {
        if (canvas) {
            canvas.addEventListener("mousemove", onMouseMove);
            canvas.addEventListener("mousedown", startPainting);
            canvas.addEventListener("mouseup", stopPainting);
            canvas.addEventListener("mouseleave", stopPainting);
            canvas.addEventListener("click", handleCanvasClick);
        };

        if (colors) {
            Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));
        }

        if (range) {
            range.addEventListener("input", handleRangeChange);
        }

        if (mode) {
            mode.addEventListener("click", handleModeClick);
        }
    })();
})();