<template>
  <div class="min-h-screen bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto">
    <div v-if="project">
      <router-link to="/projects" class="text-sm text-blue-500 hover:underline mb-6 inline-block"> ← Back to List Projects </router-link>

      <!-- Judul dan Deskripsi -->
      <h1 class="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {{ project.title }}
      </h1>
      <p class="text-gray-600 leading-relaxed text-base">
        {{ project.description }}
      </p>

      <!-- Image or PDF Slider -->
      <Swiper class="rounded-2xl shadow-lg mt-8" :space-between="20" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :loop="true" :modules="[Autoplay, Pagination]">
        <SwiperSlide v-for="(file, index) in project.files" :key="index" class="bg-gray-100 flex items-center justify-center overflow-hidden">
          <div v-if="file.endsWith('.pdf')" class="w-full">
            <div class="relative w-full" style="padding-top: 140%">
              <iframe :src="file" class="absolute top-0 left-0 w-full h-full rounded-xl" frameborder="0"></iframe>
            </div>
            <h3 class="text-lg font-medium text-gray-700 mt-6 flex items-center gap-2 pl-3 pb-3">Silahkan gunakan mode desktop jika tidak muncul PDF</h3>
          </div>

          <img v-else :src="file" class="object-cover w-full h-auto rounded-xl" alt="Project Media" />
        </SwiperSlide>
      </Swiper>

      <!-- Conditional Link -->
      <div v-if="project.slug === 'kistore'">
        <h3 class="text-lg font-medium text-gray-700 mt-6 flex items-center gap-2">
          🌐 Link Website:
          <a href="https://kistore.id" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>
      <div v-else-if="project.slug === 'bulbul'">
        <h3 class="text-lg font-medium text-gray-700 mt-6 flex items-center gap-2">
          🌐 Link Website:
          <a href="https://bulbultopup.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>
      <div v-else-if="project.slug === 'wallpaper-app'">
        <h3 class="text-lg font-medium text-gray-700 mt-6 flex items-center gap-2">
          <!-- Ikon GitHub -->
          <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.81 1.304 3.495.997.108-.775.42-1.304.762-1.604-2.665-.304-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.922.432.372.816 1.102.816 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              clip-rule="evenodd"
            />
          </svg>

          Link GitHub:
          <a href="https://github.com/RidhoAbaaz/travelmate" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>
      <div v-else-if="project.slug === 'wallpaper-app'">
        <h3 class="text-lg font-medium text-gray-700 mt-6 flex items-center gap-2">
          <!-- Ikon GitHub -->
          <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill-rule="evenodd"
              d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.726-4.033-1.61-4.033-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.81 1.304 3.495.997.108-.775.42-1.304.762-1.604-2.665-.304-5.466-1.335-5.466-5.933 0-1.31.467-2.38 1.236-3.22-.123-.303-.536-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 013.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.874.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.625-5.475 5.922.432.372.816 1.102.816 2.222v3.293c0 .32.216.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"
              clip-rule="evenodd"
            />
          </svg>

          Link GitHub:
          <a href="https://github.com/kilyfa/FE_WallpaperApp_UAS" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>
    </div>
    <div v-else>
      <h1 class="text-2xl font-semibold mb-2">Proyek tidak ditemukan</h1>
      <p class="text-gray-500">Silakan periksa kembali URL atau kembali ke halaman utama.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Ambil slug dari URL
const route = useRoute();

