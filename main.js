canvas = document.getElementById("myCanvas");
var ctx= canvas.getContext("2d");
var mouseEvent= "empty";
var last_position_of_x,last_position_of_y;
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseup";
}
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = "red";
    width_of_line = 4;
    radius=50;
    mouseEvent="mousedown" ;   
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
  current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
  current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  
  if(mouseEvent="mousedown") {
    console.log("current position of x and y coordinates = "); 
    console.log(" x = " + current_position_of_mouse_x + " y = " + current_position_of_mouse_y);
    ctx.beginPath();
    ctx.strokeStyle= "red";
    ctx.lineWidth= 4;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
  last_position_of_x = current_position_of_mouse_x;
  last_position_of_y = current_position_of_mouse_y;
}


