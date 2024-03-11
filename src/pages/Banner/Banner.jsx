
import Container from "../../components/shared/container/Container";


const Banner = () => {
  // object-cover 
  //               h-[400px]
  //               md:h-[500px]
  //               w-full 
  return (
    <Container>
      <div className="  mt-2 grid grid-cols-6 gap-3">

      <div className=" col-span-4">
      <img className=' ' src="https://img.freepik.com/premium-photo/portrait-young-extremely-beautiful-causasian-woman-with-sun-glasses-red-lip-standing-coconut-tree-beach_692702-26755.jpg?w=900" alt="" />
      </div>
      {/* flex */}
      <div className=" col-span-2 grid grid-rows-2  gap-4 ">
        <section className=" col-span-1">
        <img src="https://img.freepik.com/free-photo/woman-portrait_1296-518.jpg?t=st=1710053645~exp=1710057245~hmac=fb85f6b1bd30bb1e9072232f4583bb4a6680ca9f0e9cec66ac918427b24cd3be&w=900" alt="" />
        </section>
        
        <section className=" ">
       <img src="https://img.freepik.com/premium-photo/elegant-brunette-tanned-woman-with-natural-makeup-wearing-hat-sunglasses-fur-coat-space-text_172420-461.jpg?w=900" alt="" />
        </section>
      </div>

      </div>

    </Container>
  );
};

export default Banner;
