const calculateAspectRatio = () => {
	const widthInput =
		document.getElementById("width");
	const heightInput =
		document.getElementById("height");
	const width = parseFloat(widthInput.value);
	const height = parseFloat(heightInput.value);

	if (!isNaN(width) &&
		!isNaN(height)) {
		const diagonal = Math.sqrt(
			width ** 2 + height ** 2
		).toFixed(2);
		document.getElementById("result1")
			.textContent = "Diagonal = " + diagonal;

		const x = (
			width / height
		).toFixed(2);
		document.getElementById(
			"result2"
		).textContent =
			"Aspect Ratio (x:1 format) = " +
			x +
			" : 1";

		const gcd = (a, b) => {
			while (b) {
				a %= b;
				[a, b] = [b, a];
			}
			return a;
		};

		const gcdValue = gcd(
			width,
			height);
		const w = width / gcdValue;
		const h = height / gcdValue;
		document.getElementById(
			"result3"
		).textContent =
			"Aspect Ratio (w:h format) = " +
			w +
			" : " +
			h;

		// Apply aspect ratio to the preview image
		const imageElement =
			document.getElementById(
				"previewImage"
			);
		imageElement.style.width = `${width}px`;
		imageElement.style.height = `${height}px`;
	}
	else {

		// Clear results and reset image on invalid input
		document.getElementById(
			"result1"
		).textContent = "Diagonal: ";
		document.getElementById(
			"result2"
		).textContent =
			"Aspect Ratio (x:1 format): ";
		document.getElementById(
			"result3"
		).textContent =
			"Aspect Ratio (w:h format): ";

		const imageElement =
			document.getElementById(
				"previewImage"
			);
		imageElement.style.width =
			"auto";
		imageElement.style.height =
			"auto";
	}
}

const setCommonRati = () => {
	const commonRatios = {
		"16:9": [1920, 1080],
		"5:4": [1280, 1024],
		"4:3": [1024, 768],
		"3:2": [1440, 960],
		"8K": [7680, 4320],
		"5K": [5120, 2880],
		"4K": [3840, 2160],
		Retina: [2048, 1536],
		iPhone6plus: [1920, 1080],
		iPhone6: [1334, 750],
		iPhone5: [1136, 640],
		iPad: [1024, 768],
		Twitter: [1024, 512],
		WebBanner: [728, 90],
		VGA: [640, 480],
		HVGA: [320, 480],
	};
	const selectedRatio =
		document.getElementById(
			"commonRatios"
		).value;
	const [width, height] =
		commonRatios[selectedRatio];
	document.getElementById(
		"width"
	).value = width;
	document.getElementById(
		"height"
	).value = height;

	// Update the results and preview 
	// for the selected common ratio
	calculateAspectRatio();
}

// Initialize the image aspect ratio 
// based on the placeholder image
calculateAspectRatio();
