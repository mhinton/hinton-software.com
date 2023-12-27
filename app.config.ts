import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/vue/24/outline";

export default defineAppConfig({
  title: "Matthew Hinton",
  description: "Business Solutions Development",
  navigation: [
    { title: "Home", to: "/" },
    // { title: 'Store', to: '/store' },
    { title: "Blog", to: "/blog" },
    // { title: 'Components', to: '/docs/components/autocomplete' },
    // {
    //   title: 'Examples',
    //   children: [
    //     {
    //       title: 'Forms',
    //       to: '/docs/forms',
    //     },
    //     {
    //       title: 'Swiper',
    //       to: '/docs/swiper',
    //     },
    //   ],
    // },
  ],
  features: [
    {
      name: "Nuxt 3",
      description:
        "The latest and greatest version of Nuxt.js, with a new file system based routing system and a new way to write your components.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Tailwind CSS",
      description:
        "A utility-first CSS framework packed with classes that can be composed to build any design, directly in your markup.",
      icon: LockClosedIcon,
    },
    {
      name: "Headless UI",
      description:
        "Completely unstyled, fully accessible UI components, designed to integrate beautifully with Tailwind CSS.",
      icon: ArrowPathIcon,
    },
    {
      name: "Built-in Components",
      description:
        "A collection of UI components built with Tailwind CSS and Headless UI, ready to be used in your projects.",
      icon: FingerPrintIcon,
    },
  ],
  feature: {
    title: "Services",
    subtitle:
      "Experience working with private and public sector clients to develop web based solutions.",
    description:
      "From backend data design to front-end user interface development. Working together to accelerate your business.",
    image:
      "https://tailwindui.com/img/component-images/dark-project-app-screenshot.png",
  },
  announcement: {
    enabled: true,
    message: "Nuxt Tailwind Kit is now available for Nuxt 3!",
    url: "/docs/getting-started/installation",
  },
  cta: {
    title: "You focus on what your organization needs to succeed",
    description:
      "We work together to implement digital solutions for your business.",
    links: [
      {
        title: "Contact Me",
        url: "/contact",
        type: "primary",
      },
      // {
      //   title: 'Learn More',
      //   url: '/docs/getting-started/installation',
      //   type: 'alt',
      //   arrow: true,
      // },
    ],
    // image: 'https://tailwindui.com/img/component-images/dark-project-app-screenshot.png',
    image: "cta-laptop.jpg",
  },
});
