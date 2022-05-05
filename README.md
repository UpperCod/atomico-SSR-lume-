# Atomico SSR + Lume

Implementation exercise to support Atomico webcomponent SSR within Lume.

**Todo**

- [x] SSR
- [x] Hydration
- [ ] Fix [Error 1](#error-1)

## Error 1

Console error by the server, when resolving the asset url

```bash
Error: A page will overwrite another page. Use distinct `url` values to resolve the conflict.
- page: \components\atomico.ts
- previousPage: \components\atomico.ts
- destination: /components/atomico.js
    at Writer.savePage (https://deno.land/x/lume@v1.7.3/core/writer.ts:74:15)
    at async (https://deno.land/x/lume@v1.7.3/core/writer.ts:43:13)
    at async concurrent (https://deno.land/x/lume@v1.7.3/core/utils.ts:32:3)
    at async Writer.savePages (https://deno.land/x/lume@v1.7.3/core/writer.ts:40:5)
    at async Site.update (https://deno.land/x/lume@v1.7.3/core/site.ts:466:19)
    at async Events.dispatchEvent (https://deno.land/x/lume@v1.7.3/core/events.ts:49:11)
    at async callback (https://deno.land/x/lume@v1.7.3/core/watcher.ts:80:24)
```
