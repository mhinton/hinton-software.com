import { describe, expect, it } from "vitest";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import LandingModal from "~/components/landing/Modal.vue";

describe("landing Modal", () => {
  // tests/components/SomeComponents.nuxt.spec.ts
  it("can mount some component", async () => {
    const component = await mountSuspended(LandingModal);
    expect(component.text()).toMatchInlineSnapshot(
      "Contact Me",
    );
  });
});

// // tests/App.nuxt.spec.ts
// it('can also mount an app', async () => {
//   const component = await mountSuspended(App, { route: '/test' })
//   expect(component.html()).toMatchInlineSnapshot(`
//     "<div>This is an auto-imported component</div>
//     <div> I am a global component </div>
//     <div>/</div>
//     <a href=\\"/test\\"> Test link </a>"
//   `)
// })
