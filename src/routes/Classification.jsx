import { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import SidePanel from "../components/SidePanel";
//identification
function Classification() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [respo, setResponse] = useState(null);
  const [respClassification, setRespClassification] = useState(null);

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
        url: "http://127.0.0.1:5000/identification",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response);
      setResponse(response.data);
      getHighestCategory(response.data.Identification.Type2Probability);
    } catch (error) {
      console.log(error);
    }
  };

  const getHighestCategory = () => {
    let highestPercentage = 0;
    let highestCategory = "";
    const data = respo.Identification.Type2Probability;

    for (const category in data) {
      const percentage = parseFloat(data[category]);

      if (percentage > highestPercentage) {
        highestPercentage = percentage;
        highestCategory = category;
      }
    }

    return highestCategory;
  };
  <div className="main-body w-full bg-slate-100 h-screen">
    <div className="main-body-container h-full w-full flex flex-row">
      <div>
        <SidePanel />
      </div>

      <div className="w-full justify-center items-center flex">
        <div className="bg-white mx-auto p-10 w-[80%] flex flex-col justify-center overflow-clip shadow-md shadow-slate-300 rounded-md">
          <h3 className="mb-3 text-center text-xl z-10">
            Brain Tumor calssification
          </h3>

          <div className="dash-body flex flex-row w-full p-3 justify-between space-x-3 items-center">
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
              <div className="mt-5">
                <button
                  onClick={() => handleSubmit()}
                  className="p-3 bg-sky-300 rounded-full w-[120px] text-white"
                >
                  Predict
                </button>
              </div>
            </div>

            {respo && (
              <div className="pre-process text-center p-2 w-full mb-5">
                <div className="p-5 mx-auto mt-10 flex flex-col w-full space-y-5 text-center justify-center ">
                  <div className="res w-full flex flex-row space-x-5 justify-between">
                    <div className=" mb-3 text-[14pt] border border-gray-300 rounded-md w-[70%]">
                      <span className="text-green-700 font-semibold p-2">
                        {respClassification}
                      </span>
                    </div>
                    <div>{/* <span className="text-red-500">%</span> */}</div>
                  </div>

                  <div className="res w-full flex flex-row space-x-5 justify-between">
                    <div className=" mb-3 text-[14pt] border border-gray-300 rounded-md w-[70%]">
                      <span className="text-green-700 font-semibold p-2">
                        {respo?.Identification?.ConfidentClass}
                      </span>
                    </div>
                    <div>{/* <span className="text-red-500">%</span> */}</div>
                  </div>

                  <div className="res w-full flex flex-row space-x-5 justify-between">
                    <div className=" mb-3 text-[14pt] border border-gray-300 rounded-md w-[70%]">
                      <span className="text-green-700 font-semibold p-2">
                        Survival Rate - {respo?.SurvivalRate}
                      </span>
                    </div>
                    <div>
                      <span className="text-red-500">%</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Classification;
