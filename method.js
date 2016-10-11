pixel = 1024;
var Martin = {
    RED : function(i,j){
        return parseInt(Math.pow(Math.cos(Math.atan2(j-512,i-512)/2), 2) * 255);
    },
    GREEN : function(i,j){
        return parseInt(Math.pow(Math.cos(Math.atan2(j-512,i-512)/2-2*Math.acos(-1)/3), 2) * 255);
    },
    BLUE : function(i,j){
        return parseInt(Math.pow(Math.cos(Math.atan2(j-512,i-512)/2+2 * Math.acos(-1)/3), 2) * 255);
    }
}
var githubphagocyte = {
    RED : function(i,j){
        var s=3/(j+99);
        var y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel)*35)*s;
        return parseInt((parseInt((i+pixel)*s+y)%2+parseInt((pixel*2-i)*s+y)%2)*127);
    },
    GREEN : function(i,j){
        var s=3/(j+99);
        var y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel)*35)*s;
        return parseInt((parseInt(5*((i+pixel)*s+y))%2+parseInt(5*((pixel*2-i)*s+y))%2)*127);
    },
    BLUE : function(i,j){
        var s=3/(j+99);
        var y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel)*35)*s;
        return parseInt((parseInt(29*((i+pixel)*s+y))%2+parseInt(29*((pixel*2-i)*s+y))%2)*127);
    }
}
P = 6.03
var githubphagocyte_motion = {
    RED : function(i,j){
        var s=3/(j+250),y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel+P)*15)*s;
        return parseInt((parseInt((i+pixel)*s+y)%2+parseInt((pixel*2-i)*s+y)%2)*127);
    },
    GREEN : function(i,j){
        var s=3/(j+250);
        var y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel+P)*15)*s;
        return parseInt((parseInt(5*((i+pixel)*s+y))%2+parseInt(5*((pixel*2-i)*s+y))%2)*127);
    },
    BLUE : function(i,j){
        var s=3/(j+250);
        var y=(j+Math.sin((i*i+Math.pow(j-700,2)*5)/100./pixel+P)*15)*s;
        return parseInt((parseInt(29*((i+pixel)*s+y))%2+parseInt(29*((pixel*2-i)*s+y))%2)*127);
    }
}


var Mandelbrot = {
    RED : function(i,j){
        var a=0,b=0,c,d,n=0;
        while((c=a*a)+(d=b*b)<4&&n++<880)
        {b=2*a*b+j*8e-9-.645411;a=c-d+i*8e-9+.356888;}
        return parseInt(255*Math.pow((n-80)/800,3));
    },
    GREEN : function(i,j){
        var a=0,b=0,c,d,n=0;
        while((c=a*a)+(d=b*b)<4&&n++<880)
        {b=2*a*b+j*8e-9-.645411;a=c-d+i*8e-9+.356888;}
        return parseInt(255*Math.pow((n-80)/800,0.7));
    },
    BLUE : function(i,j){
        var a=0,b=0,c,d,n=0;
        while((c=a*a)+(d=b*b)<4&&n++<880)
        {b=2*a*b+j*8e-9-.645411;a=c-d+i*8e-9+.356888;}
        return parseInt(255*Math.pow((n-80)/800,0.5));
    }

}
var maohhgg = {
    RED : function(i,j){
        var x = i + j ;
        var d = x > 1024 ? x - (x % 1024) : x;
        return parseInt(255 * (Math.sqrt(x) / 10 * 8));
    },
    GREEN : function(i,j){
        var x = i + j ;
        var d = x > 1024 ? x - (x % 1024) : x;
        return parseInt(255 * (Math.sqrt(x) / 10 * 8));
    },
    BLUE : function(i,j){
        var x = i + j ;
        var d = x > 1024 ? x - (x % 1024) : x;
        return parseInt(255 * (Math.sqrt(x) / 10 * 8));
    }
}
var demo = {
    RED : function(i,j){

    },
    GREEN : function(i,j){

    },
    BLUE : function(i,j){

    }
}
var demo0 = {
    RED : function(i,j){
        return i&&j?(i%j)&(j%i):0;
    },
    GREEN : function(i,j){
        return i&&j?(i%j)+(j%i):0;
    },
    BLUE : function(i,j){
        return i&&j?(i%j)|(j%i):0;
    }
}
var demo1 = {
    RED : function(i,j){
        return parseInt((Math.sqrt(Math.pow(73-i,2)+Math.pow(609-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(860-i,2)+Math.pow(162-j,2)))/115)))+1)/200);
    },
    GREEN : function(i,j){
        return parseInt((Math.sqrt(Math.pow(160-i,2)+Math.pow(60-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(86-i,2)+Math.pow(860-j,2)))/115)))+1)/200);
    },
    BLUE : function(i,j){
        return parseInt((Math.sqrt(Math.pow(844-i,2)+Math.pow(200-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(250-i,2)+Math.pow(20-j,2)))/115)))+1)/200);
    }
}
var demo2 = {
    RED : function(i,j){
        return j^j-i^i;
    },
    GREEN : function(i,j){
        return (i-pixel)^2+(j-pixel)^2;
    },
    BLUE : function(i,j){
        return i^i-j^j;
    }
}
