import { products } from "./data/products";
import { categories } from "./data/categories";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

const main = async () : Promise<void> => {
    try {
        await prisma.category.createMany({
            data: categories
        })
        await prisma.product.createMany({
            data: products
        })
    } catch (error) {
        console.log(error)
    }
}
main()