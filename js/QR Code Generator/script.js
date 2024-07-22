// Membuat instance QRCode baru
let qrcode = new QRCode(document.querySelector(".qrcode"));

// Generate QR code awal dengan pesan default
qrcode.makeCode("Why did you scan me?");

// Fungsi untuk generate QR code berdasarkan input pengguna
function generateQr() {
    // Mengambil nilai input dari elemen input
    let inputValue = document.querySelector("input").value;

    // Mengecek apakah input kosong atau hanya berisi spasi
    if (inputValue === "" || inputValue.trim() === "") {
        alert("Input Field Can not be blank!");
    } else {
        // Jika input valid, generate QR code dengan nilai input
        qrcode.makeCode(inputValue);
    }
}
