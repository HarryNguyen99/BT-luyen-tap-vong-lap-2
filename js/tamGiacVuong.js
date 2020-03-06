var res1 = document.getElementById("result1");
var res2 = document.getElementById("result2");
var res3 = document.getElementById("result3");
var res4 = document.getElementById("result4");

function display1() {
    let i = 1;
    let n = 5;
    let triangle = '';
    while (i <= n) {
        for (let j = 1; j <= i; j++) {
            triangle += "*"
        }
        triangle += "<br/>";
        i++;
    }
    res1.innerHTML = triangle;
}

function display2() {
    let i = 5;
    let triangle = '';
    while (i > 0) {
        for (let j = 1; j <= i; j++) {
            triangle += "*"
        }
        triangle += "<br/>";
        i--;
    }
    res2.innerHTML = triangle;
}

function display3() {
    var n = 5;
    var row = "";
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= (n - i); j++) {
            row += "&nbsp&nbsp;";
        }
        for (var k = 1; k <= i; k++) {
            row += '*';
        }
        row += "<br/>"
        res3.innerHTML = row;
    }
}

function display4() {
    var n = 5;
    var row = "";
    for (var i = 0; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            row += "&nbsp&nbsp;";
        }
        for (var j = 5; j > i; j--) {
            row += "*";
        }
        row += "<br/>";
    }
    res4.innerHTML = row;
}


display1();
display2();
display3();
display4();