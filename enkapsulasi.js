class Mahasiswa {
// construk (membuat variable awal)
  constructor(nama, umur, kampus) {
    this._nama = nama;
    this._umur = umur;
    this._kampus = kampus; 
  }

// GETTER (METHOD UNTUK PENGAMBILAN DATA)
  get nama() {
    return this._nama;
  }
  get umur() {
    return this._umur;
  }
  get kampus() {
    return this._kampus;
  }

// SETTER (METHOD UNTUK MENGUBAH DATA ATAU MEMVALIDASI)
  set nama(namabaru) {
    this._nama = namabaru;
  }

  set kampus(kampusbaru) {
    this._kampus = kampusbaru;
  }

  set umur(umurbaru) {
    if (umurbaru > 0) {
      this._umur = umurbaru;
    } else {
      console.log("Umur tidak valid");
    }
  }
}

// OBJEK BARU (MAHASISWA BARU)
let mhs1 = new Mahasiswa("azmi", 19, "Institut Teknologi Bandung");
// BAWA DATA PAKE GETTER YG SEBELUMNYA
console.log("DATA AWAL MAHASISWA");
console.log("Nama:", mhs1.nama);
console.log("Umur:", mhs1.umur, "tahun");
console.log("kampus:", mhs1.kampus);

// NGUBAH DATA PAKE SETTER
mhs1.umur = 20;
console.log("\n SETELAH UMUR DIPERBARUI");
console.log("umur sekarang:", mhs1.umur, "tahun");

//mengubah nama yang asalnya ga lengkap menjadi lengkap menggunakan setter
mhs1.nama = "Muhammad Azmi Syahlaa Nugraha";
console.log("\n NAMA SETELAH DIPERBARUI");
console.log("Nama Lengkap:", mhs1.nama);

mhs1.kampus = "Sekolah Tinggi Teknologi Cipasung";
console.log("\n KAMPUS BARU YANG SESUAI DATA MAHASISWA 1");
console.log("kampus:", mhs1.kampus);

console.log("---------------------------------------------------");
console.log("INI ADALAH DATA TERBARU UNTUK MAHASISWA 1");




