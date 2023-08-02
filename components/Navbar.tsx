import Link from "@/node_modules/next/link";
import MainNav from "./Main-nav";
import Container from "./ui/Container";

const Navbar = () => {
    return ( 
        <div className="border-b">
            <Container>
                <div className="relative  px-4 sm:px-6 lg:px-8 h-16  flex items-center ">

              <Link href='/' className="ml-4 flex lg:ml-0 gap-x-2">
                <p className="font-bold text-xl">STORE</p>
              
              </Link>
                </div>
                <MainNav data={[]} />

            </Container>
        </div>
     );
}
 
export default Navbar;