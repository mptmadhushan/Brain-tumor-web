import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SidePanel from "../components/SidePanel";
//denoise
function Preprocessing() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [respo, setResponse] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("DenoisedImage", selectedImage);
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/detection",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-body w-full bg-slate-100 h-screen">
      <div className="main-body-container h-full w-full flex flex-row ">
        <div>
          <SidePanel />
        </div>

        <div className="w-full justify-center items-center flex">
          <div className="bg-white mx-auto p-10 h-[50%] flex flex-col justify-center overflow-clip shadow-md shadow-slate-300 rounded-md">
            <h3 className="mb-3 text-center text-xl z-10">Pre processing</h3>

            <div className="dash-body flex flex-row w-full p-3 justify-between space-x-3">
              <div className="upload-image text-center p-2 w-full">
                <div className="upload border border-gray-300 p-2 rounded-md w-full">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="image-upload"
                  />
                  <label
                    htmlFor="image-upload"
                    className="block cursor-pointer text-[32pt]"
                  >
                    <span className="sr-only">Upload an Image</span>
                  </label>
                  {selectedImage && (
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      className=" mx-auto w-full h-full object-cover rounded-md"
                    />
                  )}
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="image-upload"
                    className="mt-3 bg-purple-300 p-2 w-[130px] rounded-full text-white font-semibold cursor-pointer"
                  >
                    Upload an Image
                  </label>
                </div>
              </div>
              <div className="mt-5">
                  <button
                    onClick={() => handleSubmit()}
                    className="p-3 bg-sky-300 rounded-full w-[120px] text-white"
                  >
                    Predict
                  </button>
                </div>

              <div className="pre-process text-center p-2 w-full">
                <div className="prosess-img border border-gray-300 p-2 rounded-md w-full h-full"></div>

                <div className="mt-5">
                  <h4> Pre-Processed Image</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preprocessing;
