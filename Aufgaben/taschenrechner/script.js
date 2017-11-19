window.onload = loaded;

tmp = 0;

function loaded() {
    var buttons = document.getElementsByClassName("btn");
    for (var index = 0; index < buttons.length; index++) {
        buttons[index].setAttribute("onclick", "add('" + buttons[index].value + "')");
    }
}

function add(s) {
    s = s.toString();
    switch (s) {
        case "CLR":
            tmp = 0;
            document.getElementById("out").innerHTML = "";
            break;
        
        case "=":
            document.getElementById("out").innerHTML = document.getElementById("out") + tmp;
            break;
        
        case "+":
            tmp += document.getElementById("out");
            document.getElementById("out").innerHTML = "";
            break;
    
        default:
            document.getElementById("out").value += s;
            break;
    }
}