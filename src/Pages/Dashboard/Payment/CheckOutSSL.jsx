import useCart from "../../../Components/Hooks/useCart";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";

const CheckOutSSL = () => {
  const [cart] = useCart();
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handlePayment = () => {
    axiosSecure
      .post("/create-payment", {
        amount: totalPrice,
        currency: "BDT",
        email: user.email,
        name: user.displayName,
        date: new Date(),
        cartIds: cart.map((item) => item._id),
        menuItemIds: cart.map((item) => item.menuId),
      })
      .then((response) => {
        console.log(response);
        const redirectUrl = response.data.paymentUrl;
        if (redirectUrl) {
          window.location.replace(redirectUrl);
        }
      });
  };
  return (
    <div>
      <button onClick={handlePayment} className="btn btn-primary btn-sm">
        SSL Pay
      </button>
    </div>
  );
};

export default CheckOutSSL;
