function checkAnagram() { 
	const word1 = document 
		.getElementById("word1") 
		.value.trim().toLowerCase() 
		.replace(/[^a-z]/g, ""); 
	const word2 = document 
		.getElementById("word2").value.trim() 
		.toLowerCase().replace(/[^a-z]/g, ""); 

	if (word1 === "" || word2 === "") { 
		alert("Please enter both words."); 
		return; 
	} 

	if (word1.length !== word2.length) { 
		document.getElementById("result") 
			.textContent = "Not anagrams"; 
		return; 
	} 

	const sortedWord1 = word1.split("") 
		.sort().join(""); 
	const sortedWord2 = word2.split("") 
		.sort().join(""); 

	if (sortedWord1 === sortedWord2) { 
		document.getElementById("result") 
			.textContent = "Anagrams"; 
	} else { 
		document.getElementById("result") 
			.textContent = "Not anagrams"; 
	} 
}
