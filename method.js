pixel = 1024;
var Martin = {
    RED: function(i, j) {
        return parseInt(Math.pow(Math.cos(Math.atan2(j - 512, i - 512) / 2), 2) * 255);
    },
    GREEN: function(i, j) {
        return parseInt(Math.pow(Math.cos(Math.atan2(j - 512, i - 512) / 2 - 2 * Math.acos(-1) / 3), 2) * 255);
    },
    BLUE: function(i, j) {
        return parseInt(Math.pow(Math.cos(Math.atan2(j - 512, i - 512) / 2 + 2 * Math.acos(-1) / 3), 2) * 255);
    }
}
var simple = {
    RED: function(i, j) {
        var s = 3. / (j + 99);
        return parseInt((parseInt((i + pixel) * s + j * s) % 2 + parseInt((pixel * 2 - i) * s + j * s) % 2) * 127);
    },
    GREEN: function(i, j) {
        var s = 3. / (j + 99);
        return parseInt((parseInt((i + pixel) * s + j * s) % 2 + parseInt((pixel * 2 - i) * s + j * s) % 2) * 127);
    },
    BLUE: function(i, j) {
        var s = 3. / (j + 99);
        return parseInt((parseInt((i + pixel) * s + j * s) % 2 + parseInt((pixel * 2 - i) * s + j * s) % 2) * 127);
    }
}
var githubphagocyte = {
    RED: function(i, j) {
        var s = 3 / (j + 99);
        var y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel) * 35) * s;
        return parseInt((parseInt((i + pixel) * s + y) % 2 + parseInt((pixel * 2 - i) * s + y) % 2) * 127);
    },
    GREEN: function(i, j) {
        var s = 3 / (j + 99);
        var y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel) * 35) * s;
        return parseInt((parseInt(5 * ((i + pixel) * s + y)) % 2 + parseInt(5 * ((pixel * 2 - i) * s + y)) % 2) * 127);
    },
    BLUE: function(i, j) {
        var s = 3 / (j + 99);
        var y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel) * 35) * s;
        return parseInt((parseInt(29 * ((i + pixel) * s + y)) % 2 + parseInt(29 * ((pixel * 2 - i) * s + y)) % 2) * 127);
    }
}
P = 6.03
var githubphagocyte_motion = {
    RED: function(i, j) {
        var s = 3 / (j + 250),
            y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel + P) * 15) * s;
        return parseInt((parseInt((i + pixel) * s + y) % 2 + parseInt((pixel * 2 - i) * s + y) % 2) * 127);
    },
    GREEN: function(i, j) {
        var s = 3 / (j + 250);
        var y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel + P) * 15) * s;
        return parseInt((parseInt(5 * ((i + pixel) * s + y)) % 2 + parseInt(5 * ((pixel * 2 - i) * s + y)) % 2) * 127);
    },
    BLUE: function(i, j) {
        var s = 3 / (j + 250);
        var y = (j + Math.sin((i * i + Math.pow(j - 700, 2) * 5) / 100. / pixel + P) * 15) * s;
        return parseInt((parseInt(29 * ((i + pixel) * s + y)) % 2 + parseInt(29 * ((pixel * 2 - i) * s + y)) % 2) * 127);
    }
}


