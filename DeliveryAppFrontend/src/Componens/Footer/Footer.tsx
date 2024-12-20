import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer2: React.FC = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer2">
            <h3>FOOD DELIVERY</h3>
            <div className="footer-content2">
                <div className="social-media2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <div className="footer-links2">
                    <a href="/privacy">{t('Privacy_Policy')}</a>
                    <a href="/contact">{t('Contact')}</a>
                    <a href="/terms">{t('Terms_of_Use')}</a>
                </div>
                <p>COPYRIGHT © {new Date().getFullYear()} - www.fooddelivery.hu</p>
            </div>
        </footer>
    );
};

export default Footer2;
