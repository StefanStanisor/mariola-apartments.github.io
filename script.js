function redirectToDetailPage(apartmentType) {
    if (apartmentType === 'deluxe') {
        window.location.href = '/our apartments/deluxe.html';
    } else if (apartmentType === 'studio') {
        window.location.href = '/our apartments/studio.html';
    }
}

// Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburgerButton.addEventListener('click', () =>
      mobileMenu.classList.toggle('active')
    );
  });