var Mandelbrot = {
    RED: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + j * 8e-9 - .645411;
            a = c - d + i * 8e-9 + .356888;
        }
        return parseInt(255 * Math.pow((n - 80) / 800, 3));
    },
    GREEN: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + j * 8e-9 - .645411;
            a = c - d + i * 8e-9 + .356888;
        }
        return parseInt(255 * Math.pow((n - 80) / 800, 0.7));
    },
    BLUE: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + j * 8e-9 - .645411;
            a = c - d + i * 8e-9 + .356888;
        }
        return parseInt(255 * Math.pow((n - 80) / 800, 0.5));
    }

}
var maohhgg = {
    RED: function(i, j) {
        var x = (i + j);
        return parseInt(Math.pow(i + j, 2) / 255);
    },
    GREEN: function(i, j) {
        var x = i + j;
        return parseInt(Math.pow(i + j, 2) / 255);
    },
    BLUE: function(i, j) {
        var x = i + j;
        return parseInt(Math.pow(i + j, 2) / 255);
    }
}
var demo = {
    RED: function(i, j) {
        var x = 0,
            y = 0;
        for (var k = 0; k < 15; k++) {
            var t = Math.pow(Math.sin(x), 2) - Math.pow(Math.cos(y), 2) + (i - 512) / 512;
            y = 2 * Math.sin(x) * Math.cos(y) + (j - 512) / 512;
            x = t;
        }
        return parseInt(20 * (x * x + y * y));
    },
    GREEN: function(i, j) {
        var x = 0,
            y = 0;
        for (var k = 0; k < 15; k++) {
            var t = Math.pow(Math.sin(x), 2) - Math.pow(Math.cos(y), 2) + (i - 512) / 512;
            y = 2 * Math.sin(x) * Math.cos(y) + (j - 512) / 512;
            x = t;
        }
        return parseInt(90 * Math.abs(x));
    },
    BLUE: function(i, j) {
        var x = 0,
            y = 0;
        for (var k = 0; k < 15; k++) {
            var t = Math.pow(Math.sin(x), 2) - Math.pow(Math.cos(y), 2) + (i - 512) / 512;
            y = 2 * Math.sin(x) * Math.cos(y) + (j - 512) / 512;
            x = t;
        }
        return parseInt(90 * Math.abs(y));
    }
}
var demo0 = {
    RED: function(i, j) {
        return i && j ? (i % j) & (j % i) : 0;
    },
    GREEN: function(i, j) {
        return i && j ? (i % j) + (j % i) : 0;
    },
    BLUE: function(i, j) {
        return i && j ? (i % j) | (j % i) : 0;
    }
}
var demo1 = {
    RED: function(i, j) {
        return pixel - this.BLUE(2 * i, 2 * j);
    },
    GREEN: function(i, j) {
        return this.BLUE(j, i) + 128;
    },
    BLUE: function(i, j) {
        i -= pixel / 2;
        j -= pixel / 2;
        var theta = Math.atan2(j, i);
        var prc = theta / 3.14 / 2;
        var dist = Math.sqrt(i * i + j * j);
        var makeSpiral = prc * pixel / 2;
        var waves = Math.sin(Math.pow(dist * dist, 1 / 3)) * 32 + Math.sin(theta * 10) * 64;
        return parseInt(dist + makeSpiral + waves);
    }
}


var demo2 = {
    RED: function(i, j) {
        return j ^ j - i ^ i;
    },
    GREEN: function(i, j) {
        return (i - pixel) ^ 2 + (j - pixel) ^ 2;
    },
    BLUE: function(i, j) {
        return i ^ i - j ^ j;
    }
}

var demo3 = {
    RED: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + (j) * 9e-9 - .645411;
            a = c - d + (i) * 9e-9 + 0.356888;
        }
        return parseInt(1000 * Math.pow((n) / 800, 0.5));
    },
    GREEN: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + (j) * 9e-9 - .645411;
            a = c - d + (i) * 9e-9 + .356888;
        }
        return parseInt(40 * Math.pow((n) / 800, 0.5));
    },
    BLUE: function(i, j) {
        var a = 0,
            b = 0,
            c, d, n = 0;
        while ((c = a * a) + (d = b * b) < 4 && n++ < 880) {
            b = 2 * a * b + (j) * 9e-9 - .645411;
            a = c - d + (i) * 9e-9 + .356888;
        }
        return parseInt(10 * Math.pow((n) / 800, 0.5));
    }
}

var demo4 = {
    RED: function(i, j) {
        var I = i - pixel;
        var J = j - pixel;
        var A = Math.sin((i + j) / 64) * Math.cos((i - j) / 64);
        return parseInt(Math.atan2(I * Math.cos(A) - J * Math.sin(A), I * Math.sin(A) + J * Math.cos(A)) / 3.14 * pixel + pixel);
    },
    GREEN: function(i, j) {
        var I = i - pixel;
        var J = j - pixel;
        var A = (3.14 / 3 + Math.sin((i + j) / 64.) * Math.cos((i - j) / 64.));
        return parseInt(Math.atan2(I * Math.cos(A) - J * Math.sin(A), I * Math.sin(A) + J * Math.cos(A)) / 3.14 * pixel + pixel);
    },
    BLUE: function(i, j) {
        var I = i - pixel;
        var J = j - pixel;
        var A = (2 * 3.14 / 3 + Math.sin((i + j) / 64.) * Math.cos((i - j) / 64.));
        return parseInt(Math.atan2(I * Math.cos(A) - J * Math.sin(A), I * Math.sin(A) + J * Math.cos(A)) / 3.14 * pixel + pixel);
    }
}

