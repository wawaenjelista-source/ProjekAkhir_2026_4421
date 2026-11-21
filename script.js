/*
 * Proyek Akhir Semester Ganjil — Paket 1
 * XI RPL 2 | Pemrograman Web
 *
 * KERJAKAN HANYA:
 *   JS-01: Melengkapi perulangan for.
 *   JS-02: Mengambil elemen Array berdasarkan indeks.
 *
 * Bagian penghubung antarmuka disiapkan guru dan tidak dinilai
 * pada Paket 1. Jangan mengubah bagian tersebut.
 */

// Data awal disediakan guru. Jangan diubah.
const daftarKegiatan = ["Piket Kelas", "Rapat OSIS", "Kerja Bakti"];

function tampilkanKegiatan(daftar) {
  const elemenDaftar = document.getElementById("daftarKegiatan");

  if (elemenDaftar === null) {
    return;
  }

  // Disediakan guru: hapus isi daftar sebelum menampilkannya kembali.
  elemenDaftar.innerHTML = "";

  // TODO JS-01:
  // Perbaiki batas perulangan for berikut agar dimulai dari indeks pertama
  // dan memproses seluruh elemen berdasarkan panjang Array (length).
  for (let i = 0; i < daftar.length; i++) {
    // TODO JS-02:
    // Ganti string kosong dengan elemen Array 'daftar' pada indeks i.
    const namaKegiatan = daftar[i];

    // Disediakan guru: pembentukan dan penampilan elemen HTML.
    const item = document.createElement("li");
    item.textContent = namaKegiatan;
    elemenDaftar.appendChild(item);
  }
}

// ================================================================
// KODE PENGHUBUNG ANTARMUKA — DISEDIAKAN GURU, JANGAN DIUBAH
// Bagian ini bukan materi yang diuji pada Paket 1.
// Tombol tambah/cari/hapus baru akan berfungsi setelah guru memberi
// petunjuk dan bagian fungsi pada pertemuan berikutnya.
// ================================================================

function perbaruiTampilan() {
  tampilkanKegiatan(daftarKegiatan);

  const elemenTotal = document.getElementById("totalKegiatan");
  if (elemenTotal !== null) {
    if (typeof hitungJumlahKegiatan === "function") {
      elemenTotal.textContent = hitungJumlahKegiatan(daftarKegiatan);
    } else {
      elemenTotal.textContent = daftarKegiatan.length;
    }
  }
}

function tampilkanStatus(pesan, berhasil) {
  const elemenStatus = document.getElementById("pesanStatus");
  if (elemenStatus === null) {
    return;
  }

  elemenStatus.textContent = pesan;
  elemenStatus.classList.remove("berhasil", "gagal");
  elemenStatus.classList.add(berhasil ? "berhasil" : "gagal");
}

document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputKegiatan");
  const btnTambah = document.getElementById("btnTambah");
  const btnCari = document.getElementById("btnCari");
  const btnHapus = document.getElementById("btnHapus");

  if (input !== null && btnTambah !== null) {
    btnTambah.addEventListener("click", function () {
      if (typeof tambahKegiatan !== "function") return;

      const berhasil = tambahKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        berhasil ? "Kegiatan berhasil ditambahkan." : "Nama kegiatan kosong atau sudah terdaftar.",
        berhasil
      );
      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  if (input !== null && btnCari !== null) {
    btnCari.addEventListener("click", function () {
      if (typeof cariKegiatan !== "function") return;

      const indeks = cariKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        indeks !== -1 ? `Kegiatan ditemukan pada indeks ${indeks}.` : "Kegiatan tidak ditemukan.",
        indeks !== -1
      );
    });
  }

  if (input !== null && btnHapus !== null) {
    btnHapus.addEventListener("click", function () {
      if (typeof hapusKegiatan !== "function") return;

      const berhasil = hapusKegiatan(daftarKegiatan, input.value);
      tampilkanStatus(
        berhasil ? "Kegiatan berhasil dihapus." : "Kegiatan tidak ditemukan.",
        berhasil
      );
      if (berhasil) input.value = "";
      perbaruiTampilan();
    });
  }

  perbaruiTampilan();
});

// Area penambahan Function untuk pertemuan berikutnya akan diberikan
// oleh guru pada saat paket soal berikutnya dibagikan.

// =====================================================================
// KERANGKA SOAL SABTU, 21 NOVEMBER 2026
// Tambahkan blok ini pada AKHIR script.js hasil Checkpoint 1 (17 Nov).
// Jangan menghapus/mengganti kode yang sudah dikerjakan pada 17 Nov.
// Hapus baris return sementara setelah logika TODO yang sesuai lengkap.
// =====================================================================

// TODO JS-03, JS-04, JS-05 — Validasi dan penambahan kegiatan
function tambahKegiatan(daftar, nama) {
  const namaBersih = nama.trim();

  if (namaBersih === "") {
    return false;
}
  if (daftar.includes(namaBersih)) {
    return false;
  }

  daftar.push(namaBersih);

  return true;
}
  // TODO JS-03: Simpan nama yang sudah di-trim ke variabel namaBersih.
  // Jika namaBersih kosong, gunakan return false.

  // TODO JS-04: Gunakan includes() untuk menolak nama duplikat.
  // Jika kegiatan sudah ada, gunakan return false.

  // TODO JS-05: Gunakan push() untuk menambahkan namaBersih.
  // Jika penambahan berhasil, gunakan return true.


// TODO JS-06 — Pencarian kegiatan
function cariKegiatan(daftar, nama) {
  const namaBersih = nama.trim();

  return daftar.indexOf(namaBersih);
}
  // TODO JS-06: Hilangkan spasi awal/akhir menggunakan trim().
  // Cari posisi kegiatan dengan indexOf(), lalu kembalikan indeksnya.
  // Jika tidak ditemukan, indexOf() akan menghasilkan -1.

// TODO JS-07 dan JS-08 — Penghapusan kegiatan
function hapusKegiatan(daftar, nama) {
  const indeks = cariKegiatan(daftar, nama);

  if (indeks === -1) {
    return false;
  }

  daftar.splice(indeks, 1);
  return true;
}
  // TODO JS-07: Panggil cariKegiatan(daftar, nama).
  // Simpan hasilnya dalam variabel indeks.

  // TODO JS-08: Jika indeks bernilai -1, gunakan return false.
  // Jika ditemukan, hapus satu elemen menggunakan splice().
  // Kembalikan true jika penghapusan berhasil.
// TODO JS-09 — Menghitung jumlah kegiatan
function hitungJumlahKegiatan(daftar) {
  return daftar.length;
}
  // TODO JS-09: Gunakan length dan return untuk menghasilkan jumlah kegiatan.