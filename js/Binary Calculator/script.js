let scr = ""; // declared as global variable

function calculate() { 
    let ans;
    if (scr.indexOf("+") !== -1) { 
        // If + is present in the string 
        // String obtained from scr is split 
        let num = scr.split("+"); 

        // The splitted string stores in num array 
        let x = parseInt(num[0], 2); 
        let y = parseInt(num[1], 2); 
        let sum = x + y; 
        ans = sum.toString(2); 
    } else if (scr.indexOf("-") !== -1) { 
        // If - is present in the string 
        let num = scr.split("-"); 
        let x = parseInt(num[0], 2); 
        let y = parseInt(num[1], 2); 
        let sub = x - y; 
        ans = sub.toString(2); 
    } else if (scr.indexOf("*") !== -1) { 
        // If * is present in the string 
        let num = scr.split("*"); 
        let x = parseInt(num[0], 2); 
        let y = parseInt(num[1], 2); 
        let mul = x * y; 
        ans = mul.toString(2); 
    } else if (scr.indexOf("/") !== -1) { 
        // If / is present in the string 
        let num = scr.split("/"); 
        let x = parseInt(num[0], 2); 
        let y = parseInt(num[1], 2); 
        let div = x / y; 
        ans = div.toString(2); 
    } 
    scr = ans; 
    document.getElementById("output").innerHTML = scr; 
}

function input(ch) { 
    scr += ch; 
    document.getElementById("output").innerHTML = scr; 
}

function backspace() { 
    let b = document.getElementById("output").innerHTML; 
    scr = b.substring(0, b.length - 1); 
    document.getElementById("output").innerHTML = scr; 
}

function cls() { 
    scr = ""; 
    document.getElementById("output").innerHTML = scr; 
}
