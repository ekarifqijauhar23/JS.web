const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
    // Menambahkan event listener untuk setiap tombol tab
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.content');

tabButtons.forEach(button => {
  button.addEventListener('click', function() {
    const targetContent = document.getElementById(button.dataset.id);

    // Menghapus kelas active dari semua tombol dan konten
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // Menambahkan kelas active ke tombol yang dipilih dan konten terkait
    button.classList.add('active');
    targetContent.classList.add('active');

    // Scroll otomatis ke bagian konten
    targetContent.scrollIntoView({ behavior: 'smooth' });
  });
});

const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
// Mendapatkan semua gambar slider
const slides = document.querySelectorAll('.slide');

// Menentukan gambar aktif saat ini
let currentSlide = 0;

// Fungsi untuk menampilkan gambar berikutnya
function showNextSlide() {
  // Hapus kelas 'active' dari gambar yang sedang ditampilkan
  slides[currentSlide].classList.remove('active');
  
  // Hitung slide berikutnya (dengan loop kembali ke slide pertama)
  currentSlide = (currentSlide + 1) % slides.length;

  // Tambahkan kelas 'active' ke gambar berikutnya
  slides[currentSlide].classList.add('active');
}

// Menampilkan gambar pertama saat halaman dimuat
slides[currentSlide].classList.add('active');

// Setiap 3 detik, ganti gambar
setInterval(showNextSlide, 3000); // 3000 ms = 3 detik
