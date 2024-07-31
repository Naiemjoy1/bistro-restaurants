import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with image url", res.data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Recipe name"
            className="input input-bordered"
            {...register("name", { required: true })}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select a category</span>
          </label>
          <select
            className="input input-bordered"
            name="category"
            defaultValue="default"
            {...register("category")}
          >
            <option disabled value="default">
              Select a category
            </option>
            <option value="salad">Salad</option>
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select>
          {errors.category && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            className="input input-bordered"
            {...register("price", { required: true })}
          />
          {errors.price && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details</span>
          </label>
          <input
            type="text"
            name="recipe"
            placeholder="Recipe Details"
            className="input input-bordered"
            {...register("recipe", { required: true })}
          />
          {errors.recipe && <span>This field is required</span>}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <input
            type="file"
            name="image"
            placeholder="Recipe Details"
            className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            {...register("image", { required: true })}
          />
          {errors.image && <span>This field is required</span>}
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddItems;
