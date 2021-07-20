

const mdxEnhanced = require('next-mdx-enhanced');
const composePlugins = require('next-compose-plugins');
const path = require('path');
// const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin')


// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true'
// })


module.exports = composePlugins([
  mdxEnhanced({
    layoutPath: './Components/templates'
  })
], {
  target: 'serverless',
  webpack: function (config) {
    config.module.rules.push({test:  /\.md$/, use: 'raw-loader'})
    config.module.rules.push({test: /\.yml$/, use: 'raw-loader'})
    // config.plugins.push(new DuplicatePackageCheckerPlugin())
    config.resolve.alias['strip-ansi'] = path.resolve(
      __dirname,
      'node_modules/strip-ansi'
    )
    config.resolve.alias['@babel/runtime'] = path.resolve(
      __dirname,
      'node_modules/@babel/runtime'
    )

    return config
  }
  
  
  ,
  externals: {
    'react': 'React'
},
images: {
  domains: ['images.unsplash.com','cdn4.iconfinder.com','cdn.pixabay.com','cdn3.iconfinder.com','upload.wikimedia.org'],
},
});
// module.exports = withBund/leAnalyzer({})


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