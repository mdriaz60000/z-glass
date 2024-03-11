import { useEffect, useState } from "react";
import Heading from "../../components/shared/Heading/Heading";
import Container from "../../components/shared/container/Container";
import MyServiceCard from "./MyServiceCard";


const MyServices = () => {
    const [sunglasses, setSunglasses] = useState([])

    useEffect(()=>{
        fetch('sunglass.json').then(res=>res.json())
        .then(data=>setSunglasses(data))
    },[])
    return (
        <Container>
            <Heading center={'center'} title={'my services'} subtitle={'most online sunglass'} />
            <div className=" grid grid-cols-3 md:grid-cols-5 gap-5">
            {
                sunglasses?.map(item =><MyServiceCard key={item.id} item={item}></MyServiceCard>)
            }
            </div>
            
        </Container>
    );
};

export default MyServices;