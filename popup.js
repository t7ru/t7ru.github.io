// function to open the specific popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);  // get the popup by its id
    popup.style.display = 'flex';  // shows the popup
    setTimeout(() => {
        popup.style.opacity = 1;  // Apply fade-in effect
    }, 10);  // small delay to ensure the display is applied before opacity change
}

// func to close the popup with fade-out effect
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    
    // start fade-out
    popup.style.opacity = 0;
    setTimeout(() => {
        popup.style.display = 'none';  // hide the popup after fade-out
    }, 500);  // match the duration of the fade-out animation
}
