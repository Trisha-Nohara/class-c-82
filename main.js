var mouseEvent="empty";
var last_position_of_x,last_position_of_y;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var color="green";
lineWidth=3;

function my_mouseDown(e) {
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousedown",my_mouseDown);

function my_mouseMove(e) {
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=lineWidth;
        console.log("last position of x and y coordinates are : ");
        console.log("x= "+last_position_of_x);
        console.log("y= "+last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current position of x and y coordinates are : ");
        console.log("x= "+current_position_of_mouse_x);
        console.log("y= "+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}    
canvas.addEventListener("mousemove", my_mouseMove);
 
function my_mouseUp(e) {
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseup" , my_mouseUp);

function my_mouseLeave(e) {
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseleave" , my_mouseLeave);