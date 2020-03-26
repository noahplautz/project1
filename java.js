const menuButton = document.getElementById('menu-button');
const navigation = document.getElementById('navigation');

menuButton.addEventListener('click', event => {
  menuButton.classList.toggle('active');
  event.stopPropagation();
  navigation.classList.toggle('open');
});
document.addEventListener('click', () => {
  menuButton.classList.remove('active');
  navigation.classList.remove('open');
});