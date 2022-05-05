import lume from "lume/mod.ts";
import bundler from "lume/plugins/bundler.ts";

const site = lume();

site.use(
  bundler({
    extensions: [".tsx", ".ts"], // Transpile all .tsx and .ts files to typescript
  })
);

export default site;
