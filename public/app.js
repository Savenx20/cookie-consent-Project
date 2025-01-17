// Import js-cookie
import Cookies from 'js-cookie';

// Handle cookie preferences
document.getElementById('accept-all').addEventListener('click', () => {
  Cookies.set('strictly-necessary', true, { expires: 365 });
  Cookies.set('functionality', true, { expires: 365 });
  Cookies.set('targeting', true, { expires: 365 });
  alert('All cookies accepted');
  closePopup();
});

document.getElementById('reject-all').addEventListener('click', () => {
  Cookies.set('strictly-necessary', true, { expires: 365 });
  Cookies.set('functionality', false);
  Cookies.set('targeting', false);
  alert('All optional cookies rejected');
  closePopup();
});

document.getElementById('customize').addEventListener('click', () => {
  document.getElementById('customize-options').classList.remove('hidden');
});

document.getElementById('save-preferences').addEventListener('click', () => {
  const functionality = document.getElementById('functionality-cookies').checked;
  const targeting = document.getElementById('targeting-cookies').checked;

  Cookies.set('strictly-necessary', true, { expires: 365 });
  Cookies.set('functionality', functionality, { expires: 365 });
  Cookies.set('targeting', targeting, { expires: 365 });

  alert('Preferences saved');
  closePopup();
});

function closePopup() {
  document.getElementById('cookie-popup').style.display = 'none';
}
