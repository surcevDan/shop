
import {
    DialogRoot,
    DialogBackdrop,
    DialogContent,
    DialogHeader,
    DialogBody,
    DialogFooter,
    DialogTitle,
    Button,
    Image,
    Text, DialogPositioner, IconButton,
} from "@chakra-ui/react";

import * as React from "react";
import {GrClose} from "react-icons/gr";
import type {CardProps} from "@/types/reducers.ts";




const ModalScreenProduct:React.FC<CardProps> = ({product, isOpen, onClose })=>{


    return (
        <DialogRoot open={isOpen} onOpenChange={(e) => !e.open && onClose()}>
            <DialogBackdrop />

            <DialogPositioner>
                <DialogContent>
                    <DialogHeader  justifyContent="space-between" alignItems="center">
                            <DialogTitle>{product?.title}</DialogTitle>
                            <IconButton aria-label="Закрыть" onClick={onClose}><GrClose/></IconButton>
                    </DialogHeader>
                    <DialogBody>
                        <Image src={product?.image} mx="auto" aspectRatio={4 / 3} />
                        <Text textStyle={["sm", "lg", "lg"]} >{product?.description}</Text>
                        <Text>Цена: <Text as="span" textStyle={["md", "xl", "xl"]} fontWeight="bold" color="green">{product?.price}</Text> руб.</Text>
                    </DialogBody>
                    <DialogFooter>
                        <Button onClick={()=>console.log("Купил")} color="green" colorPalette="">Купить</Button>
                    </DialogFooter>
                </DialogContent>
            </DialogPositioner>
        </DialogRoot>

    )
}
export default ModalScreenProduct