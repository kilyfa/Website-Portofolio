<template>
  <section class="w-full max-w-6xl mx-auto px-6 py-16 min-h-screen text-gray-800 bg-gradient-to-br from-gray-50 to-white">
    <!-- Back to Home -->
    <router-link to="/" class="text-sm text-blue-600 hover:underline mb-6 inline-block">← Back to Home</router-link>

    <!-- Judul Utama -->
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Portofolio</h2>

    <!-- Data Intelligence -->
    <div class="mb-20">
      <h3 class="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-300 mb-8 flex items-center gap-2"><i class="fas fa-database text-indigo-600"></i> Data Intelligence</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link to="/project/strategy-investasi" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Strategi Investasi</h4>
          <p class="text-sm text-gray-600">Analisis strategi optimal dalam investasi kripto berdasarkan data historis 10 aset CoinMarketCap.</p>
        </router-link>

        <router-link to="/project/big-data-kimia-farma" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Performa Penjualan Kimia Farma</h4>
          <p class="text-sm text-gray-600">Evaluasi tren dan kinerja bisnis berdasarkan data penjualan Kimia Farma.</p>
        </router-link>
      </div>
    </div>

    <!-- Web & Mobile Developer -->
    <div>
      <h3 class="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-300 mb-8 flex items-center gap-2"><i class="fas fa-laptop-code text-indigo-600"></i> Web & Mobile Development</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link to="/project/kistore" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Kilyfa Store</h4>
          <p class="text-sm text-gray-600">E-commerce Laravel untuk produk digital & top-up dengan admin panel lengkap.</p>
        </router-link>

        <router-link to="/project/bulbul" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Bulbul Topup</h4>
          <p class="text-sm text-gray-600">Website top-up berbasis Laravel dengan sistem pembayaran otomatis & manajemen user.</p>
        </router-link>

        <router-link to="/project/lahiran-nyaman" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Lahiran Nyaman</h4>
          <p class="text-sm text-gray-600">Website profil klinik dengan informasi layanan, jadwal, dan dokter secara informatif & responsif.</p>
        </router-link>

        <router-link to="/project/wallpaper-app" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">Wallpaper Application</h4>
          <p class="text-sm text-gray-600">Aplikasi penyedia wallpaper HD dengan desain intuitif dan performa ringan.</p>
        </router-link>
      </div>
    </div>
  </section>
</template>
