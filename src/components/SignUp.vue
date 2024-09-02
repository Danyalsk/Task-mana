<template>
  <div class="flex flex-col h-screen w-screen items-center justify-center bg-black bg-opacity-1">
    <div class="flex flex-col items-center justify-center max-w-md mx-4 p-4">
      <div class="h-8 w-8 mb-9">
        <img src="@/assets/snowflake.png" alt="logo" />
      </div>
      <div class="text-white text-xl font-sans mb-8 text-center">Create An New Account</div>

      <div class="max-w-sm space-y-6 flex flex-col items-center">
        <input
          type="text"
          class="py-1.5 px-3 border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-custom-dark dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-700 dark:focus:ring-neutral-600 w-full"
          placeholder="Enter your email address"
          style="font-size: 0.75rem; width: 170%"
          v-model="email"
        />

        <input
          type="password"
          class="py-1.5 px-3 border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-custom-dark dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-700 dark:focus:ring-neutral-600 w-full"
          placeholder="Enter your password"
          style="font-size: 0.75rem; width: 170%"
          v-model="password"
        />
      </div>

      <button
        type="button"
        class="text-gray-900 bg-gray-100 focus:ring-4 font-medium rounded text-sm px-4 py-2 text-center mt-8 w-full max-w-xs"
        @click="handleLogin"
        style="width: 170px"
      >
        Create
      </button>

      <p
        @click="handleSignClick"
        class="text-white mt-4 text-sm cursor-pointer hover:underline"
        style="font-size: 11px"
      >
        Login
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import axios from 'axios'
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const router = useRouter()
const handleLogin = () => {
  axios
    .post('http://localhost:5050/api/auth/signup', {
      email: email.value,
      password: password.value
    })
    .then((response) => {
      const data = response.data
      console.log(data)
      localStorage.setItem('token', data.token)
      router.push({ name: 'home' })
    })
    .catch((error) => {
      const errorMessage = error.response?.data?.message || 'An error occurred'
      console.error(errorMessage)
      alert(errorMessage)
    })
}

const handleSignClick = () => {
  router.push({ name: 'signIn' })
}
</script>
