function checkPasswordMatch(event) {
    event.preventDefault(); // Mencegah pengiriman form secara langsung

    // Mengambil nilai password dan konfirmasi password menggunakan jQuery
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    var passwordError = $('#passwordError');

    // Jika password dan konfirmasi password tidak cocok
    if (password !== confirmPassword) {
        passwordError.show(); // Tampilkan pesan error dengan jQuery
        return false; // Gagal registrasi
    } else {
        passwordError.hide(); // Sembunyikan pesan error dengan jQuery
        alert("Selamat Registrasi Berhasil!"); // Pesan registrasi berhasil

        // Redirect ke halaman login setelah 1 detik
        setTimeout(function() {
            window.location.href = "login.html";
        }, 1000);

        return true; // Password cocok, form akan diproses
    }
}
