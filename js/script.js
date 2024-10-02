
        function cambiarTema(color) {
            document.documentElement.className = color + '-theme';
        }

        function toggleThemeMenu() {
            const themeOptions = document.getElementById('theme-options');
            themeOptions.style.display = themeOptions.style.display === 'block' ? 'none' : 'block';
        }
      
const images = document.querySelectorAll('.zoomable');

images.forEach(image => { 
   
    image.addEventListener('click', function() {
      
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
         
            images.forEach(img => img.classList.remove('active'));
          
            this.classList.add('active');
        }
    });
});
