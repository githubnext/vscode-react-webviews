# vscode-react-webviews

A sample/starter template for developing VS Code extensions with webviews

## How do I use it?

`npx degit githubnext/vscode-react-webviews`

Then edit the template to your hearts' content.

## Why does this exist?

The VS Code extension environment comes with two general approaches to development. Where possible, it is best to use the builtin APIs as they avoid many common performance pitfalls and permit you to reuse existing UX patterns.

However, if your application cannot be implemented using the builtins, then you must implement your UIs using webviews. Webviews in VS Code give you all of the power, but using them effectively can involve a lot of headache, and it's very easy to do things that ruin performance.

This project is a template of sorts. It encodes a lot of best practices for building extensions that rely on webviews — like custom editors, panels, and sidebars. It assumes that you are building your webviews in React, and it is set up to accomodate multiple webviews in a single extension.

Some other niceties:

- A working Typescript setup for both the extension _and_ the webview.
- A sample react app
- Tailwind CSS for styling, using JIT for speedy builds
- VS Code theme colors exposed as Tailwind colors for ease of "theme-native" styling.
- Lots of little quality-of-life refinements, like a tasks.json which knows to wait for builds to complete before launching the extension host, and css_custom_data.json so that VS Code doesn't complain at you for using `@tailwind` directives in your css.
- [Vite](https://vitejs.dev/) for the speediest-possible building and bundling with [esbuild](https://esbuild.github.io/).

Sadly, incremental builds are not possible with the way that VS Code currently works. That means that each build is effectively "bundling for production".

Similarly, because webviews are iframes, there's no hot module replacement. There's no websockets across the boundary between the extension host and the iframe.

# License

MIT
