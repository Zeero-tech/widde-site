import { useTranslation } from 'react-i18next'
import Logo from './Logo'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#0A0A0A] text-white" role="contentinfo">
      <style>{`
        .footer-link {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          text-decoration: none;
          color: rgba(255,255,255,0.6);
          font-size: 13px;
          transition: color 0.2s ease;
          gap: 3px;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-link-line {
          height: 1px;
          background: #fff;
          width: 0%;
          transition: width 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .footer-link:hover .footer-link-line {
          width: 100%;
        }
        .footer-social {
          color: rgba(255,255,255,0.6);
          transition: color 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        .footer-social:hover {
          color: #fff;
        }
      `}</style>

      <div className="px-4 md:px-8 max-w-[1440px] mx-auto pt-16 md:pt-40 pb-6 md:pb-10">

        {/* Top: logo + socials */}
        <div className="flex justify-between items-start flex-wrap gap-6 mb-8 md:mb-12">
          <a href="/" aria-current="page" style={{ display: 'inline-flex', color: 'white' }}>
            <Logo />
          </a>

          {/* Socials */}
          <div className="flex gap-5" aria-label={t('footer.socialMedia')}>
            <a href="https://www.youtube.com/channel/UCjCWd1RNzStYUU5IKJ4DRdA" className="footer-social" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/widde.io/" className="footer-social" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/widde/" className="footer-social" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@widde.io" className="footer-social" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom: nav + privacy */}
        <div className="flex justify-between items-end flex-wrap gap-6">
          <nav className="flex gap-7 flex-wrap" aria-label={t('footer.footerLinks')}>
            <a href="/#planos" className="footer-link">
              <span>{t('footer.plansAndPricing')}</span>
              <span className="footer-link-line" />
            </a>
            <a href="https://widde.io/quem-somos?utm_medium=cpc&utm_source=google&utm_campaign=01" className="footer-link" target="_blank" rel="noopener noreferrer">
              <span>{t('footer.aboutUs')}</span>
              <span className="footer-link-line" />
            </a>
            <a href="https://carreirawidde.lovable.app/" className="footer-link" target="_blank" rel="noopener noreferrer">
              <span>{t('footer.careers')}</span>
              <span className="footer-link-line" />
            </a>
            <a href="https://widde.io/blog?utm_medium=cpc&utm_source=google&utm_campaign=01" className="footer-link" target="_blank" rel="noopener noreferrer">
              <span>{t('footer.blog')}</span>
              <span className="footer-link-line" />
            </a>
            <a href="https://intercom.help/widde/pt-BR/" className="footer-link" target="_blank" rel="noopener noreferrer">
              <span>{t('footer.helpCenter')}</span>
              <span className="footer-link-line" />
            </a>
          </nav>

          <a href="https://widde.io/politica-de-privacidade?utm_medium=cpc&utm_source=google&utm_campaign=01" className="footer-link" target="_blank" rel="noopener noreferrer">
            <span>{t('footer.privacyPolicy')}</span>
            <span className="footer-link-line" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-white/[0.08]">
          <em className="text-xs text-white/35 not-italic">{t('footer.copyright')}</em>
        </div>
      </div>
    </footer>
  )
}
