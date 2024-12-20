import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

export const server = server$(() => {
  throw new Error("A new server$ error has been thrown");
});

export default component$(() => {
  useVisibleTask$(() => server());

  return <div></div>;
});
