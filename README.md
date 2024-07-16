<div align="center">
  <img src="./image/logo.svg" alt="Split Words Logo" width="220"/>
  <h1>Split Words</h1>
  <p><a href="/docs/README-EN.md">English</a></p>
  <p><a href="https://github.com/BarudakRosul/split-words/issues/new?assignees=&labels=bug&projects=&template=bug_report.yml">Laporkan Bug</a> · <a href="https://github.com/BarudakRosul/split-words/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yml">Ajukan Fitur</a></p>
  <p>
    <a href="https://github.com/BarudakRosul/split-words/actions/workflows/test.yml"><img src="https://github.com/BarudakRosul/split-words/actions/workflows/test.yml/badge.svg" alt="Testing"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/node/v/%40barudakrosul%2Fsplit-words" alt="Node Engines"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/npm/v/%40barudakrosul%2Fsplit-words" alt="NPM Version"/></a>
    <a href="/LICENSE"><img src="https://img.shields.io/github/license/BarudakRosul/split-words" alt="License"/></a>
    <a href="https://npmjs.com/package/@barudakrosul/split-words"><img src="https://img.shields.io/npm/d18m/%40barudakrosul%2Fsplit-words" alt="Downloads"/></a>
    <a href="https://github.com/BarudakRosul/split-words/stargazers"><img src="https://img.shields.io/github/stars/BarudakRosul/split-words?style=flat" alt="Stars"/></a>
    <a href="https://github.com/BarudakRosul/split-words/network/members"><img src="https://img.shields.io/github/forks/BarudakRosul/split-words?style=flat" alt="Forks"/></a>
    <a href="https://github.com/BarudakRosul/split-words/issues"><img src="https://img.shields.io/github/issues/BarudakRosul/split-words" alt="Issues"/></a>
  </p>
  <a href="https://techforpalestine.org/learn-more"><img src="https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/banner-support.svg" width="100%" alt="Support Palestine"/></a>
</div>

## Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Fitur](#fitur)
3. [Instalasi](#instalasi)
4. [Penggunaan](#penggunaan)
5. [Berkontribusi](#berkontribusi)
6. [Lisensi](#lisensi)
7. [Penghargaan](#penghargaan)
8. [Donasi](#donasi)
9. [Catatan Perubahan](#catatan-perubahan)

## Pendahuluan

Split Words adalah sebuah ekstensi JavaScript yang memisahkan string menjadi array berdasarkan kata, dengan opsi untuk menyertakan atau menghapus karakter pemisah. Ini memungkinkan pemisahan berdasarkan spasi dan tanda hubung, dengan pilihan untuk mempertahankan spasi dalam hasil.

## Fitur

Split Words menawarkan fitur-fitur berikut:

- Memisahkan string menjadi array berdasarkan kata.
- Opsi untuk menyertakan atau menghilangkan karakter spasi dalam hasil.
- Opsi untuk memisahkan kata berdasarkan tanda hubung.
- Dapat di integrasikan ke dalam kode TypeScript.

## Instalasi

Untuk menginstal Split Words secara lokal, ikuti langkah instalasi ini:

```shell
npm install @barudakrosul/split-words
```

## Penggunaan

Untuk memulai menggunakan Split Words, import modulnya terlebuh dahulu:

**1\. CommonJS**
```javascript
require("@barudakrosul/split-words");
```

**2\. ESM (ECMAScript Modules)**
```javascript
import "@barudakrosul/split-words";
```

**3\. TypeScript**
```typescript
import "@barudakrosul/split-words";
```

Contoh penggunaan:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords());

// Result:
// [
//   'Hello,',  'world!',
//   'This',    'is',
//   'an',      'example-',
//   'string.'
// ]
```

Contoh jika opsi `includewhitespace` di setel ke `true`:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords(true));

// Result:
// [
//   'Hello,',   ' ',
//   'world!',   ' ',
//   'This',     ' ',
//   'is',       ' ',
//   'an',       ' ',
//   'example-', 'string.'
// ]
```

Contoh jika opsi `breakonhyphens` di setel ke `false`:

```javascript
let text = "Hello, world! This is an example-string.";
console.log(text.splitWords(false, false));

// Result:
// [
//   'Hello,', 'world!', 'This', 'is',
//   'an', 'example-string.'
// ]
```

## Berkontribusi

Kontribusi pada Split Words sangat dihargai! Baik melaporkan bug, menyarankan fitur baru, atau berkontribusi pada perbaikan kode.

## Lisensi

Split Words dilisensikan di bawah Lisensi Apache-2.0 - lihat berkas [LICENSE](/LICENSE) untuk detailnya.

## Penghargaan

Split Words menghargai dukungan dan kontribusi dari individu dan proyek sumber terbuka berikut:

- [@Achixz](https://github.com/Achixz) - Pengembang utama dan pencipta aplikasi.
- Komunitas sumber terbuka - Untuk kontribusi berharga pada alat dan perpustakaan yang digunakan dalam proyek ini.

## Donasi

Kami sangat menghargai dukungan Anda untuk terus mengembangkan proyek ini. Jika Anda merasa proyek ini bermanfaat, Anda dapat mendukung kami dengan donasi:

[![Ko-fi](https://img.shields.io/badge/Ko%e2%80%91fi-donate-7480ff?logo=ko-fi&logoColor=cyan)](https://ko-fi.com/barudakrosul)
[![Trakteer](https://custom-icon-badges.demolab.com/badge/Trakteer-donate-red?logo=trakteerid&logoColor=pink)](https://trakteer.id/barudakrosul)

Setiap donasi, berapapun jumlahnya, sangat berarti bagi kami. Terima kasih atas dukungan Anda! ❤️

## Catatan Perubahan

Terus ikuti perubahan dan pembaruan terbaru Split Words dengan mengacu ke [Catatan Perubahan](https://github.com/BarudakRosul/split-words/releases).

Terima kasih telah memilih Split Words! Kami bertujuan untuk memberikan solusi yang mudah untuk mengubah string ke dalam array berdasarkan kata.

[![Stand with Palestine](https://raw.githubusercontent.com/Safouene1/support-palestine-banner/master/StandWithPalestine.svg)](https://techforpalestine.org/learn-more)