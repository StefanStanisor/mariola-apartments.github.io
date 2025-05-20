function redirectToDetailPage(apartmentType) {
    if (apartmentType === 'deluxe') {
        window.location.href = '/our apartments/deluxe.html';
    } else if (apartmentType === 'studio') {
        window.location.href = '/our apartments/studio.html';
    }
}
