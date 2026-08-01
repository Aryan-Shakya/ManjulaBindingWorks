import './globals.css';
import { LanguageProvider } from '../components/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Manjula Binding Works Solapur | Premium Notebook & Bookbinding Manufacturer',
  description: 'Manufacturer of high-grade notebooks, ledger books, and custom binding solutions in Solapur since 1975.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
