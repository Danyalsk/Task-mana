<template>
  <div class="flex flex-col h-screen w-screen items-center justify-center bg-black bg-opacity-1">
    <div class="h-8 w-8 mb-9">
      <img src="@/assets/snowflake.png" alt="logo" />
    </div>
    <div class="text-white text-xl font-sans mb-8">Create Your New Account</div>

    <div class="max-w-sm space-y-6 flex flex-col items-center">
      <input
        type="text"
        class="py-1.5 px-3 border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-custom-dark dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-700 dark:focus:ring-neutral-600"
        placeholder="Enter your email address"
        style="width: 165%; font-size: 0.75rem"
      />

      <input
        type="text"
        class="py-1.5 px-3 border border-gray-400 rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-custom-dark dark:border-neutral-700 dark:placeholder-neutral-700 dark:focus:ring-neutral-600"
        placeholder="Enter your password"
        style="width: 165%; font-size: 0.75rem"
      />
    </div>

    <button
      type="button"
      class="text-gray-900 bg-gray-100 focus:ring-4 font-medium rounded text-sm px-2 py-1.5 text-center items-center me-2 mt-8"
      style="width: 180px"
    >
      Sign Up
    </button>
  </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>
