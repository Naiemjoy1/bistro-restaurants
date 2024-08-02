import axios from "axios";

const Bkash = () => {
  const handlePayment = async () => {
    try {
      await axios
        .post("http://localhost:3000/bkash-checkout", {
          amount: 1200,
          callbackURL: "http://localhost:3000/bkash-callback",
          orderID: "1234",
          reference: "5678",
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handlePayment} className="btn btn-primary btn-sm">
        Bkash Pay
      </button>
    </div>
  );
};

export default Bkash;
