import {Box, Flex, Input, InputGroup, SimpleGrid, useDisclosure} from "@chakra-ui/react";
import Card from "@/components/Card.tsx";
import {useEffect, useState} from "react";
import {fetchProducts, type Product} from "@/API/mockData.ts";
import ModalScreenProduct from "@/components/ModalScreenProduct.tsx";

const App = () => {

    const [products, setProducts] = useState<Product[]>([])



    const [filtersSearch, setFiltersSearch] = useState("")

    const loaderProduct = async () => {
        const data = await fetchProducts()
        setProducts(data)
    }

    const searchFilter = products.filter(product => {
        return product.title.toLowerCase().includes(filtersSearch.toLowerCase())
    })

    const [productItem, setProductItem] = useState<Product | null>(null)

    const handleCardClick = (id: number) => {
        const product =products.find((product) => product.id === id)
        setProductItem(product || null)
        onOpen()
    }

// управление модалкой
    const { open, onOpen, onClose } = useDisclosure()



    useEffect(() => {
        loaderProduct()
    },[])

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

                        {searchFilter.map((product:Product,index:number)=>{
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