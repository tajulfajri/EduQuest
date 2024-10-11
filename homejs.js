// Script untuk memunculkan tombol scroll ke atas ketika menggulir ke bawah
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scroll-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// Script untuk mengarahkan pengguna kembali ke atas halaman ketika tombol diklik
document.getElementById("scroll-top").addEventListener("click", function(event) {
    event.preventDefault();
    window.scrollTo({top: 0, behavior: 'smooth'});
});