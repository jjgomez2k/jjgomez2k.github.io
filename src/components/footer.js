// Footer Component
import i18n from '../i18n/i18n.js';

export const footerComponent = () => {
  const t = i18n.t.bind(i18n);
  return `
    <footer>
      <div class="accent-line"></div>
      <p data-i18n="footer.text"></p>
    </footer>
  `;
};

export default footerComponent;
