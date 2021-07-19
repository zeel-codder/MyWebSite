

const mdxEnhanced = require('next-mdx-enhanced');
const composePlugins = require('next-compose-plugins');

module.exports = composePlugins([
  mdxEnhanced({
    layoutPath: './Components/templates'
  })
], {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    return config
  },
  externals: {
    'react': 'React'
},
images: {
  domains: ['images.unsplash.com','cdn4.iconfinder.com','cdn.pixabay.com','cdn3.iconfinder.com','upload.wikimedia.org'],
},
});



// module.exports = {
//   target: 'serverless',
//   webpack: function (config) {
//     config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
//     config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
//     config.module.rules.push({test: /\.mdx$/, use: 'raw-loader'})
//     return config
//   },
//   externals: {
//     'react': 'React'
// },
// images: {
//   domains: ['images.unsplash.com','cdn4.iconfinder.com','cdn.pixabay.com','cdn3.iconfinder.com','upload.wikimedia.org'],
// },
// }