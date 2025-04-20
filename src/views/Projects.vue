<template>
  <section class="w-full max-w-6xl mx-auto px-6 py-16 min-h-screen text-gray-800 bg-gradient-to-br from-gray-50 to-white">
    <!-- Back to Home -->
    <router-link to="/" class="text-sm text-blue-600 hover:underline mb-6 inline-block">← Back to Home</router-link>

    <!-- Judul Utama -->
    <h2 class="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">Portofolio</h2>

    <!-- Data Intelligence -->
    <div class="mb-20">
      <h3 class="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-300 mb-8 flex items-center gap-2"><i class="fas fa-database text-indigo-600"></i> Data Intelligence</h3>
      <div v-if="dataIntelligence.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link
          v-for="project in dataIntelligence"
          :key="project.slug"
          :to="`/project/${project.slug}`"
          class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block"
        >
          <h4 class="text-xl font-bold mb-2 text-gray-900">{{ project.title }}</h4>
          <p class="text-sm text-gray-600">{{ project.description }}</p>
        </router-link>
      </div>
      <div v-else class="text-gray-500">Belum ada proyek pada kategori ini.</div>
    </div>

    <!-- Web & Mobile Developer -->
    <div>
      <h3 class="text-2xl font-semibold text-gray-700 border-b-2 pb-2 border-gray-300 mb-8 flex items-center gap-2"><i class="fas fa-laptop-code text-indigo-600"></i> Web & Mobile Development</h3>
      <div v-if="webMobile.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <router-link v-for="project in webMobile" :key="project.slug" :to="`/project/${project.slug}`" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300 hover:scale-[1.02] block">
          <h4 class="text-xl font-bold mb-2 text-gray-900">{{ project.title }}</h4>
          <p class="text-sm text-gray-600">{{ project.description }}</p>
        </router-link>
      </div>
      <div v-else class="text-gray-500">Belum ada proyek pada kategori ini.</div>
    </div>

    <!-- Loading & Error -->
    <div v-if="loading" class="text-center mt-10 text-gray-400">Loading...</div>
    <div v-if="errorMsg" class="text-center mt-6 text-red-500">{{ errorMsg }}</div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase"; // Pastikan path-nya sesuai

const dataIntelligence = ref([]);
const webMobile = ref([]);
const loading = ref(true);
const errorMsg = ref("");

const fetchProjects = async () => {
  loading.value = true;
  errorMsg.value = "";

  const { data, error } = await supabase.from("projects").select("title, description, slug, category").order("created_at", { ascending: false });

  if (error) {
    errorMsg.value = "Gagal mengambil data proyek. Coba lagi nanti.";
    console.error("Supabase error:", error);
  } else {
    dataIntelligence.value = data.filter((p) => p.category === "data_intelligence");
    webMobile.value = data.filter((p) => p.category === "web_mobile_development");
    console.log("Data dari Supabase:", data);
  }

  loading.value = false;
};

onMounted(() => {
  fetchProjects();
});
</script>
