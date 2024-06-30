$(document).ready(function () { 
	$(document).keypress(function (e) { 
		if (e.which == 13) { 
			let webLink = 
"...api.php?action=query&list=search&srsearch=" + 
				document.getElementById( 
					"search"
				).value + 
				"&utf8=&format=json"; 
			$.ajax({ 
				url: webLink, 
				dataType: "jsonp", 
				success: function ( 
					data 
				) { 
					$("div").remove( 
						".searchResult"
					); 
					for ( 
						i = 0; 
						i < 
						data.query 
							.search 
							.length; 
						i++ 
					) { 
						let titleForResult = 
							data.query 
								.search[ 
								i 
							].title; 
						let snippetForResult = 
							data.query 
								.search[ 
								i 
							].snippet; 
						$( 
							"#searchBox"
						).append( 
							'<a href="https://example.com/' + 
							titleForResult + 
							`" target="_blank"
							style="text-decoration:none"> 
								<div class="searchResult"> 
								<span class="searchTitle">` + 
							titleForResult + 
							"</span><span><br />" + 
							snippetForResult + 
							"</span></div></a>"
						); 
					} 
				}, 
			}); 
		} 
	}); 
});
