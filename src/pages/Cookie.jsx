import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SectionWrapper from '../components/ui/SectionWrapper';

const Cookie = () => {
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
              {t('cookiePolicy.title') || 'Cookie-Richtlinie'}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('cookiePolicy.lastUpdated') || 'Letzte Aktualisierung: Dezember 2024'}
            </p>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4 text-white">
                {t('cookiePolicy.whatAreCookies.title') || 'Was sind Cookies?'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('cookiePolicy.whatAreCookies.content') || 'Cookies sind kleine Textdateien, die von Websites auf Ihrem Computer oder mobilen Gerät gespeichert werden, wenn Sie diese besuchen. Sie werden weit verbreitet verwendet, um sicherzustellen, dass Websites ordnungsgemäß funktionieren, sowie um Informationen darüber bereitzustellen, wie Websites verwendet werden, was uns hilft, deren Funktion zu verbessern.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('cookiePolicy.howWeUse.title') || 'Wie wir Cookies verwenden'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('cookiePolicy.howWeUse.content') || 'Wir verwenden Cookies, um verschiedene Aspekte unserer Website zu verstehen und zu verbessern. Unsere Verwendung von Cookies umfasst:'}
              </p>
              
              <ul className="list-disc pl-6 text-gray-300 mb-6 space-y-2">
                <li>{t('cookiePolicy.howWeUse.item1') || 'Notwendige Cookies: Diese Cookies sind für das Funktionieren unserer Website unbedingt erforderlich und ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.'}</li>
                <li>{t('cookiePolicy.howWeUse.item2') || 'Leistungs-Cookies: Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen, z.B. welche Seiten Sie am häufigsten besuchen. Alle Informationen, die diese Cookies sammeln, sind aggregiert und daher anonym.'}</li>
                <li>{t('cookiePolicy.howWeUse.item3') || 'Funktionalitäts-Cookies: Diese Cookies ermöglichen es unserer Website, sich an Informationen zu erinnern, die die Art beeinflussen, wie sich eine Website verhält oder aussieht, wie z.B. Ihre bevorzugte Sprache oder die Region, in der Sie sich befinden.'}</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('cookiePolicy.thirdParty.title') || 'Third-Party Cookies'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('cookiePolicy.thirdParty.content') || 'In einigen Sonderfällen verwenden wir auch Cookies von vertrauenswürdigen Drittanbietern. Zum Beispiel könnten wir Google Analytics verwenden, um zu verstehen, wie Sie unsere Website nutzen. Google Analytics-Platzierungen sind von Google Inc. Der von ihnen verwendete Tracking-Code ist so eingestellt, dass er keine persönlichen Daten wie Namen, E-Mail-Adressen oder Telefonnummern sammelt. Stattdessen erhalten wir anonymisierte Daten, die uns helfen, die Website zu verbessern.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('cookiePolicy.control.title') || 'Kontrolle über Cookies'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('cookiePolicy.control.content') || 'Sie können Cookies kontrollieren oder sogar ablehnen, indem Sie Ihre Browser-Einstellungen anpassen. Beachten Sie jedoch, dass das Deaktivieren von Cookies die Funktionalität vieler Websites beeinträchtigen kann. Die meisten Browser bieten Ihnen die Möglichkeit, Cookies zu verwalten – zum Beispiel, indem Sie alle Cookies ablehnen oder benachrichtigt werden, wenn ein Cookie gesendet wird. Die entsprechenden Einstellungen finden Sie normalerweise im Menü „Optionen“ oder „Einstellungen“ Ihres Browsers.'}
              </p>

              <h2 className="text-2xl font-bold mb-4 text-white mt-8">
                {t('cookiePolicy.changes.title') || 'Änderungen dieser Richtlinie'}
              </h2>
              <p className="text-gray-300 mb-6">
                {t('cookiePolicy.changes.content') || 'Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren. Jegliche Änderungen werden auf dieser Seite veröffentlicht. Wir empfehlen Ihnen, diese Seite regelmäßig auf Änderungen zu überprüfen, um sicherzustellen, dass Sie mit den aktualisierten Informationen zufrieden sind.'}
              </p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>
    </div>
  );
};

export default Cookie;