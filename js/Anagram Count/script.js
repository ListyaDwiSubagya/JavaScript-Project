inputString.value = ""; 
inputWord.value = ""; 
nums.innerText = ""; 
explain.innerText = ""; 

function fun() { 
	let count = 0; 
	let res = []; 
	str = inputString.value; 
	word = inputWord.value; 
	if (str === "" || word === "") { 
		window.alert("Incorrect input!"); 
		return; 
	} 

	let n = str.length; 
	let wordLen = word.length; 
	srtWord = word.split("").sort().join(""); 

	for (let i = 0; i < n - wordLen + 1; ++i) { 
		let sub = str 
			.slice(i, i + wordLen) 
			.split("") 
			.sort() 
			.join(""); 
		if (sub === srtWord) { 
			count += 1; 
			res.push("'" + str.slice(i, i + wordLen) + "'"); 
		} 
	} 
	let explainres; 
	if (count === 0) explainres = "none"; 
	else explainres = res.join(","); 

	nums.innerText = 
		"Input string contains " + count + " Anagrams"; 
	explain.innerText = 
		"Anagrams of the word '" + 
		word + 
		"' are: " + 
		explainres; 
}
