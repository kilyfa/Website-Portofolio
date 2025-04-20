<template>
  <section class="min-h-screen px-6 py-16 max-w-6xl mx-auto bg-gradient-to-br from-gray-50 to-white text-gray-800">
    <router-link to="/" class="text-sm text-blue-600 hover:underline mb-8 inline-block">← Back to Home</router-link>

    <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-14 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Sertifikasi</h1>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div v-for="(cert, index) in certifications" :key="index" class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between min-h-[250px] border border-gray-200">
        <div class="space-y-2">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-gray-900">{{ cert.title }}</h2>
          </div>
          <hr class="my-4 border-gray-200" />
          <p class="text-sm text-gray-600">{{ cert.organization }}</p>
          <p class="text-xs text-gray-500 italic">{{ cert.date }}</p>
          <p v-if="cert.credential" class="text-xs mb-6 text-gray-400">
            Credential: <span class="font-medium">{{ cert.credential }}</span>
          </p>
        </div>

        <!-- Tombol/link sertifikat -->
        <div>
          <a v-if="cert.link" :href="cert.link" target="_blank" class="inline-block text-sm text-indigo-600 hover:text-indigo-800 font-medium transition-colors"> 📄 Lihat Sertifikat → </a>
        </div>
      </div>
      <div v-if="loading" class="text-center text-gray-500">Memuat data sertifikasi...</div>
      <div v-if="errorMsg" class="text-center text-red-500">{{ errorMsg }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "../supabase"; // Pastikan path-nya sesuai
const certifications = ref([]);
const loading = ref(true);
const errorMsg = ref("");

const fetchCertifications = async () => {
  loading.value = true;
  errorMsg.value = "";

  const { data, error } = await supabase.from("certifications").select("*").order("created_at", { ascending: false });

  console.log("Data dari Supabase:", data);
  console.error("Error Supabase:", error);

  if (error) {
    errorMsg.value = "Gagal mengambil data sertifikasi. Coba lagi nanti.";
  } else {
    certifications.value = data;
  }

  loading.value = false;
};

onMounted(() => {
  fetchCertifications();
});
</script>
