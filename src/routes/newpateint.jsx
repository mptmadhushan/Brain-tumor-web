import { useState } from "react";
import SidePanel from "../components/SidePanel";


function NewPatient()
{


    
        const [name, setName] = useState('');
        const [age, setAge] = useState('');
        const [gender, setGender] = useState('male');
        const [hasDiabetic, setHasDiabetic] = useState(false);
        const [hasCholesterol, setHasCholesterol] = useState(false);
      
        const handleNameChange = (e) => {
          setName(e.target.value);
        };
      
        const handleAgeChange = (e) => {
          setAge(e.target.value);
        };
      
        const handleGenderChange = (e) => {
          setGender(e.target.value);
        };
      
        const handleDiabeticChange = (e) => {
          setHasDiabetic(e.target.checked);
        };
      
        const handleCholesterolChange = (e) => {
          setHasCholesterol(e.target.checked);
        };
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          // Save data to the database or perform any necessary action
          const userData = {
            name,
            age,
            gender,
            hasDiabetic,
            hasCholesterol,
          };
          console.log(userData);
      
          // Reset form values
          setName('');
          setAge('');
          setGender('male');
          setHasDiabetic(false);
          setHasCholesterol(false);
        };


    return(
      <div className="main-body w-full bg-slate-100 h-screen">
        <div className="main-body-container h-full w-full flex flex-row">
            <div>
              <SidePanel/>
            </div>


            <div className="w-full justify-center items-center flex">
            <form onSubmit={handleSubmit} className="bg-white mx-auto rounded p-10 mb-4 w-[400px] h-[500px] flex flex-col justify-center overflow-clip relative shadow-sm ">
                
                <h3 className="mb-6 text-center text-xl z-10">New Patient</h3>
                    <div className="mb-4">
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
                        Name with initials
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-700">
                      Age
                    </label>
                    <input
                      type="number"
                      id="age"
                      value={age}
                      onChange={handleAgeChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Gender</label>
                    <div className="flex items-center space-x-4">
                      <label htmlFor="male" className="flex items-center">
                        <input
                          type="radio"
                          id="male"
                          value="male"
                          checked={gender === 'male'}
                          onChange={handleGenderChange}
                          className="form-radio focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Male</span>
                      </label>
                      <label htmlFor="female" className="flex items-center">
                        <input
                          type="radio"
                          id="female"
                          value="female"
                          checked={gender === 'female'}
                          onChange={handleGenderChange}
                          className="form-radio focus:ring-indigo-500 h-4 w-4 text-indigo-600"
                        />
                        <span className="ml-2 text-sm text-gray-700">Female</span>
                      </label>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Diabetic</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={hasDiabetic}
                        onChange={handleDiabeticChange}
                        className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Cholesterol</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        checked={hasCholesterol}
                        onChange={handleCholesterolChange}
                        className="form-checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Yes</span>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-3 bg-purple-300 hover:bg-purple-400 p-2 w-[130px] rounded-full text-white font-semibold"
                  >
                    Save
                  </button>
                </form>
            </div>
          </div>
      </div>

    );
}


export default NewPatient;