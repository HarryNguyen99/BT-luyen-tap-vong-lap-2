let res = document.getElementById("result").value;

function printRactangle(w, h) {
    let result = '';
    let res = document.getElementById("result");
    for (let i = 0; i <= h; i++) {
        for (let j = 0; j <= w; j++) {
            if (i == 0 || i == h) {
                result += '*';
            } else {
                if (j == 0 || j == w) {
                    result += '*';
                } else {
                    result += '&nbsp&nbsp;';
                }
            }

        }
        result += '<br/>'
    }
    res.innerHTML = result;
}

printRactangle(8, 5);