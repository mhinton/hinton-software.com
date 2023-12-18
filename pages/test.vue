<script setup>
const isOpen = ref(false);

function setIsOpen(value) {
  isOpen.value = value;
}
function closeModal() {
  isOpen.value = false;
}
</script>

<template>
  <div class="container mx-auto pt-8">
    <div>
      <p class="mb-4">
        Veritatis est dolores ab autem. Itaque nihil quia. Qui labore voluptates dolorum et natus alias. Modi et placeat ut unde molestiae.
      </p>
      <p class="mb-4">
        Alias est aliquam ut tempore assumenda. Cum accusantium non officia itaque nostrum a. Nam veniam sequi officia quo assumenda. Iure tempora consequatur aut rem.
      </p>
      <p class="mb-4">
        Officia consequatur animi voluptatem autem porro tenetur nemo quidem est. Unde corrupti reprehenderit rerum iste. Facere fuga architecto deserunt nihil id nisi illo maiores.
      </p>
      <button class="bg-secondary text-white py-2 px-4" @click="setIsOpen(true)">
        Open
      </button>
    </div>
    <LandingContactMe :open="isOpen" @close="closeModal" />
  </div>
</template>

<style lang="scss" scoped>

</style>f
