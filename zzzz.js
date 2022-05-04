// lấy hình, canvas, context của canvas bên html
var userImage = document.getElementById("source");
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");

// gán kích thước mặc định cho canvas
var canvasWidth = canvas.width = 500;
var canvasHeight = canvas.height = 500;

// cạnh nhỏ nhất
var minEdge = 0;
var imageScale = 1;
var minScale = 1;

// tọa độ hình
var imagePosX = 0;
var imagePosY = 0;

// góc xoay
var angleInDegrees = 0;

// tạo đối tượng khung hình để ghép
var frame = new Image;
frame.src = "images/avatar_frame.png";

frame.onload = function() {
    drawCurrentImage();
}