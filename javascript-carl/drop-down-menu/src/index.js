const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach((item) => {
  item.addEventListener('click', (event) => {    
    let allDropContent = document.querySelectorAll('.drop-content');
    let targetDropContent = event.target.childNodes[1];
  
    allDropContent.forEach((content) => {
      if (content !== targetDropContent) {
        content.classList.add('hidden-menu');
        content.classList.remove('visible-menu');
      }
    })


    if (targetDropContent.classList.contains('hidden-menu')) {
      targetDropContent.classList.remove('hidden-menu');
      targetDropContent.classList.add('visible-menu');
    } else {
      targetDropContent.classList.add('hidden-menu');
      targetDropContent.classList.remove('visible-menu');
    }
  });
});
