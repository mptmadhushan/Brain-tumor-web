import React, { useEffect, useState } from "react";
import SidePanel from "../components/SidePanel";
import axios from "axios";
import SamplePiechart from "../components/samplepiechart";
import SampleBarChart from "../components/SampleBarchart";

function Dashboard() {
  const [respo, setResponse] = useState(null);
  useEffect(() => {
    getData()
  }, [])
  const getData = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://127.0.0.1:5000/detection",
      });
      console.log(response);
      setResponse(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main-body w-full bg-slate-100 h-screen">
      <div className="main-body-container h-full w-full flex flex-row">

        <div>
          <SidePanel/>
        </div>

        <div className="body-panel flex text-center flex-col w-full  p-5 mx-auto">


          <div className="option-panel flex flex-row w-full p-5 ">
              <div className="gender p-2 w-full text-center">
                <h3 className="text-lg font-semibold mb-2">Gender</h3>
                <div>
                  <label className="inline-flex items-center">
                    <input type="radio" name="gender" value="Male" />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="radio" name="gender" value="Female" />
                    <span className="ml-2">Female</span>
                  </label>
                </div>
              </div>

              <div className="situation w-full">
                <h3 className="text-lg font-semibold mb-2">Situation</h3>
                <div>
                  <label className="inline-flex items-center">
                    <input type="checkbox" name="situation" value="Diabetes" />
                    <span className="ml-2">Diabetes</span>
                  </label>
                  <label className="inline-flex items-center ml-4">
                    <input type="checkbox" name="situation" value="Cholesterol" />
                    <span className="ml-2">Cholesterol</span>
                  </label>
                </div>
              </div>


          </div>


          <div className="Chart-panel flex flex-row  mt-10 mx-auto w-full">

            <div className="mx-auto">
                <SamplePiechart/>
            </div>

            <div className="mx-auto ">
                <SamplePiechart/>
            </div>

          </div>

          <div className="Chart-panel flex flex-row  mt-10 mx-auto w-full">

            <div className="mx-auto w-full items-center text-center justify-center flex">
                <SampleBarChart/>
            </div>

           

          </div>

          

          


        </div>


      </div>
    </div>
  );
}

export default Dashboard;
