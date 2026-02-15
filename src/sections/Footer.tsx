import { footerContent } from '../content/home';

const Footer = () => (
  <footer className="footer">
    <strong>{footerContent.brand}</strong>
    <p>{footerContent.blurb}</p>
    <small>{footerContent.copyright}</small>
  </footer>
);

export default Footer;
