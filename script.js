
const developerUsername = "YanoOfficialCyber";
const developerPassword = "YanoOfficialCyber";

const soal = [
  { tanya: "Apa itu WhatsApp Banned?", opsi: ["A. Fitur WA", "B. Nomor diblokir", "C. WA Premium", "D. WA Ijo"], benar: 1 },
  { tanya: "Cara unbanned WhatsApp?", opsi: ["A. Spam ke CS", "B. Ganti kartu", "C. Ajukan banding", "D. Hapus akun"], benar: 2 },
  { tanya: "Apa itu Nokos?", opsi: ["A. Nomor kosong", "B. No kos-kosan", "C. Kode negara", "D. Nomor palsu"], benar: 0 },
  { tanya: "Apa fungsi Cyber Security?", opsi: ["A. Bikin virus", "B. Amankan sistem", "C. Blokir akun", "D. Hack orang"], benar: 1 },
  { tanya: "Nokos banyak digunakan untuk?", opsi: ["A. Main Mobile Legends", "B. Testing bot", "C. Registrasi masal", "D. Hanya WA"], benar: 2 },
  { tanya: "Tools banned WA disebut juga?", opsi: ["A. Script", "B. Cloner", "C. Fuzzer", "D. Nuker"], benar: 3 },
  { tanya: "Apa itu API Key?", opsi: ["A. Password bot", "B. Akses ke API", "C. Email", "D. Nomor HP"], benar: 1 },
  { tanya: "Bahaya banned bisa?", opsi: ["A. Hilang data", "B. Kena denda", "C. Hilang nomor", "D. Semua benar"], benar: 3 },
  { tanya: "Cara aman pakai bot?", opsi: ["A. Sembarangan spam", "B. Pakai delay", "C. Spam malam", "D. Spam grup"], benar: 1 },
  { tanya: "Cyber Team itu?", opsi: ["A. Grup iseng", "B. Tim sepakbola", "C. Komunitas belajar", "D. Hacker"], benar: 2 },
  { tanya: "WA diblokir karena?", opsi: ["A. Sering offline", "B. Salah kode OTP", "C. Dilaporkan", "D. Sering aktif"], benar: 2 },
  { tanya: "WA Mod itu?", opsi: ["A. WA biasa", "B. WA dimodifikasi", "C. Web WhatsApp", "D. WA server"], benar: 1 },
  { tanya: "Nokos bisa didapat dari?", opsi: ["A. Indomaret", "B. Nokos Generator", "C. Facebook", "D. Random chat"], benar: 1 },
  { tanya: "VPN berfungsi untuk?", opsi: ["A. Blokir IP", "B. Tutupi IP", "C. Menambah RAM", "D. Ganti SIM"], benar: 1 },
  { tanya: "Cyber Security penting untuk?", opsi: ["A. Pemula", "B. Developer", "C. Semua orang", "D. Bot maker"], benar: 2 },
  { tanya: "WA banned karena?", opsi: ["A. Anti bug", "B. Di report banyak", "C. Dipakai lama", "D. Terlalu aktif"], benar: 1 },
  { tanya: "Apa itu OTP?", opsi: ["A. Nomor WA", "B. Kode Verifikasi", "C. Bot Telegram", "D. Nama lain WA"], benar: 1 },
  { tanya: "WA API digunakan untuk?", opsi: ["A. Main game", "B. Integrasi Bot", "C. Ganti nomor", "D. Reset"], benar: 1 },
  { tanya: "Fitur banned pakai?", opsi: ["A. VPN", "B. Proxy", "C. Payload", "D. Fuzzer"], benar: 3 },
  { tanya: "WA Unbanned pakai?", opsi: ["A. CS WhatsApp", "B. Web resminya", "C. Banding email", "D. Semua benar"], benar: 3 },
  { tanya: "Sertifikat diberikan setelah?", opsi: ["A. Bayar", "B. Belajar", "C. Lulus Ujian", "D. Daftar"], benar: 2 },
  { tanya: "Mode gelap diaktifkan?", opsi: ["A. Dari Server", "B. Dari UI", "C. Fitur WA", "D. Hanya malam"], benar: 1 },
  { tanya: "Nokos =?", opsi: ["A. Nomor aktif", "B. Nomor terpakai", "C. Nomor kosong", "D. Nomor utama"], benar: 2 },
  { tanya: "WA MOD resiko?", opsi: ["A. Aman", "B. Diblokir", "C. Gratis", "D. Cepat"], benar: 1 },
  { tanya: "Belajar Cyber dimana?", opsi: ["A. TikTok", "B. Facebook", "C. Cyber Academi", "D. Grup WA"], benar: 2 },
  { tanya: "WA delay penting?", opsi: ["A. Tidak", "B. Kadang", "C. Sangat penting", "D. Jarang"], benar: 2 },
  { tanya: "Bot WA dijalankan via?", opsi: ["A. Termux", "B. Pterodactyl", "C. Panel", "D. Semua benar"], benar: 3 },
  { tanya: "Fitur anti banned?", opsi: ["A. Auto Block", "B. Filter Chat", "C. Limit Spam", "D. Semua benar"], benar: 3 },
  { tanya: "Cyber Security fokus?", opsi: ["A. Chat", "B. Keamanan sistem", "C. Main WA", "D. Hiburan"], benar: 1 },
  { tanya: "WA kloning itu?", opsi: ["A. Banyak device", "B. Web WA", "C. WA Mod", "D. WhatsApp Plus"], benar: 0 },
  { tanya: "Cara belajar efektif?", opsi: ["A. Baca & Praktek", "B. Hafal", "C. Lihat YouTube", "D. Beli script"], benar: 0 },
  { tanya: "WA bot error karena?", opsi: ["A. Server", "B. Script bug", "C. Spam", "D. Semua benar"], benar: 3 },
  { tanya: "Nokos mati artinya?", opsi: ["A. Tidak bisa OTP", "B. Tidak aktif", "C. Hangus", "D. Semua benar"], benar: 3 },
  { tanya: "WA kena delay kenapa?", opsi: ["A. Anti banned", "B. Diblok", "C. Banyak request", "D. Penuh"], benar: 2 },
  { tanya: "WA aman =?", opsi: ["A. Private", "B. Tidak spam", "C. Tidak disebar", "D. Semua benar"], benar: 3 },
  { tanya: "WA bot gratis dari?", opsi: ["A. Github", "B. Telegram", "C. TikTok", "D. WhatsApp"], benar: 0 },
  { tanya: "WA banned fix =?", opsi: ["A. Beli baru", "B. Unbanned", "C. Ganti email", "D. Ganti SIM"], benar: 1 },
  { tanya: "Cyber Academi by?", opsi: ["A. Orang lain", "B. Yano", "C. Hacker", "D. Anonymous"], benar: 1 },
  { tanya: "Panel bot itu?", opsi: ["A. Aplikasi", "B. Panel kontrol", "C. VPS", "D. Emulator"], benar: 1 },
  { tanya: "Script bot WA dibuat di?", opsi: ["A. HTML", "B. Python", "C. JavaScript", "D. CSS"], benar: 2 }
];

 Array(40).fill(null).map((_, i) => ({
  tanya: `Soal ${i + 1}: Apa jawaban dari pertanyaan ini?`,
  opsi: ["A. Jawaban 1", "B. Jawaban 2", "C. Jawaban 3", "D. Jawaban 4"],
  benar: 0
}));

