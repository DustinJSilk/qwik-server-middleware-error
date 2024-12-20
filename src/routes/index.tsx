import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <div>
        <Link href="/test-route-loader" prefetch={false}>
          Test routeLoader$ middleware
        </Link>
      </div>
      <div>
        <Link href="/test-server" prefetch={false}>
          Test server$ middleware
        </Link>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
