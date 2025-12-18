import type {Product} from "@/types/reducers.ts";

export const mockProducts: Product[] = [
    {
        id: 1,
        title: "Смарт-часы X100",
        price: 7490,
        category: "Гаджеты",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
        description: "Водонепроницаемые, GPS, 7-дневный аккумулятор"
    },
    {
        id: 2,
        title: "Беспроводные наушники Pro",
        price: 5490,
        category: "Аудио",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        description: "Шумоподавление, 30 часов работы, Bluetooth 5.3"
    },
    {
        id: 3,
        title: "Смартфон Galaxy S23",
        price: 89990,
        category: "Телефоны",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w-400",
        description: "6.1-дюймовый дисплей, 128 ГБ памяти, 50 Мп камера"
    },
    {
        id: 4,
        title: "Ноутбук UltraBook",
        price: 120000,
        category: "Компьютеры",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        description: "13-дюймовый экран, 16 ГБ ОЗУ, 512 ГБ SSD, Intel Core i7"
    },
    {
        id: 5,
        title: "Фитнес-браслет Active",
        price: 2990,
        category: "Гаджеты",
        image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=400",
        description: "Мониторинг сна и пульса, 10 дней работы, уведомления"
    },
    {
        id: 6,
        title: "Игровая консоль NextGen",
        price: 45000,
        category: "Развлечения",
        image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400",
        description: "4K графика, 1 ТБ памяти, 2 контроллера, 120 Гц"
    },
    {
        id: 7,
        title: "Цифровая камера ProShot",
        price: 65000,
        category: "Фото",
        image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400",
        description: "24 Мп, 4K видео, стабилизация, Wi-Fi"
    },
    {
        id: 8,
        title: "Умная колонка SoundMax",
        price: 8900,
        category: "Аудио",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400",
        description: "Голосовой помощник, 360° звук, Bluetooth"
    },
    {
        id: 9,
        title: "Электронная книга Reader",
        price: 12900,
        category: "Гаджеты",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400",
        description: "6-дюймовый экран E-Ink, 8 ГБ памяти, подсветка"
    },
    {
        id: 10,
        title: "Монитор 4K UltraHD",
        price: 34000,
        category: "Компьютеры",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
        description: "27 дюймов, IPS матрица, 144 Гц, HDR"
    }
];


export const fetchProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        // Имитация задержки сети
        setTimeout(() => {
            resolve(mockProducts);

        }, 500);
    });
};