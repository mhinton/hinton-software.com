<script setup lang="ts">
const { open } = defineProps<{ open: boolean }>();
const emit = defineEmits<{
  close: []
}>();

const openState = ref(open);
function closeModal() {
  emit("close");
}

function submit() {
  closeModal();
}
</script>

<template>
  <div>
    <LandingModal :open="open" @close="closeModal">
      <form netlify name="contact">
        <div class="my-2">
          <div><label for="name">Name (optional)</label></div>
          <div>
            <input
              id="contact-name"
              type="text"
              name="name"
              class="form-input rounded-md w-full"
              autocomplete="off"
            >
          </div>
        </div>
        <div class="my-2">
          <div><label for="email">Email</label></div>
          <div>
            <input
              id="contact-email"
              type="email"
              name="email"
              class="form-input rounded-md w-full"
            >
          </div>
        </div>
        <div class="my-2">
          <div>
            <label for="description">Brief project description (optional)</label>
          </div>
          <div>
            <textarea
              id="contact-description"
              name="description"
              class="form-textarea rounded-md w-full"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            class="text-xl rounded-md mt-3 bg-secondary px-4 py-2 text-base font-semibold leading-7 tracking-wider text-white shadow-sm hover:bg-pomegranate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            @click="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </LandingModal>
  </div>
</template>

<style scoped></style>
