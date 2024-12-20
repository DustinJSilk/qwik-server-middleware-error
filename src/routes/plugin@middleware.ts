import { type RequestHandler } from "@builder.io/qwik-city";

export const onRequest: RequestHandler = async ({ url, next }) => {
  const isServer = url.search.startsWith("?qfunc=");

  if (isServer) {
    console.log("server$ middleware triggerd");
  } else {
    console.log("routeLoader$ middleware triggerd");
  }

  try {
    await next();
  } catch (err) {
    if (isServer) {
      // This never runs
      console.log("caught server$ error");
    } else {
      console.log("caught routeLoader$ error");
    }
  }
};
