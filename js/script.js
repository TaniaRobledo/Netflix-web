function toggleAccordion(id) {
    const accordions = document.querySelectorAll("#accordion > div > div");
    
    // Oculta todos los elementos
    accordions.forEach((accordion) => {
      if (accordion.id !== id) {
        accordion.classList.remove('block');
        accordion.classList.add('hidden');
      }
    });
  
    // Alterna el seleccionado
    const item = document.getElementById(id);
    if (item.classList.contains('hidden')) {
      item.classList.remove('hidden');
      item.classList.add('block');
    } else {
      item.classList.remove('block');
      item.classList.add('hidden');
    }
  }
  