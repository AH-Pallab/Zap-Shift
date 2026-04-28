import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router";

const SendParce = () => {
  const [division, setDivision] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/division.json")
      .then((res) => res.json())
      .then((data) => setDivision(data));
    //   .then((error) => console.log(error));
  }, []);
  useEffect(() => {
    fetch("/warehouse.json")
      .then((res) => res.json())
      .then((data) => setWarehouse(data));
    //   .then((error) => console.log(error));
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext);

  const onSubmit = (data) => {
    const isDocument = data.type === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    //send info to database
    axiosSecure.post("/parcels", data).then((res) => {
      console.log("after saving", res.data);
      navigate("/dashboard/my-parcels");
    });
  };

  const senderDivision = watch("senderDivision");
  const receiverDivision = watch("receiverDivision");

  const districtByDivision = (division) => {
    const districtsWithOtherInfo = warehouse.filter(
      (a) => a.region === division,
    );
    const districts = districtsWithOtherInfo.map((a) => a.district);
    return districts;
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="min-h-screen bg-gray-100 flex items-center justify-center p-6"
    >
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-md p-10">
        {/* Header */}
        <h1 className="text-3xl font-bold text-teal-900 mb-6">Send A Parcel</h1>

        <p className="text-sm font-semibold text-gray-700 mb-4">
          Enter your parcel details
        </p>

        <hr className="mb-6 text-black-8/50" />

        {/* Radio */}
        <div className="flex gap-6 mb-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="document"
              {...register("type")}
              defaultChecked
              className="radio radio-success"
            />
            <span className="text-sm">Document</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              value="non-document"
              {...register("type")}
              className="radio radio-success"
            />
            <span className="text-sm">Not-Document</span>
          </label>
        </div>

        {/* Parcel Info */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="text-sm font-medium">Parcel Name</label>
            <input
              type="text"
              placeholder="Parcel Name"
              {...register("parcelName", {
                required: "Parcel name is required",
              })}
              className="input input-bordered w-full mt-1"
            />
            {errors.parcelName && (
              <p className="text-red-500 text-sm">
                {errors.parcelName.message}
              </p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">Parcel Weight (KG)</label>
            <input
              type="number"
              step="any"
              placeholder="Parcel Weight (KG)"
              {...register("parcelWeight", {
                required: "Weight is required",
              })}
              className="input input-bordered w-full mt-1"
            />
            {errors.parcelWeight && (
              <p className="text-red-500 text-sm">
                {errors.parcelWeight.message}
              </p>
            )}
          </div>
        </div>

        <hr className="mb-6 text-black-8/50" />

        {/* Sender & Receiver */}
        <div className="grid grid-cols-2 gap-10">
          {/* Sender */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">Sender Details</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Sender Name"
                {...register("senderName", {
                  required: "Sender name is required",
                })}
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
              {errors.senderName && (
                <p className="text-red-500 text-sm">
                  {errors.senderName.message}
                </p>
              )}

              <input
                type="text"
                placeholder="Address"
                {...register("senderAddress")}
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Sender Phone No"
                {...register("senderPhone", {
                  required: "Phone number is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.senderPhone && (
                <p className="text-red-500 text-sm">
                  {errors.senderPhone.message}
                </p>
              )}

              {/* sender division */}
              <select
                {...register("senderDivision", {
                  required: "Division is required",
                })}
                className="select select-bordered w-full text-gray-500"
              >
                <option value="">Select your Division</option>
                {division.map((divisionName, idx) => {
                  return <option key={idx}>{divisionName}</option>;
                })}
              </select>
              {errors.senderDivision && (
                <p className="text-red-500 text-sm">
                  {errors.senderDivision.message}
                </p>
              )}
              {/* sender district */}
              <select
                {...register("senderDistrict", {
                  required: "District is required",
                })}
                className="select select-bordered w-full text-gray-500"
              >
                <option value="">Select your District</option>
                {districtByDivision(senderDivision).map((districtName, idx) => {
                  return <option key={idx}>{districtName}</option>;
                })}
              </select>
              {errors.senderDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.senderDistrict.message}
                </p>
              )}

              <textarea
                placeholder="Pickup Instruction"
                {...register("pickupInstruction")}
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h2 className="font-semibold text-gray-800 mb-4">
              Receiver Details
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Receiver Name"
                {...register("receiverName", {
                  required: "Receiver name is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.receiverName && (
                <p className="text-red-500 text-sm">
                  {errors.receiverName.message}
                </p>
              )}

              <input
                type="text"
                placeholder="Address"
                {...register("receiverAddress")}
                className="input input-bordered w-full"
              />

              <input
                type="text"
                placeholder="Receiver Contact No"
                {...register("receiverPhone", {
                  required: "Phone number is required",
                })}
                className="input input-bordered w-full"
              />
              {errors.receiverPhone && (
                <p className="text-red-500 text-sm">
                  {errors.receiverPhone.message}
                </p>
              )}
              {/* receiver division */}
              <select
                {...register("receiverDivision", {
                  required: "Division is required",
                })}
                className="select select-bordered w-full text-gray-500"
              >
                <option value="">Select your Division</option>
                {division.map((divisionName, idx) => (
                  <option key={idx}>{divisionName}</option>
                ))}
              </select>
              {errors.receiverDivision && (
                <p className="text-red-500 text-sm">
                  {errors.receiverDivision.message}
                </p>
              )}
              {/* receiver District */}
              <select
                {...register("receiverDistrict", {
                  required: "District is required",
                })}
                className="select select-bordered w-full text-gray-500"
              >
                <option value="">Select your District</option>
                {districtByDivision(receiverDivision).map(
                  (districtName, idx) => (
                    <option key={idx}>{districtName}</option>
                  ),
                )}
              </select>
              {errors.receiverDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.receiverDistrict.message}
                </p>
              )}

              <textarea
                placeholder="Delivery Instruction"
                {...register("deliveryInstruction")}
                className="textarea textarea-bordered w-full h-24"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8">
          <p className="text-xs mb-4">* PickUp Time 4pm-7pm Approx.</p>

          <button
            type="submit"
            className="btn bg-primary hover:bg-lime-500 text-black border-none px-8"
          >
            Proceed to Confirm Booking
          </button>
        </div>
      </div>
    </form>
  );
};

export default SendParce;
