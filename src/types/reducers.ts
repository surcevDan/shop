export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    image: string;
    description: string;
}

export interface CardProps {
    product: Product | null;
    isOpen: boolean,
    onClose: () => void
}

export interface CardProps {
    products: Product;
}