
<body>
    <h1>🚀 Nuxt.js Documentation</h1>
    <h2>📌 Introduction</h2>
    <p>Nuxt.js is a powerful Vue.js framework that simplifies the development of <strong>Server-Side Rendered (SSR) applications</strong>, <strong>Static Websites</strong>, and <strong>Front-End applications</strong>.</p>
    <h2>⚡ Installation</h2>
    <pre>
        <code>
npx nuxi init my-project
cd my-project
npm install
npm run dev
        </code>
    </pre>
    <h2>📂 Folder Structure</h2>
    <ul>
        <li><strong>📄 pages/</strong> - Contains Vue components mapped to routes.</li>
        <li><strong>📌 layouts/</strong> - Defines reusable layout components.</li>
        <li><strong>🧩 components/</strong> - Stores reusable UI components.</li>
        <li><strong>🔧 composables/</strong> - Manages reusable logic (similar to Vue composables).</li>
        <li><strong>📂 public/</strong> - Contains static assets like images.</li>
        <li><strong>⚙️ nuxt.config.ts</strong> - Configuration file for Nuxt.</li>
    </ul>
    <h2>🌍 Routing</h2>
    <p>Nuxt automatically generates routes based on the <code>pages/</code> directory.</p>
    <pre>
        <code>
&lt;!-- pages/index.vue --&gt;
&lt;template&gt;
  &lt;h1&gt;🏠 Home Page&lt;/h1&gt;
&lt;/template&gt;
        </code>
    </pre>
    <h2>📊 State Management</h2>
    <p>Nuxt uses <strong>Pinia</strong> for state management.</p>
    <pre>
        <code>
npm install pinia
        </code>
    </pre>
    <pre>
        <code>
// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
        </code>
    </pre>
    <h2>🔗 API Calls</h2>
    <p>Nuxt uses <code>useFetch</code> to handle API requests.</p>
    <pre>
        <code>
&lt;!-- pages/fetch-example.vue --&gt;
&lt;script setup&gt;
const { data } = await useFetch('https://jsonplaceholder.typicode.com/posts');
&lt;/script&gt;

&lt;template&gt;
  &lt;div v-for="post in data" :key="post.id"&gt;
    &lt;h3&gt;📌 {{ post.title }}&lt;/h3&gt;
  &lt;/div&gt;
&lt;/template&gt;
        </code>
    </pre>
    <h2>🔐 Authentication</h2>
    <p>Nuxt supports authentication via plugins like <strong>Auth.js</strong>.</p>
    <h2>🚀 Deployment</h2>
    <pre>
        <code>
npm run build
npm run start
        </code>
    </pre>
    <h2>🎯 Conclusion</h2>
    <p>Nuxt.js simplifies Vue development by providing <strong>automatic routing</strong>, <strong>SSR support</strong>, and <strong>better structure</strong> for large applications.</p>
    <hr>
    <p>💡 <em>For more details, check the <a href="https://nuxt.com/docs" target="_blank">Nuxt.js official documentation</a>.</em></p>
    <p>📌 <em>Contributions are welcome!</em> 🤝</p>
</body>
</html>


# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

```
