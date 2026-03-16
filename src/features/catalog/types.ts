// Šis interfeiss nodrošina, ka mēs zinām, kādi dati nāk no API
// Tas palīdz izvairīties no 'any' un nodrošina tipu drošību
export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}