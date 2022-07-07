import useProxy from "rocket-booster";

addEventListener("fetch", (event) => {
  const config = {
    upstream: {
      domain: "nhentai.net",
      protocol: "https",
      port: "443",
    },
    optimization: {
      mirage: true,
    },
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
    rewrite: {
      cookie: true,
    },
  };
  const proxy = useProxy();
  proxy.use("/", config);

  const response = proxy.apply(event.request);
  event.respondWith(response);
});