var demo5 = {
    RED: function(i, j) {
        if (j < pixel / 2) j = pixel - j;
        return (i % j) | i;
    },
    GREEN: function(i, j) {
        if (j < 512) j = 1024 - j;
        return (1024 - i ^ (i % j)) % j;
    },
    BLUE: function(i, j) {
        if (j < 512) j = 1024 - j;
        return 1024 - i | i + j % 512;
    }
}

var demo6 = {
    RED: function(i, j) {
        var a = pixel - Math.sqrt(Math.pow(i - pixel / 2, 2) * Math.pow(j - pixel / 2, 2) / 8);
        return a < 0 ? 0 : a;
    },
    GREEN: function(i, j) {
        return parseInt((i ^ j) / 9 * Math.sqrt(Math.pow((i - pixel / 2) / 10, 2) * Math.pow((j - pixel / 2) / 10, 2))) % pixel / (1 + 3 * (i + j) / pixel);
    },
    BLUE: function(i, j) {
        return i & (Math.pow(i / (j / 10 + 1), 2) | j);
    }
}

var demo7 = {
    RED: function(i, j) {
        return i < 0 ? 1 + Math.pow(Math.round(((i + 1) % pixel + pixel / 2 + 1.5 * this.BLUE(i, j)) / (1 + 10 * j / pixel) / 5), 3) : this.GREEN(Math.sin(this.RED(i - pixel, j)), -1)
    },
    GREEN: function(i, j) {
        return j < 0 ? Math.floor(pixel * (1.5 + i) / 2.5) : this.GREEN(Math.sin(1 + this.RED(i - 2 * pixel, j)), -1)
    },
    BLUE: function(i, j) {
        return i < 0 ? 1.5 * Math.cos(i * i + j * j) : this.GREEN(Math.sin(2 + this.RED(i - 3 * pixel, j)), -1)
    }
}

var demo8 = {
    RED: function(i, j) {
        return i < 0 ? 1 + Math.pow(Math.round(((i + 1) % pixel + pixel / 2 + this.BLUE(i, j)) / (Math.exp(3 * j / pixel)) / 6), 3) : this.GREEN(Math.sin(this.RED(i - pixel, pixel - j)) + 0, -1)
    },
    GREEN: function(i, j) {
        return j < 0 ? Math.floor(pixel * (2 + i) / 4) : this.GREEN(Math.sin(1 + this.RED(i - 2 * pixel, pixel - j)) + 1, -1)
    },
    BLUE: function(i, j) {
        return i < 0 ? 1.5 * Math.cos(i * i + j * j) * j / 256 : this.GREEN(Math.sin(2 + this.RED(i - 3 * pixel, pixel - j)) - 0, -1)
    }
}

var demo9 = {
    RED: function(i, j) {
        var pi = Math.acos(-1);
        return i < 0 ? 1 + Math.pow(Math.round((i + pixel / 2 + this.BLUE(i, j)) / (Math.cos(4 * pi * (j / pixel - 0.5) + pi) + 2) / 8), 3) : this.GREEN(Math.sin(this.RED(i - pixel, pixel - j)), -1)
    },
    GREEN: function(i, j) {
        return j < 0 ? Math.floor(pixel * (2 + i) / 4) : this.GREEN(Math.sin(1 + this.RED(i - pixel, j)) - 1, -1)
    },
    BLUE: function(i, j) {
        return i < 0 ? 0 : this.GREEN(Math.sin(2 + this.RED(i - pixel, j)), -1)
    }
}
var demo10 = {
    RED: function(i, j) {
        return (Math.sqrt(Math.pow(73.-i,2)+Math.pow(609-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(860.-i,2)+Math.pow(162-j,2)))/115.0)))+1)
    },
    GREEN: function(i, j) {
        return (Math.sqrt(Math.pow(160.-i,2)+Math.pow(60-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(86.-i,2)+Math.pow(860-j,2)))/115.0)))+1)
    },
    BLUE: function(i, j) {
        return (Math.sqrt(Math.pow(844.-i,2)+Math.pow(200-j,2))+1)/(Math.sqrt(Math.abs(Math.sin((Math.sqrt(Math.pow(250.-i,2)+Math.pow(20-j,2)))/115.0)))+1)
    }
}
