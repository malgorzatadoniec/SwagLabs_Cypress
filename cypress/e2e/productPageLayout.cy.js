import {ProductPageMetchod} from "../methods/specificMetchods/productPageMethod"

describe('Verify product page layout for every product', () => {

const linkID = [4, 0, 1, 5, 2, 3]

linkID.forEach(linkID => {
it.only(`Layout for product ${linkID}`, () => {
    new ProductPageMetchod(linkID).productPageLayout(linkID)
    })
})

})