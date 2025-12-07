import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';

const Datenschutz = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-24 pb-16">
      <SectionWrapper className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('privacyPolicy.title') || 'Datenschutzerklärung'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('privacyPolicy.lastUpdated') || 'Letzte Aktualisierung: Dezember 2024'}
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {t('privacyPolicy.introduction.title') || 'Einleitung'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('privacyPolicy.introduction.content') || 'Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat einen besonders hohen Stellenwert für die Geschäftsleitung der AI Express. Eine Nutzung der Internetseiten der AI Express ist grundsätzlich ohne jede Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere Services unseres Unternehmens über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine Verarbeitung personenbezogener Daten erforderlich werden. Ist die Verarbeitung personenbezogener Daten erforderlich und besteht für eine solche Verarbeitung keine gesetzliche Grundlage, holen wir generell eine Einwilligung der betroffenen Person ein.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('privacyPolicy.scope.title') || 'Umfang der Verarbeitung personenbezogener Daten'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('privacyPolicy.scope.content') || 'Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten unserer Nutzer erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten durch gesetzliche Vorschriften gestattet ist.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('privacyPolicy.rights.title') || 'Rechte der betroffenen Person'}
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>{t('privacyPolicy.rights.item1') || 'Auskunftsrecht: Sie haben das Recht, von dem Verantwortlichen eine Bestätigung darüber zu verlangen, ob Sie betreffende personenbezogene Daten verarbeitet werden.'}</li>
                <li>{t('privacyPolicy.rights.item2') || 'Berichtigungsrecht: Sie haben das Recht, von dem Verantwortlichen die Berichtigung Sie betreffender unrichtiger personenbezogener Daten zu verlangen.'}</li>
                <li>{t('privacyPolicy.rights.item3') || 'Löschungsrecht: Sie haben das Recht, von dem Verantwortlichen zu verlangen, dass Sie betreffende personenbezogene Daten unverzüglich gelöscht werden.'}</li>
                <li>{t('privacyPolicy.rights.item4') || 'Einschränkungsrecht: Sie haben das Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung zu verlangen.'}</li>
                <li>{t('privacyPolicy.rights.item5') || 'Widerspruchsrecht: Sie haben das Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.'}</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('privacyPolicy.cookies.title') || 'Cookies'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('privacyPolicy.cookies.content') || 'Die Internetseiten der AI Express verwenden Cookies. Cookies sind Textdateien, welche über einen Internetbrowser auf dem Computersystem des Nutzers abgelegt werden. Zahlreiche Internetseiten und Server verwenden Cookies. Viele Cookies enthalten eine sogenannte Cookie-ID. Eine Cookie-ID ist eine eindeutige Kennung des Cookies. Sie besteht aus einer Zeichenfolge, durch welche Internetseiten und Server dem konkreten Internetbrowser zugeordnet werden können, in dem das Cookie gespeichert wurde. Dies ermöglicht es den besuchten Internetseiten und Servern, einzelne Browser der Nutzer von anderen Internetbrowsern, die andere Cookies enthalten, zu unterscheiden. Ein bestimmter Internetbrowser kann über die eindeutige Cookie-ID wiedererkannt und identifiziert werden.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('privacyPolicy.contact.title') || 'Kontaktmöglichkeit'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('privacyPolicy.contact.content') || 'Die Internetseiten der AI Express enthalten Informationen, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst. Sofern eine betroffene Person per E-Mail oder über ein Kontaktformular mit dem für die Verarbeitung Verantwortlichen in Kontakt tritt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Diese personenbezogenen Daten, die eine betroffene Person freiwillig an den für die Verarbeitung Verantwortlichen übermittelt, werden für die Zwecke der Bearbeitung oder der Kontaktaufnahme zur betroffenen Person gespeichert. Es erfolgt keine Weitergabe dieser personenbezogenen Daten an Dritte.'}
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Datenschutz;