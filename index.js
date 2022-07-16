import useProxy from "rocket-booster";

addEventListener("fetch", (event) => {
  const config = {
    upstream: {
      domain: "nhentai.net",
      protocol: "https",
      port: "443",
    },
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  };
  const proxy = useProxy();
  proxy.use("/", config);

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
