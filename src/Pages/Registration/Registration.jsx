import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Swal from "sweetalert2";

const Registration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { createuser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };

  return (
    <div className="container mx-auto w-1/2">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="name"
            placeholder="name"
            name="name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            {...register("email", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            {...register("password", {
              required: true,
              // minLength: 6,
              // maxLength: 20,
              // pattern: /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/,
            })}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
        <p>
          Already Have Account?{" "}
          <Link to="/login">
            <span className="text-primary">Login</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Registration;
