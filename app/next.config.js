const withTM = require("next-transpile-modules")(["components"]);

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
