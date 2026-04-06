# Angular Portfolio Template

Template portofolio modern, responsif, dan berperforma tinggi yang dibangun dengan **Angular**. Siap digunakan untuk memamerkan proyek, keahlian, dan pengalaman profesional Anda.

- Demo : https://nairha.nlfts.dev/
- Donate : https://saweria.co/nlfts

## 🚀 Quick Deploy

Gunakan tombol di bawah ini untuk menduplikasi repositori ini dan menayangkannya secara instan ke platform hosting favorit Anda:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/NLFTs/cv)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/NLFTs/cv)

---

## 🛠️ Persiapan Awal

Sebelum memulai, pastikan Anda telah menginstal perangkat lunak berikut di komputer Anda:

* [Node.js](https://nodejs.org/) (Versi LTS direkomendasikan)
* [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)

## 📖 Cara Penggunaan

### 1. Kloning Repositori
Jalankan perintah berikut di terminal Anda:
```bash
git clone [https://github.com/NLFTs/cv.git](https://github.com/NLFTs/cv.git)
cd cv
````

### 2\. Instal Dependensi

Instal semua paket yang diperlukan menggunakan npm:

```bash
npm install
```

### 3\. Jalankan di Lokal

Jalankan server pengembangan untuk melihat perubahan secara real-time:

```bash
ng serve
```

Buka browser dan akses `http://localhost:4200/`.

### 4\. Kustomisasi Data

Untuk mengubah isi portofolio (Nama, Proyek, Pengalaman), buka folder:
`src/app/app.ts` (atau sesuaikan dengan struktur folder tempat Anda menyimpan file JSON/konfigurasi data).

-----

## 🏗️ Cara Deploy Manual

### Ke Vercel (via CLI)

1.  Instal Vercel CLI: `npm i -g vercel`
2.  Jalankan perintah: `vercel`
3.  Ikuti instruksi di terminal.

### Ke Netlify (via CLI)

1.  Instal Netlify CLI: `npm i -g netlify-cli`
2.  Build proyek: `ng build`
3.  Jalankan perintah: `netlify deploy --dir=dist/cv`

-----

## 📂 Struktur Folder Utama

  * `src/app/components`: Berisi komponen UI (Header, Footer, Projects, dll).
  * `src/assets`: Berisi gambar, ikon, dan file statis lainnya.
  * `src/styles.scss`: Global styling dan tema warna.

## 📄 Lisensi

Proyek ini dilisensikan di bawah [FTs License](https://github.com/NLFTs/cv/blob/main/LICENSE).


Dibuat dengan ❤️ oleh [NLFTs](https://github.com/NLFTs)
