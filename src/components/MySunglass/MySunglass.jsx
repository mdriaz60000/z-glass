import { useState } from "react";
import useAxiosHost from "../../Hooks/useAxiosHost";
import AMySunglass from "./AMySunglass";
import Container from "../shared/container/Container";
import { useEffect } from "react";

const MySunglass = () => {
  const [mysunglasses, setMySunglasses] = useState([]);
  const axiosHost = useAxiosHost();
  const [loading, setLoading] = useState(true);

  const totalPrice = mysunglasses.reduce(
    (total, item) => total + item.price,
    0
  );

  useEffect(() => {
    setLoading(true);
    axiosHost
      .get("/sunglass")
      .then((res) => {
        setMySunglasses(res.data);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [axiosHost]);

  const handlePayment = () => {
    axiosHost
      .post("/createPayment", {
        amount: { totalPrice },
      })
      .then((res) => {
        console.log(res);
        const redirectUrl = res.data.paymentUrl;
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
  };

  return (
    <Container>
      {loading ? (
        <div className="flex flex-col text-center justify-center items-center h-screen text-4xl">
          <p>Loading...</p>
        </div>
      ) : mysunglasses.length > 0 ? (
        <div className="mt-10 grid grid-cols-12 gap-3">
          <section className="col-span-9 md:col-span-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {mysunglasses.map((mySunglass, index) => (
                <AMySunglass
                  key={index}
                  mySunglass={mySunglass}
                  index={index}
                />
              ))}
            </div>
          </section>
          <section className="col-span-2 mt-5">
            <p className="text-2xl font-medium">
              Total sunglass: {mysunglasses.length}
            </p>
            <p className="text-2xl font-medium py-2">
              Total price: ${totalPrice}
            </p>
            <button
              onClick={handlePayment}
              className="btn btn-primary w-full text-center"
              type="submit"
              disabled={mysunglasses.length === 0 || totalPrice === 0}
            >
              Payment
            </button>
          </section>
        </div>
      ) : (
        <div className="flex flex-col text-center justify-center items-center h-screen text-4xl text-red-600">
          <p>Empty</p>
        </div>
      )}
    </Container>
  );
};

export default MySunglass;
