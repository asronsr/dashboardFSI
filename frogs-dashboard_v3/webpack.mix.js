const mix = require('laravel-mix');

// copy the image folder
mix.copy('src/assets/img/**', 'dist/assets/img');

// copy the html extension to dist folder
mix.copy('src/*.html', 'dist');

// compile the tailwind file
mix.js('src/assets/js/sales.js', 'dist/assets/js')
.js('src/assets/js/target.js', 'dist/assets/js')
.js('src/assets/js/hectar.js', 'dist/assets/js')
.postCss('src/assets/css/app.css', 'dist/assets/css', [
   require('tailwindcss'),
]);

// sorry i can't explaint, just remove this code if you want to know the difference
mix.webpackConfig({
stats: {
   children: true,
},});