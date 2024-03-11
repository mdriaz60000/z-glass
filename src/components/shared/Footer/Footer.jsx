
import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FaFacebook ,  FaSquareWhatsapp} from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=' text-white w-full mx-auto bg-slate-800  mt-4 shadow-sm'>
            <div className='py-4 border-b-[1px]'>
            <Container> 
             <div className="  md:flex  items-center  justify-between">
                <section>
                 <h1 className=" text-center  font-serif font-semibold">@2024 All Rights Reserved By Ma<span className=" text-red-700 animate-ping">s</span>um</h1>  
                </section>
                <section>
                  <div className=" mt-3  flex justify-center gap-3">
                    <Link>
                    <FaFacebook/>
                    </Link>
                    <Link>
                    <FaSquareWhatsapp/>
                    </Link>
                    <Link>
                    <FaInstagramSquare/>
                    </Link>
                  </div>
                </section>
             </div>
            </Container>
            </div>
        </div>
      
    );
};

export default Footer;