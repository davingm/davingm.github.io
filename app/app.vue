<template>
    <main class="bg-background text-white min-h-screen flex flex-col items-center justify-center p-4">
        <header class="space-y-6">
            <div class="flex items-center justify-between">
                <span class="text-xl font-semibold tracking-tight text-white">水野 愛</span>
            </div>
            <div class="space-y-4 max-w-xl">
                <p class="text-lg md:text-xl font-normal leading-relaxed text-neutral-200">
                    "Aku tidak berpikir kesalahan atau kegagalan adalah hal yang buruk. Karena pada akhirnya semua itu akan membantu dalam hal-hal yang terjadi selanjutnya!"
                </p>
                <div class="flex items-center gap-3 font-mono text-xs text-muted">
                    <span>Shenzhen, CN</span>
                    <span>/</span>
                    <!-- Menggunakan binding ke variabel formattedTime -->
                    <span>{{ formattedTime }}</span>
                </div>
            </div>
        </header>
    </main>
</template>

<script setup lang="ts">

// 1. Inisialisasi ref untuk menyimpan waktu saat ini
const currentTime = ref(new Date())
let timer: ReturnType<typeof setInterval> | null = null

// 2. Format waktu menjadi format WIB
const formattedTime = ref('')

const formatTimeClock = () => {
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'Asia/Jakarta', // Zona waktu WIB
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }
  
  const timeString = currentTime.value.toLocaleTimeString('id-ID', options)
  formattedTime.value = `${timeString} WIB`
}

// 3. Fungsi untuk memperbarui waktu setiap detik
const updateTime = () => {
  currentTime.value = new Date()
  formatTimeClock()
}

// Jalankan timer saat komponen dipasang (mounted)
onMounted(() => {
  formatTimeClock() // Jalankan sekali di awal agar tidak delay 1 detik
  
  timer = setInterval(() => {
    updateTime()
  }, 1000)
})

// Bersihkan timer saat komponen dihancurkan (unmounted)
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>