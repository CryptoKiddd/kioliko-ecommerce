import getBillboards from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard"
import ProductList from "@/components/product-list";
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async()=>{
    const products = await getProducts({isFeatured:true})
    const billboard = await getBillboards('53360b8c-6816-485a-95f4-59a77023344e')
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
            <div className="flex- flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title='Featured Products' items={products} />
            </div>
        </Container>
    )
}
export default HomePage