// Fungsi untuk menangani pengiriman form kontak
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Ambil nilai dari form
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validasi sederhana
            if (name && email && message) {
                alert('Terima kasih, ' + name + '! Pesan Anda telah diterima. Kami akan segera menghubungi Anda melalui email.');
                contactForm.reset();
            } else {
                alert('Harap isi semua field yang diperlukan.');
            }
        });
    }
    
    // Fungsi untuk tombol beli
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.closest('.product-info').querySelector('h2').textContent;
            alert('Anda akan membeli ' + productName + '. Silakan lanjutkan pembayaran.');
        });
    });
    
    // Efek scroll halus untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});