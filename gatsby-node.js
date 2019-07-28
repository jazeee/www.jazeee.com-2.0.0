/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// From: https://elcess.us/Integrating-Plotly-with-Gatsby/
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /plotly.js/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
