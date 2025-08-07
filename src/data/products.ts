type products = {
  type: string;
  size: string;
  composition: string;
  png?: string;
};

export const products: products[] = [
  {
    type: 'MultiVita Hub',
    size: 'Базовий',
    composition: 'БК, Флоромат, Хімчистка, Ячейки з підігрівом',
    png: '/images/products/multivita-4x.png',
  },
  {
    type: 'ComfyMix Hub',
    size: 'Середній',
    composition: 'БК, Флоромат, Підігрів, Вендінг, Кава + Мікрохвильовка',
    png: '/images/products/comfymix-4x.png',
  },
  {
    type: 'MegaStore Hub',
    size: 'Великий',
    composition: 'БК, Флоромат, Підігрів, Хімчистка, Камери збереження ',
    png: '/images/products/megastore-4x.png',
  },
];
