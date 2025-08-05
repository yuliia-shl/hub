type products = {
  type: string;
  size: string;
  composition: string;
  png?: string; // Optional property for PNG images
};

export const products: products[] = [
  {
    type: 'MultiVita Hub',
    size: 'Базовий',
    composition: 'БК, Флоромат, Хімчистка, Ячейки з підігрівом',
    png: '/public/images/products/multivita.png',
  },
  {
    type: 'ComfyMix Hub',
    size: 'Середній',
    composition: 'БК, Флоромат, Підігрів, Вендінг, Кава + Мікрохвильовка',
    png: '/public/images/products/comfymix.png',
  },
  {
    type: 'MegaStore Hub',
    size: 'Великий',
    composition: 'БК, Флоромат, Підігрів, Хімчистка, Камери збереження ',
    png: '/public/images/products/megastore.png',
  },
];
