import { DenonConfig } from "https://deno.land/x/denon@2.4.4/mod.ts";

const config: DenonConfig = {
  allow: [
    "run", // --allow-run
    "net", // --allow-net
    "read", // --allow-read
  ],
  unstable: true,
  scripts: {
    start: {
      cmd: "deno run server.ts",
      desc: "run my app.ts file",
    },
  },
};

export default config;
