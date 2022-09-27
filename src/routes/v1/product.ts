import { Router } from 'express'
import { createProduct, getProducts } from '../../controllers'

const router = Router()
/**
 * @openapi
 * components:
 *  schemas:
 *    Product:
 *      type: object
 *      properties:
 *        color:
 *          type: array
 *          items:
 *            type: string
 *          description: colors products
 *        costPrice:
 *          type: integer
 *          description: product price cost
 *        description:
 *          type: string
 *          description: product description
 *        images:
 *          type: array
 *          items:
 *            type: string
 *          description: array of image urls
 *        inStock:
 *          type: boolean
 *          description: use as a reference when stock is low
 *        ownerId:
 *          type: string
 *          description: reference to the creator user of the product
 *        quantity:
 *          type: integer
 *          description: quantity of products in stock
 *        salePrice:
 *          type: integer
 *          description: product selling price
 *        size:
 *          type: array
 *          items:
 *            type: string
 *          description: product size arrangement
 *        title:
 *          type: string
 *          description: product title
 *      required:
 *        - color
 *        - costPrice
 *        - description
 *        - images
 *        - owerId
 *        - quantity
 *        - salePrice
 *        - size
 *        - title
 *      example:
 *        _id: '633103da22952786ffd7c095'
 *        color: ["red", "blue", "white", "black"]
 *        costPrice: 5000
 *        description: "Zapatillas deportivas para realizar todo tipo de deportes de alto impacto."
 *        images: ["https://www.tradeinn.com/f/13842/138425614/adidas-zapatillas-running-duramo-10.jpg","https://www.tradeinn.com/f/13842/138425614/adidas-zapatillas-running-duramo-10.jpg","https://www.tradeinn.com/f/13842/138425614/adidas-zapatillas-running-duramo-10.jpg","https://www.tradeinn.com/f/13842/138425614/adidas-zapatillas-running-duramo-10.jpg"]
 *        owerId: '6308306a55307e31a3f581f4'
 *        quantity: 20
 *        salePrice: 8000
 *        size: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]
 *        title: 'Adidas FastFury'
 *      ProductNNotFound:
 *        type: object
 *        properties:
 *          error:
 *            type: string
 *            description: Error creating a product
 *        example:
 *          error: ERROR_CREATE_PRODUCT
 */

/**
 * @openapi
 * tags:
 *  - name: Product
 *    description: Methods to product
 */

/**
 * @openapi
 * /api/v1/product:
 *  post:
 *    summary: Create a new Product
 *    tags: [Product]
 *    responses:
 *      201:
 *        description: Product created! :D
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schema/Product'
 *      500:
 *        description: ERROR_CREATE_PRODUCT
 */

router.post('/', createProduct)

router.get('/', getProducts)

export { router }
