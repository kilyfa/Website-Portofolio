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
    </div>
  </section>
</template>

<script setup>
const certifications = [
  {
    title: "Python for Data Science and Machine Learning Bootcamp",
    organization: "Udemy",
    date: "Maret 2025",
    link: "https://drive.google.com/file/d/1hem4L1_eUZFHxhCknLBR0SmoBIIBEn6R/view?usp=sharing",
  },
  {
    title: "Google Cybersecurity Certificate",
    organization: "Google",
    date: "Januari 2025",
    link: "https://www.credly.com/badges/0580a4d3-d8e7-4f95-970e-2ce666c02c89/",
  },
  {
    title: "Introduction to Cloud and Artificial Intelligence Applications for Digital Business",
    organization: "Digital Talent Schoolarship",
    date: "Desember 2024",
    link: "https://drive.google.com/file/d/1iPKOA7IcI4jWzqOTEizfwmwsLVDfs4Id/view?usp=sharing",
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    organization: "Microsoft",
    date: "September 2024",
    credential: "75872783ABFBD42B",
    link: "https://learn.microsoft.com/en-us/users/abdulaziz-7781/credentials/75872783abfbd42b",
  },
  {
    title: "Content Strategy and Creation",
    organization: "Digital Talent Schoolarship",
    date: "Agustus 2024",
    link: "https://drive.google.com/file/d/1vxaDZTtS_wRjQIf22E_TUZWQG_7WXoZU/view?usp=sharing",
  },
  {
    title: "AWS Knowledge: Cloud Essentials",
    organization: "Amazone Web Services (AWS)",
    date: "Juli 2024",
    link: "https://www.credly.com/badges/4c0b049b-2874-4ab8-b9f0-9c6cfdd7f3e2/",
  },
  {
    title: "Cloud (Talent Scouting Academy)",
    organization: "Digital Talent Schoolarship",
    date: "Juli 2024",
    credential: "2007343840-44",
    link: "https://www.example.com/sertifikat/aws",
  },
  {
    title: "Oracle Cloud Infrastructure Foundations",
    organization: "Oracle",
    date: "May 2024",
    link: "https://drive.google.com/drive/folders/1rPTg_M8kZF5j4JsA4O6gn75Q1xTkiDNt?usp=sharing",
  },

  // Tambahkan sertifikasi lainnya di sini
];
</script>
