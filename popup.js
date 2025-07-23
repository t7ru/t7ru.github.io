function openPopup(popupId) {
  const popup = document.getElementById(popupId);
  popup.style.display = "flex";
  setTimeout(() => {
    popup.style.opacity = 1;
  }, 10);
}

function closePopup(popupId) {
  const popup = document.getElementById(popupId);

  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
}
