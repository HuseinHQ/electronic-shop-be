  <h1>Sistem Basis Data Toko Elektronik</h1>

  <h2>Deskripsi Umum</h2>
  <p>Sistem ini adalah aplikasi basis data untuk mengelola Toko Elektronik, di mana pelanggan bisa membeli berbagai jenis barang elektronik seperti televisi, kulkas, laptop, dan lainnya. Sistem ini akan mencakup data karyawan, data barang, transaksi pembelian, laporan transaksi, serta kategori barang.</p>

  <h2>Detail Sistem</h2>
  <ol>
    <li>Data Karyawan:
      <ul>
        <li>Menyimpan informasi karyawan seperti ID Karyawan, Nama, Posisi, Tanggal Mulai Kerja, dan Nomor Telepon.</li>
        <li>Karyawan akan bertanggung jawab untuk menangani transaksi, mengelola data barang, dan menghasilkan laporan.</li>
      </ul>
    </li>
    <li>Data Barang:
      <ul>
        <li>Menyimpan informasi barang elektronik yang dijual, termasuk ID Barang, Nama Barang, Kategori (TV, Laptop, Kulkas, dll.), Harga, dan Stok.</li>
        <li>Data barang akan dikelompokkan berdasarkan kategori.</li>
      </ul>
    </li>
    <li>Jenis / Kategori:
      <ul>
        <li>Jenis barang elektronik yang tersedia, seperti TV, Laptop, Smartphone, Kulkas, AC, dll.</li>
        <li>Kategori ini berguna untuk menyusun laporan dan mempermudah pencarian barang.</li>
      </ul>
    </li>
    <li>Transaksi:
      <ul>
        <li>Sistem mendukung transaksi many-to-many, di mana satu transaksi bisa melibatkan beberapa barang berbeda, dan satu barang bisa terlibat dalam beberapa transaksi.</li>
        <li>Transaksi akan mencatat ID Transaksi, Tanggal Transaksi, ID Karyawan yang melayani, dan daftar barang yang dibeli dengan jumlah masing-masing.</li>
      </ul>
    </li>
    <li>Laporan Transaksi:
      <ul>
        <li>Menyediakan menu laporan yang dapat menampilkan transaksi berdasarkan filter tanggal, bulan, atau tahun.</li>
        <li>Laporan ini bisa mencakup total transaksi yang terjadi dalam periode tertentu, total penjualan per kategori, dan barang terlaris.</li>
      </ul>
    </li>
    <li>Fitur-Fitur Utama:
      <ul>
        <li>Tambah/Edit Data Barang: Menambahkan data barang baru, mengedit data yang ada, atau menghapus barang yang sudah tidak tersedia.</li>
        <li>Tambah/Edit Data Karyawan: Mengelola informasi karyawan yang bekerja di toko.</li>
        <li>Transaksi Pembelian: Mengelola proses transaksi, dari pemilihan barang hingga pembayaran.</li>
        <li>Laporan Penjualan: Menyediakan laporan yang terperinci mengenai penjualan berdasarkan periode waktu, barang, dan kategori.</li>
      </ul>
    </li>
  </ol>

  <h2>Contoh Struktur Basis Data</h2>
  <ul>
    <li>Tabel Karyawan: id_karyawan, nama, posisi, tanggal_mulai, nomor_telepon</li>
    <li>Tabel Barang: id_barang, nama_barang, kategori, harga, stok</li>
    <li>Tabel Kategori: id_kategori, nama_kategori</li>
    <li>Tabel Transaksi: id_transaksi, tanggal, id_karyawan</li>
    <li>Tabel Detail Transaksi (Many-to-Many): id_transaksi, id_barang, jumlah_barang</li>
    <li>Tabel Laporan Transaksi: Menyimpan data laporan yang bisa di-generate berdasarkan filter tanggal, bulan, atau tahun.</li>
  </ul>

  <h2>Alur Contoh Transaksi:</h2>
  <ol>
    <li>Karyawan mencatat transaksi saat pelanggan membeli beberapa barang elektronik.</li>
    <li>Karyawan memilih barang yang akan dibeli oleh pelanggan dari daftar barang yang tersedia.</li>
    <li>Setiap transaksi akan tercatat di tabel Transaksi dengan rincian barang di tabel Detail Transaksi.</li>
    <li>Data transaksi dapat ditarik untuk laporan berdasarkan periode yang diinginkan, misalnya laporan bulanan untuk melihat total penjualan.</li>
  </ol>
