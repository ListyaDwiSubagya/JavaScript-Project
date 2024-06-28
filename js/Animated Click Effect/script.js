let button = document.getElementById("btn_id2"); 

button.addEventListener("click", animateonce); 

function animateonce() { 
	button.classList.add("animationjs"); 

	setTimeout(() => { 
		button.style.backgroundColor = "#A155B9"; 
		button.classList.remove("animationjs"); 
	}, 1500); 
}