// Data proyek
const projectData = [
  {
    slug: "strategy-investasi",
    title: "Strategy Investasi Cryptocurrency",
    description: "Menganalisis strategi terbaik dalam investasi cryptocurrency berdasarkan data historis dari 10 aset teratas di CoinMarketCap.",
    files: ["../pdf/Strategy-Investasi.pdf"],
  },
  {
    slug: "big-data-kimia-farma",
    title: "Performa Penjualan Kimia Farma",
    description: "Analisis mendalam terhadap data penjualan Kimia Farma untuk mengevaluasi tren dan kinerja bisnis.",
    files: ["../pdf/kimia-farma.pdf"],
  },
  {
    slug: "wallpaper-app",
    title: "Wallpaper Application",
    description: "Wallpaper App is an app that provides a variety of high-quality background images to personalize your device's screen. Find exciting selections from nature, art, and many other categories in one easy-to-use app.",
    files: [
      "https://media.licdn.com/dms/image/v2/D562DAQFyGhD8rj1zaw/profile-treasury-image-shrink_1920_1920/B56ZWyle3DHsAc-/0/1742457926748?e=1744484400&v=beta&t=H_xUWu_hdnvRAmHtFU9punIlAf-bc69QNCa6yKh35BY",
      "https://media.licdn.com/dms/image/v2/D562DAQHALqrYM0qscQ/profile-treasury-image-shrink_1280_1280/B56ZWyldBDGsAQ-/0/1742457918350?e=1744484400&v=beta&t=iYfrHye03LQmAyn-V4F5ze7BUh7gFqE2W_loV7FMJDU",
      "https://media.licdn.com/dms/image/v2/D562DAQELLFQYqK2nSg/profile-treasury-image-shrink_1280_1280/B56ZWylak2GoAQ-/0/1742457908332?e=1744484400&v=beta&t=685IdfRfHN4SjBAmsSxV4vtDrJHuOmbJQHHN2AxN5fk",
    ],
  },
  {
    slug: "travel-mate",
    title: "TravelMate - Your Journer, Perfectly Planned",
    description: "Travel Mate is an app that provides personalized travel recommendations in Indonesia using machine learning, helping travelers plan trips with tailored suggestions, notifications, and weather updates.",
    files: ["https://github.com/RidhoAbaaz/travelmate/blob/main/Mockup/banner.png?raw=true"],
  },
  {
    slug: "otomatisasi-backup-cloud",
    title: "Otomatisasi Backup Cloud",
    description: "Menerapkan sistem backup otomatis menggunakan cloud storage dan serverless function untuk efisiensi dan keamanan data.",
    files: ["https://source.unsplash.com/800x600/?serverless", "https://source.unsplash.com/800x600/?backup"],
  },
  {
    slug: "kistore",
    title: "Kilyfa Store | Bisnis Pribadi",
    description: "Merancang website e-commerce berbasis Laravel untuk penjualan produk digital dan top-up game, lengkap dengan sistem admin untuk pengelolaan pesanan dan data secara real-time.",
    files: ["../kistore/Kistore (4).png", "../kistore/Kistore (3).png", "../kistore/Kistore (2).png", "../kistore/Kistore (1).png"],
  },
  {
    slug: "bulbul",
    title: "Bulbul Topup | Freelance",
    description: "Merancang website e-commerce berbasis Laravel untuk penjualan produk digital dan top-up game, lengkap dengan sistem admin untuk pengelolaan pesanan dan data secara real-time.",
    files: [
      "https://media.licdn.com/dms/image/v2/D562DAQGDryPki7f4JQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722882916285?e=1744480800&v=beta&t=PckgWFkUl0NdxbuenWeiZgOcJYLixBG-k5qHDlcdTsM",
      "https://media.licdn.com/dms/image/v2/D562DAQHy7_l11co03A/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722882935804?e=1744480800&v=beta&t=rcRgLwTTDXJ9Z3Qgy37lPxkg3fwb1Ir933O7hl9eCzU",
      "https://media.licdn.com/dms/image/v2/D562DAQGNwqEPAxrN3w/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1722882946910?e=1744480800&v=beta&t=yJXx8dxkSYTIdM0wRtOhwP3t6_c4KzJxCudzTvffGo4",
    ],
  },
  {
    slug: "lahiran-nyaman",
    title: "Lahiran Nyaman | Freelance",
    description:
      "Membangun website profil klinik Lahiran Nyaman secara end-to-end sebagai fullstack developer. Website ini dirancang responsif dan informatif untuk memperkenalkan layanan klinik kepada calon pasien, menampilkan informasi dokter, jadwal layanan, lokasi, serta kontak.",
    files: [
      "https://media.licdn.com/dms/image/v2/D562DAQGvwVgnfJQjpQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722368522050?e=1744477200&v=beta&t=BoSh0x6UmxX66Io8ciDnCtHX_1v6QE4eg_8Jsg1UHSI",
      "https://media.licdn.com/dms/image/v2/D562DAQFeXvocP56DuA/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722368504881?e=1744477200&v=beta&t=uPXBGWKWlVXpxguhFBTFPW9xtK6BlCILhjrxtOIukHI",
      "https://media.licdn.com/dms/image/v2/D562DAQEJasugaAPOhw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722368489706?e=1744477200&v=beta&t=y3t36MVDNO1UeN6pv3Ky2yvCagU5wVoNqy3Cx_pxJFA",
      "https://media.licdn.com/dms/image/v2/D562DAQHLEn7Ys0fJxQ/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722368465802?e=1744477200&v=beta&t=S36djz0Zi6GMtW0ZNMgdh2nKbH0pr1knIWcRk345-vE",
    ],
  },
  {
    slug: "analisis-sentimen",
    title: "Analisis Sentimen",
    description: "Menerapkan NLP untuk mengkaji sentimen pengguna dari data media sosial, menggunakan Python dan pustaka analitik seperti pandas dan scikit-learn.",
    files: ["https://source.unsplash.com/800x600/?nlp", "https://source.unsplash.com/800x600/?sentiment"],
  },
];

// Ambil proyek berdasarkan slug
const project = computed(() => projectData.find((p) => p.slug === route.params.slug));
</script>
