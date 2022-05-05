import { c, html, css, useProp } from "atomico";
function component() {
    const [count, setCount] = useProp("count");
    const increment = () => setCount((count) => count + 1);
    const decrement = () => setCount((count) => count - 1);
    return html `<host shadowDom>
    <button onclick=${increment}>Increment</button>
    <h1>${count}</h1>
    <button onclick=${decrement}>Decrement</button>
  </host>`;
}
component.props = {
    count: { type: Number, value: 0 },
};
component.styles = css `
  :host {
    display: grid;
    padding: 1rem;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 0.5rem;
    background: #f1f1f9;
  }
  button {
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 100px;
    padding: 0.5rem 1rem;
    transition: 0.3s ease all;
    margin: auto;
  }
  button:hover {
    border-color: rgba(0, 0, 0, 1);
  }
`;
customElements.define("my-wc", c(component));
