import React from "react";
import { Link } from "react-router-dom";


function SidePanel()
{

    return(
        <div className="w-[300px] h-full bg-slate-700 flex justify-center items-center">
            <div className="side-panel-body p-5 w-full">
                    <ul className="space-y-10 text-white">
                        <Link to="/Dashboard"><li className="p-3 bg-sky-600 rounded-md mb-10">Dashboard</li></Link>
                        <Link to="/NewPatient"><li className="p-3 bg-sky-600 rounded-md mb-10">Patient Details</li></Link>
                        <Link to="/Preprocessing"><li className="p-3 bg-sky-600 rounded-md mb-10">Pre-processing</li></Link>
                        <Link to="/Detection"><li className="p-3 bg-sky-600 rounded-md mb-10">Detection</li></Link>
                        <Link to="/Classification"><li className="p-3 bg-sky-600 rounded-md mb-10">Classification</li></Link>
                        <li className="p-3 bg-sky-800 rounded-md mb-10">Sign Out</li>
                    </ul>
            </div>
        </div>
    );

   
}

export default SidePanel;