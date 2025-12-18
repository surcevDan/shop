import {Box, Flex, Input, InputGroup, SimpleGrid, useDisclosure} from "@chakra-ui/react";
import Card from "@/components/Card.tsx";
import {useState} from "react";
import ModalScreenProduct from "@/components/ModalScreenProduct.tsx";
import type {Product} from "@/types/reducers.ts";
import {useProducts} from "@/hooks/useProducts.ts";

const App = () => {

    const [filtersSearch, setFiltersSearch] = useState("")
    const [productItem, setProductItem] = useState<Product | null>(null)
    // управление модалкой
    const { open, onOpen, onClose } = useDisclosure()

    const {products, filterProduct}=useProducts(filtersSearch)


    const handleCardClick = (id: number) => {
        const product =products.find((product) => product.id === id)
        setProductItem(product || null)
        onOpen()
    }



    return (
        <>
            <Box>
                <Flex justify="center" alignItems="center">
                    <InputGroup flex="1" maxW={{ base: "100%", md: "600px", lg: "850px" }} width="100%"
                                mx={{ base: 4, md: 0 }}
                                my={{ base: 4, md: 6 }}>
                        <Input w="100%" type="text" value={filtersSearch}
                               onChange={(e) => setFiltersSearch(e.target.value)}
                               placeholder="Поиск..." />
                    </InputGroup >
                </Flex>
                <Box>
                    <SimpleGrid
                        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
                        gap={6}
                        width="100%">

                        {filterProduct.map((product:Product,index:number)=>{
                            return <Flex justify="center" alignItems="center"><Box
                                cursor="pointer" transition="all 0.25s ease"
                                _hover={{transform: "scale(1.03)", boxShadow: "0 10px 30px rgba(0,0,0,0.15)",}}
                                onClick={()=>{handleCardClick(index+1)}}><Card products={product}/></Box></Flex>
                        })}
                    </SimpleGrid>
                </Box>




            </Box>
            <ModalScreenProduct product={productItem} isOpen={open} onClose={onClose} />

        </>


    )
}
export default App