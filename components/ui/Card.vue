<script setup lang="ts">
interface Classes {
  wrapper?: string
  header?: string
  body?: string
  footer?: string
}

withDefaults(
  defineProps<{
    title?: string
    body?: string
    bordered?: boolean
    classes?: Classes
    hideHeader?: boolean
    hideFooter?: boolean
    headerClass?: string
    bodyClass?: string
    footerClass?: string
  }>(),
  {
    bordered: false,
    classes: () => ({
      wrapper: "border border-gray-200 rounded-lg bg-white",
      header: "",
      body: "",
      footer: "",
    }),
  },
);
</script>

<template>
  <div :class="classes.wrapper">
    <slot
      name="headerWrapper"
      :title="title"
      :bordered="bordered"
      :classes="[classes.header, headerClass]"
      :hide-header="hideHeader"
    >
      <UiCardHeader
        v-if="!hideHeader"
        :title="title"
        :bordered="bordered"
        :class="[classes.header, headerClass]"
      >
        <slot name="header" />
      </UiCardHeader>
    </slot>
    <UiCardBody :class="[classes.body, bodyClass]" :bordered="bordered">
      <slot :classes="[classes.body, bodyClass]" :bordered="bordered" />
    </UiCardBody>
    <slot
      name="footerWrapper"
      :classes="[classes.footer, footerClass]"
      :bordered="bordered"
      :hide-footer="hideFooter"
    >
      <UiCardFooter
        v-if="!hideFooter"
        :class="[classes.footer, footerClass]"
        :bordered="bordered"
      >
        <slot name="footer" />
      </UiCardFooter>
    </slot>
  </div>
</template>
