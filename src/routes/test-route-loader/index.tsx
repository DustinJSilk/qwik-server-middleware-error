import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useTestLoader = routeLoader$(() => {
  throw new Error("A new routeLoader$ error has been thrown");
});

export default component$(() => {
  useTestLoader();
  return <div></div>;
});
