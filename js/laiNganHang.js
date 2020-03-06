let res = document.getElementById("result");

function Calculate() {
    let a = parseFloat(document.getElementById("a").value);
    let r = parseFloat(document.getElementById("r").value);
    let n = parseFloat(document.getElementById("n").value);
    let result = 0;
    if (isNaN(a) || isNaN(r) || isNaN(n)) {
        res.innerHTML = " input  must be a number "
    } else {
        result = a * (Math.pow((1 + r), n));
        res.innerHTML = result;
    }
}