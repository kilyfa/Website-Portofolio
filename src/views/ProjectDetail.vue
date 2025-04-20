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

      <!-- Image or PDF Carousel -->
      <Swiper v-if="project.files && project.files.length" class="rounded-2xl shadow-lg mt-8" :space-between="20" :pagination="{ clickable: true }" :autoplay="{ delay: 3000 }" :loop="true" :modules="[Autoplay, Pagination]">
        <SwiperSlide v-for="(file, index) in project.files" :key="index" class="bg-gray-100 flex items-center justify-center overflow-hidden">
          <!-- Render PDF -->
          <div v-if="file.endsWith('.pdf')" class="w-full">
            <div class="relative w-full" style="padding-top: 140%">
              <iframe :src="file" class="absolute top-0 left-0 w-full h-full rounded-xl" frameborder="0"></iframe>
            </div>
            <p class="text-sm text-gray-500 mt-4 text-center">Gunakan mode desktop jika PDF tidak muncul dengan baik.</p>
          </div>

          <!-- Render Gambar -->
          <img v-else :src="file" class="object-contain max-h-[500px] w-full rounded-xl" alt="Project Media" />
        </SwiperSlide>
      </Swiper>

      <!-- Link Khusus Berdasarkan Slug -->
      <div v-if="project.slug === 'kistore'" class="mt-6">
        <h3 class="text-lg font-medium text-gray-700 flex items-center gap-2">
          🌐 Link Website:
          <a href="https://kistore.id" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>

      <div v-else-if="project.slug === 'bulbul'" class="mt-6">
        <h3 class="text-lg font-medium text-gray-700 flex items-center gap-2">
          🌐 Link Website:
          <a href="https://bulbultopup.com" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>

      <div v-else-if="project.slug === 'dashboard-visualization'" class="mt-6">
        <h3 class="text-lg font-medium text-gray-700 flex items-center gap-2">
          🌐 You can see more details at this link:
          <a href="https://public.tableau.com/app/profile/abdul.aziz8218/vizzes" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline hover:text-blue-800 transition"> Klik Di Sini </a>
        </h3>
      </div>

      <div v-else-if="project.slug === 'travel-mate'" class="mt-6">
        <h3 class="text-lg font-medium text-gray-700 flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
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
    </div>

    <!-- Error Handling -->
    <div v-else>
      <h1 class="text-2xl font-semibold mb-2">Proyek tidak ditemukan</h1>
      <p class="text-gray-500">Silakan periksa kembali URL atau kembali ke halaman utama.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { supabase } from "../supabase";

// Swiper
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const project = ref(null);
const loading = ref(true);
const errorMsg = ref("");

const route = useRoute();

const fetchProject = async () => {
  loading.value = true;
  errorMsg.value = "";

  const { data, error } = await supabase.from("projects").select("*").eq("slug", route.params.slug).single();

  if (error) {
    errorMsg.value = "Gagal mengambil data proyek. Coba lagi nanti.";
    console.error("Supabase error:", error);
  } else {
    project.value = data;
  }

  loading.value = false;
};

onMounted(() => {
  fetchProject();
});
</script>

<style scoped>
/* Tambahan jika diperlukan */
</style>
