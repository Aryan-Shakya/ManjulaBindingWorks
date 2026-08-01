import fs from 'fs/promises';
import path from 'path';
import ShopClient from '../../components/ShopClient';

export const metadata = {
  title: 'Catalog & Products | Manjula Binding Works',
};

async function getProducts() {
  const filePath = path.join(process.cwd(), 'data', 'products.json');
  const jsonData = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(jsonData);
}

export default async function Shop() {
  const products = await getProducts();
  return <ShopClient products={products} />;
}
