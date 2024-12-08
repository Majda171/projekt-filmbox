document.addEventListener('DOMContentLoaded', () => {
    const menuTlacitko = document.querySelector('#menu-tlacitko'); 
    const menuPolozky = document.querySelector('#menu-polozky');  
    const ikona = menuTlacitko.querySelector('i');                
    menuTlacitko.addEventListener('click', () => {
    
      menuPolozky.classList.toggle('show');
  
     /*bonusový úkol*/ 
      if (menuPolozky.classList.contains('show')) {
        ikona.classList.remove('fa-bars');
        ikona.classList.add('fa-xmark');
      } else {
        ikona.classList.remove('fa-xmark');
        ikona.classList.add('fa-bars');
      }
    });
  });
  