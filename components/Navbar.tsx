import getCategories from "@/actions/get-categories";
import Link from "@/node_modules/next/link";
import MainNav from "./Main-nav";
import NavbarActions from "./Navbar-actions";
import Container from "./ui/Container";


export const revalidate = 0
const Navbar = async({
  params
}:{
  params:string
}) => {
  const categories = await getCategories()
    return ( 
        <div className="border-b">
            <Container>
              <div className="flex relative  px-4 sm:px-6 lg:px-8 h-16   items-center ">

              <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                <p className="font-bold text-xl">STORE</p>
              
              </Link>
                <MainNav data={categories} />
                <NavbarActions/>
                </div>

            </Container>
        </div>
     );
}
 
export default Navbar;