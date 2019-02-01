module.exports = {
  plugins: [
    require('autoprefixer')({ // eslint-disable-line
      browsers: ['> 1%', 'last 2 versions'],
    }),
  ],
};
