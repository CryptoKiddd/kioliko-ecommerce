import getBillboards from "@/actions/get-billboards";
import Billboard from "@/components/billboard"
import Container from "@/components/ui/Container"

export const revalidate = 0;

const HomePage = async()=>{
    const billboard = await getBillboards('53360b8c-6816-485a-95f4-59a77023344e')
    return(
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />
            </div>
        </Container>
    )
}
export default HomePage