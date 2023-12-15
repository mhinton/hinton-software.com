<script setup lang="ts">
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const { open = false } = defineProps<{ open: boolean }>();
const isOpenProp = computed(() => open);
watch(isOpenProp, (newValue) => {
  if (newValue === true) {
    openModal();
  } else {
    closeModal();
  }
});

const emit = defineEmits<{
  (event: "close"): void;
}>();

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
  emit("close");
}
function openModal() {
  isOpen.value = true;
}
</script>

<template>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/70">
          <!-- This div is the overlay -->
        </div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle
                as="h3"
                class="text-xl font-semibold leading-6 text-gray-900"
              >
                Contact Me
              </DialogTitle>
              <div class="mt-2">
                <form>
                  <div class="my-2">
                    <div><label for="name">Name (optional)</label></div>
                    <div>
                      <input
                        id="contact-name"
                        type="text"
                        name="name"
                        class="w-full mb-2 border border-gray-400 focus:outline-none rounded-md focus-visible:ring-2 focus:border-none focus-visible:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div class="my-2">
                    <div><label for="email">Email</label></div>
                    <div>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        class="w-full mb-2 border border-gray-400 focus:border-none rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div class="my-2">
                    <div>
                      <label for="description"
                        >Brief project description (optional)</label
                      >
                    </div>
                    <div>
                      <textarea
                        id="contact-description"
                        name="description"
                        class="w-full mb-2 border border-gray-400 focus:border-none rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-zodiac-950 hover:bg-blue-zodiac-600 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Submit
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<style scoped></style>
