import fs from 'fs/promises';
import path from 'path';
import AboutClient from '../../components/AboutClient';

export const metadata = {
  title: 'About Us | Manjula Binding Works Solapur',
};

async function getFactoryImages() {
  try {
    const dirPath = path.join(process.cwd(), 'public', 'images', 'factory');
    const files = await fs.readdir(dirPath);
    return files.filter(f => f.endsWith('.jpeg') || f.endsWith('.jpg')).map(f => `/images/factory/${f}`);
  } catch (e) {
    return [];
  }
}

export default async function About() {
  const images = await getFactoryImages();
  return <AboutClient images={images} />;
}
