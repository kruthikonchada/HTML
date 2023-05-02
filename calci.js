function clearScreen() {
    document.getElementById("input").value="";
    
}

function popFunction() {
    document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
}

function display(value) {
    document.getElementById("input").value += value;
}

function calculate() {
    var p = document.getElementById("input").value;
    var q = eval(p);
    document.getElementById("input").value = q;
}