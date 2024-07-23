function domReady(fn) {
	if (document.readyState === "complete" || document.readyState === "interactive") {
		setTimeout(fn, 1000);
	} else {
		document.addEventListener("DOMContentLoaded", fn);
	}
}

domReady(function () {
	// Fungsi yang dijalankan ketika QR code berhasil discan
	function onScanSuccess(decodeText, decodeResult) {
		alert("Your QR code is: " + decodeText);
	}

	// Inisialisasi HTML5 QR Code Scanner
	let htmlscanner = new Html5QrcodeScanner(
		"my-qr-reader",
		{ fps: 10, qrbox: 250 }
	);

	// Render QR Code Scanner dan set callback untuk hasil scan
	htmlscanner.render(onScanSuccess);
});
