
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['6ow7yZ49nJSe4K8jBAoPsH'] // An array of project ids.
});
module.exports = withPlasmic({
  eslint: {
    ignoreDuringBuilds: true,
  },
  trailingSlash: true,
  // Your NextJS config.
});
  