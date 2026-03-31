import axios from 'axios';
import { Product } from './types';

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get('https://api.escuelajs.co/api/v1/products');
  
  return response.data.filter((p: Product) => {
    const title = p.title.toLowerCase();
    const firstImage = p.images[0] || "";

    // 1. Pārbaudām vai bilde ir reāls fails, nevis placeholder saite
    const hasRealImage = firstImage.includes("http") && 
                         !firstImage.includes("placeimg.com") && 
                         !firstImage.includes("picsum.photos");

    // 2. Izmetam ārā visus dīvainos nosaukumus
    const isNotSpam = title.length > 3 && 
                      !title.includes("dsad") && 
                      !title.includes("ffs") && 
                      !title.includes("test") &&
                      !title.includes("classic"); // Ja gribi vēl tīrāku sarakstu

    return hasRealImage && isNotSpam;
  }).slice(0, 12); // Paņemam tikai 12 labākos produktus, lai lapa ir pārskatāma
};