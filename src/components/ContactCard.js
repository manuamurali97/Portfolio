import { useLanguage } from "../context/LanguageContext";
export const ContactCard = () => {
  const { translations } = useLanguage();

  return (
    <div className="contact-card">
      <p>{translations.contact.title}</p>
      <div className="contact-details">
        <p>Email: manuamurali97@gmail.com</p>
        <p>Phone: +49 152195 74161</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/manua-murali/" target="_blank" rel="noreferrer">
            linkedin.com/in/manua-murali/
          </a>
        </p>
      </div>
    </div>
  );
};
