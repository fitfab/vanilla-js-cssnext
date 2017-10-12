
***css-loader***

The css-loader interprets @import and url() like import/require() and will resolve them.

***style-loader***

Adds CSS to the DOM by injecting a <style> tag

***postcss***

PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

***postcss-cssnext***

PostCSS-cssnext is a PostCSS plugin that helps you to use the latest CSS syntax today. It transforms CSS specs into more compatible CSS so you don’t need to wait for browser support.

***postcss-import***

This plugin can consume local files, node modules or web_modules. To resolve path of an @import rule, it can look into root directory (by default process.cwd()), web_modules, node_modules or local modules. When importing a module, it will look for index.css or file referenced in package.json in the style or main fields. You can also provide manually multiples paths where to look at.

***postcss-loader***

Loader for webpack to process CSS with PostCSS

**TODO**

- [ ] add eslint
