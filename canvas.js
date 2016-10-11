function drawImage(data, Pixelfunc) {
    for(var x = 0; x < data.width; x++) {
        for(var y = 0; y < data.height; y++) {

            var index = (y * data.width + x) * 4;
            data.data[index] = Pixelfunc.RED(x,y)&255;
            data.data[index+1] = Pixelfunc.GREEN(x,y)&255;
            data.data[index+2] = Pixelfunc.BLUE(x,y)&255;
            data.data[index+3] = 255;
        }
    }
    return data;
}


var canvas = document.getElementById("canvas");
canvas.width = pixel;
canvas.height = pixel;
var ctx = canvas.getContext("2d");
var data = ctx.createImageData(pixel,pixel);



var method = {
    Martin : Martin,
    githubphagocyte : githubphagocyte,
    githubphagocyte_motion : githubphagocyte_motion,
    Mandelbrot : Mandelbrot,
    maohhgg : maohhgg,
    demo0 : demo0,
    demo : demo,
    demo1 : demo1,
    demo2 : demo2,
};
for (var variable in method) {
    if (method.hasOwnProperty(variable)) {
        $(".button").append('<input type="button" name="name" value="'+ variable +'">')
    }
}


$(document).ready(function(){
    $("input").click(function(){
        var variable = $(this).val();
        data = drawImage(data,method[variable])
        ctx.putImageData(data,0,0);
    });
});
