import { useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="mt-5">
      <div className=" divider"></div>
      <button onClick={handleGoogleSignIn} className="btn btn-primary btn-sm">
        google
      </button>
    </div>
  );
};

export default SocialLogin;
