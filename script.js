document.getElementById('giftBox').addEventListener('click', function() {
  document.getElementById('cakePopup').classList.add('show');
});

document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('cakePopup').classList.remove('show');
});
