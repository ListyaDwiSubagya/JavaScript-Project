// Setting the level to Easy by having the 
// duration of the whole animation to the maximum 
function easy() { 
    document.getElementById('circle') 
        .style.animationDuration = '20s'; 
    document.getElementById('circle') 
        .className = 'crcl'; 
} 

// Setting the level to Medium by having the 
// duration of the whole animation to the maximum 
function medium() { 
    document.getElementById('circle') 
        .style.animationDuration = '15s'; 
    document.getElementById('circle') 
        .className = 'crcl'; 
} 

// Setting the level to Hard by having the 
// duration of the whole animation to the maximum 
function hard() { 
    document.getElementById('circle') 
        .style.animationDuration = '12s'; 
    document.getElementById('circle') 
        .className = 'crcl'; 
} 

let cnt = 0; 

// Function to count the number of taps 
// and display the score 
function count() { 
    cnt = parseInt(1) + parseInt(cnt); 
    var scr = document.getElementById('score'); 
    scr.innerHTML = cnt; 
} 

// Restart the game by refreshing the page 
function restart() { 
    window.location.reload(); 
} 