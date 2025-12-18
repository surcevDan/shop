import {Box, Image, Text} from "@chakra-ui/react";
import type {FC} from "react";
import type {Product} from "@/API/mockData.ts";

interface CardProps {
    products: Product;
}

const Card: FC<CardProps> = ({products}) =>{
    return (
        <Box maxW="300px" borderWidth="2px" borderRadius="4px" p="2px">
            <Image src={products.image} aspectRatio={4 / 3} width="300px"/>
            <Text fontWeight="medium" color="fg">
                Название: {products.title}
            </Text>
            <Text fontWeight="medium" color="fg">
                Цена: {products.price} руб.
            </Text>
        </Box>
    )
}
export default Card