let currentIndex = 0;
let nilai = 0;
let nama = "";
let currentKelas = "";

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === developerUsername && pass === developerPassword) {
    localStorage.setItem("cyberUser", user);
    nama = user;
    showDashboard();
  } else {
    alert("Username/Password salah!");
  }
}

function showDashboard() {
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("namaUser").innerText = nama;
}

function bukaKelas(kelas) {
  currentKelas = kelas;
  document.getElementById("dashboard").classList.add("hidden");
  document.getElementById("quizScreen").classList.remove("hidden");
  document.getElementById("judulKelas").innerText = kelas;
  currentIndex = 0;
  nilai = 0;
  loadSoal();
}

function loadSoal() {
  const q = soal[currentIndex];
  document.getElementById("pertanyaanTeks").innerText = q.tanya;
  const opsiBox = document.getElementById("opsiJawaban");
  opsiBox.innerHTML = "";
  q.opsi.forEach((opsi, i) => {
    const btn = document.createElement("button");
    btn.innerText = opsi;
    btn.onclick = () => {
      if (i === q.benar) nilai += 2.5;
      currentIndex++;
      if (currentIndex < soal.length) {
        loadSoal();
      } else {
        showHasil();
      }
    };
    opsiBox.appendChild(btn);
  });
}

function showHasil() {
  document.getElementById("quizScreen").classList.add("hidden");
  document.getElementById("hasilScreen").classList.remove("hidden");
  const id = "CYB-" + new Date().getTime();
  document.getElementById("certNama").innerText = nama;
  document.getElementById("certId").innerText = id;
  document.getElementById("certNilai").innerText = nilai;
  document.getElementById("certStatus").innerText = nilai >= 70 ? "✅ LULUS" : "❌ GAGAL";
  document.getElementById("certTanggal").innerText = new Date().toLocaleDateString();
}

function downloadSertifikat() {
  html2canvas(document.getElementById("sertifikat")).then(canvas => {
    const link = document.createElement("a");
    link.download = `sertifikat_${nama}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
}

window.onload = () => {
  const savedUser = localStorage.getItem("cyberUser");
  if (savedUser) {
    nama = savedUser;
    showDashboard();
  }
};
