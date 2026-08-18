let result = document.querySelector('.display p');
let inter = document.querySelector('.display span');
let l = 0;
let m = 0;

result.innerHTML = "0";
function update(input) {
    // Count operators and operands
    if (input == '+' || input == '-' || input == '/' || input == '*' || input == '%') {
        l++;
    } else {
        m++;
    }
    // Add values to display
    if (input != 'C' && input != 'del' && input != '=') {
        if (result.innerHTML == "0") {
            result.innerHTML = "";
        }
        // Convert button names to brackets
        if (input == 'b1') {
            input = '(';
        }
        if (input == 'b2') {
            input = ')';
        }
        result.innerHTML += input;
    }
    // Delete last character
    if (input == 'del') {
        let del = result.innerHTML;
        del = del.slice(0, -1);
        result.innerHTML = del;
        if (result.innerHTML == "") {
            result.innerHTML = "0";
        }
    }
    // Clear all
    if (input == 'C') {
        result.innerHTML = '0';
        inter.innerHTML = '';
        l = 0;
        m = 0;
    }
    // Calculate result
    if (input == '=') {
        try {
            if (l > m) {
                result.innerHTML = 'Error';
            } else {
                let exp = result.innerHTML;
                inter.innerHTML = exp;
                let finalResult = eval(exp);
                result.innerHTML = finalResult;
            }
        } catch (error) {
            result.innerHTML = "Error";
        }
    }
}
// Square Root Function
function root() {
    try {
        let res = result.innerHTML;
        res = eval(res);
        inter.innerHTML = "√(" + res + ")";
        res = Math.sqrt(res);
        result.innerHTML = res;
    } catch {
        result.innerHTML = "Error";
    }
}
// Factorial Function
function factorial() {
    try {
        let res1 = result.innerHTML;
        if (res1 == '') {
            result.innerHTML = '';
        } else {
            res1 = eval(res1);
            if (res1 < 0) {
                result.innerHTML = "Error";
                return;
            }
            let res2 = 1;
            for (let i = 1; i <= res1; i++) {
                res2 *= i;
            }
            result.innerHTML = res2;
            inter.innerHTML = res1 + '!';
        }
    } catch {
        result.innerHTML = "Error";
    }
}