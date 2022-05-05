import "./setup.ts";
import "./components/atomico.ts";
import { html } from "atomico";

export default (data, filters) => /*html*/ `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script type="importmap">
    {
      "imports": {
        "atomico/": "https://unpkg.com/atomico@1.54.5/",
        "atomico": "https://unpkg.com/atomico@1.54.5"
      }
    }
    </script>
</head> 
<body>
    <script src="${filters.url(
      "./components/atomico.js"
    )}" type="module"></script>
    ${html`<my-wc count=${10} />`.render()}
</body>
</html>`;
