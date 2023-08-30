import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import SidePanel from "../components/SidePanel";
//detection
function Detection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [respo, setResponse] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("DenoisedImage", `store/denoised/${selectedImage.name}`);
    try {
      const response = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/detection",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      setResponse(response.data);
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
          <div className="bg-white mx-auto p-10 w-[60%] flex flex-col justify-center overflow-clip relative  shadow-md shadow-slate-300 rounded-md">
            <h3 className="mb-3 text-center text-xl z-10">
              Brain Tumor Detection
            </h3>

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

              <div className="pre-process text-center p-2 w-full mb-5">
                <div className="prosess-img border border-gray-300 p-2 rounded-md w-full h-full"></div>

                <div className="mt-5">
                  <button
                    onClick={() => handleSubmit()}
                    className="p-3 bg-sky-300 rounded-full w-[120px] text-white"
                  >
                    Predict
                  </button>
                </div>
              </div>
            </div>

            <div className="p-5 mx-auto mt-10 flex md:flex-row sm:flex-col w-[80%] justify-center space-x-10 text-center">
              <div className="res w-full">
                <div className="w-full mb-3 text-[14pt] border border-gray-300 rounded-md">
                  <span className="text-green-700 font-semibold">positive</span>
                </div>
                <div>
                  <span>Result</span>
                </div>
              </div>

              <div className="res w-full">
                <div className="w-full mb-3 text-[14pt] border border-gray-300 rounded-md">
                  <span className="text-green-700 font-semibold">{respo?.PositivePercentage}</span>
                </div>
              </div>

              <div className="res w-full">
                <div className="w-full mb-3 text-[14pt] border border-gray-300 rounded-md">
                  <span className="text-green-700 font-semibold">{respo?.TumorExistence}</span>
                </div>
                <div>
                  <span>TumorExistence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detection;
