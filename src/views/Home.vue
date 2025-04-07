<template>
  <main class="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white text-gray-900 flex items-center justify-center px-4 sm:px-6 md:px-8 py-16">
    <div class="w-full max-w-4xl bg-white shadow-2xl rounded-3xl p-6 sm:p-12 md:p-16 text-center space-y-10 transition-all duration-500">
      <!-- Foto Profil -->
      <div class="flex flex-col items-center">
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHcWi4bkm3TVQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726451456099?e=1749081600&v=beta&t=SpFGAlT8KLnYSktKQgBQeYMEPc4vIS9OGfu1EAwSzLU"
          alt="Abdul Aziz"
          class="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full border-4 border-white shadow-lg"
        />
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tight">Abdul Aziz</h1>
        <p class="text-gray-600 text-base sm:text-lg md:text-xl mt-2 underline text-wrap break-words">Cloud Computing · Big Data · Data Enthusiast</p>
      </div>

      <!-- Deskripsi -->
      <p class="text-gray-600 text-sm sm:text-md md:text-base leading-relaxed max-w-3xl mx-auto break-words text-wrap">
        Saya Abdul Aziz, seorang mahasiswa Informatika yang sedang mendalami dunia
        <span class="font-semibold text-gray-900 underline decoration-indigo-500">Cloud Computing</span>, <span class="font-semibold text-gray-900 underline decoration-blue-500"> Data Science</span>, dan
        <span class="font-semibold text-gray-900 underline decoration-red-500">Machine Learning</span>. Saya memiliki semangat tinggi dalam mengeksplorasi solusi teknologi yang berdampak dan terbuka terhadap berbagai bentuk kolaborasi.
      </p>

      <!-- Informasi Tambahan -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left mt-8">
        <!-- Tentang Saya -->
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-indigo-600 flex items-center gap-2"><i class="fas fa-user"></i> Tentang Saya</h2>
          <div class="mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
            <p><i class="fas fa-envelope text-indigo-500 mr-2"></i><span class="font-medium">Email:</span> abdulaziz77771a@gmail.com</p>
            <p>
              <i class="fab fa-linkedin text-indigo-500 mr-2"></i><span class="font-medium">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/abdul-aziz-5ab0a920a/" target="_blank" class="text-blue-600 hover:underline break-all"> Klik Disini</a>
            </p>
          </div>
          <p class="mt-3 italic text-gray-600 text-sm sm:text-base">
            Saya berharap dapat bekerjasama dalam proyek-proyek teknologi, data, atau pengembangan sistem. Saya juga terbuka untuk peluang magang, freelance, maupun kolaborasi lainnya.
          </p>
        </div>

        <!-- Pendidikan -->
        <div>
          <h2 class="text-lg sm:text-xl font-bold text-indigo-600 flex items-center gap-2"><i class="fas fa-user-graduate"></i> Pendidikan</h2>
          <div class="mt-4 space-y-4 text-gray-700 text-sm sm:text-base">
            <!-- Kampus -->
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="font-semibold text-gray-900">Universitas Sultan Ageng Tirtayasa</h3>
              <p>S1 Informatika</p>
              <p class="italic text-gray-500">2022 – 2026 (Expected)</p>
              <p>IPK: 3.84 / 4.00</p>
            </div>

            <!-- Pacmann -->
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="font-semibold text-gray-900">Pacmann</h3>
              <p>Data Science Track</p>
              <p class="italic text-gray-500">April 2025 – April 2026</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <router-link to="/certificate" class="flex-1 min-w-[150px] text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all text-sm sm:text-base"> 🎓 Sertifikasi </router-link>
        <router-link to="/projects" class="flex-1 min-w-[150px] text-center px-5 sm:px-6 py-2.5 sm:py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-md transition-all text-sm sm:text-base">
          🧠 Project | Portofolio
        </router-link>
      </div>

      <!-- Media Sosial -->
      <div class="flex justify-center gap-6 sm:gap-8 text-gray-500 text-xl sm:text-2xl mt-10">
        <a href="https://www.linkedin.com/in/abdul-aziz-5ab0a920a/" target="_blank" class="hover:text-blue-600 transition">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/kilyfa" target="_blank" class="hover:text-gray-900 transition">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  </main>
</template>
