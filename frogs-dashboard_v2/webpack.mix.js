const mix = require('laravel-mix');

// copy the image folder
mix.copy('src/assets/img/**', 'dist/assets/img');

// copy the html extension to dist folder
mix.copy('src/*.html', 'dist');

// compile the tailwind file
mix.js('src/assets/js/donut-total.js', 'dist/assets/js')
   .js('src/assets/js/donut-distrik.js', 'dist/assets/js')
   .js('src/assets/js/capaian.js', 'dist/assets/js')
   .js('src/assets/js/distrik.js', 'dist/assets/js')
   .js('src/assets/js/income-month.js', 'dist/assets/js')
   .js('src/assets/js/income-year.js', 'dist/assets/js')
   .postCss('src/assets/css/app.css', 'dist/assets/css', [
      require('tailwindcss'),
   ]);

mix.webpackConfig({
stats: {
   children: true,
},});