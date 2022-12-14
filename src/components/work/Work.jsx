import React, { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "../home/navbar/Navbar";
import axios from "axios";
import { GlobalWork } from "./GlobalWork";
import { useSelector } from "react-redux";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
// import { Navbar } from "./navbar/Navbar";

export const Work = () => {
	const { user } = useSelector((state) => ({ ...state }));
	// console.log(user)
	const navigate = useNavigate()

	const [workdata, setWorkData] = useState([]);

	useEffect(() => {
		const getWorkData = async () => {
			const { data } = await axios.get(`${API}/getPosts`);
			setWorkData(data);
		};
		getWorkData();
	}, []);

	console.log(workdata);


	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(e)
		// const workname = e.target.value
		// console.log(workname)
		const name = user.name
		// console.log(user.email)
		const email = e.target.value
		const userEmail = user.email
		console.log(email)
		const data = await axios.post(`${API}/workmail`, {email ,  name, userEmail  })
			.then(res => res.data).catch(err => console.log(err));
		if(data){
			// setSuccess(true);
			navigate("/SuccessPageWork");
			return;
		}

	}


	return (
		<>
			<Navbar />
			<GlobalWork />
			{workdata.map((work, index) => {
				// console.log(work.image)
				return (
					<div key = {index} className="bg-gray-800 text-gray-50 pb-8">
						<div className="container grid grid-cols-12 mx-auto bg-gray-900">
							<div className="bg-no-repeat object-cover bg-gray-700 col-span-full lg:col-span-4" style={{ "backgroundImage": `url(${work.image})`, "backgroundPosition": "center", "backgroundBlendMode": "multiply", "backgroundSize": "cover" }}></div>
							<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
								<div className="flex justify-start">
									<span className="px-2 py-1 text-xs rounded-full bg-green-400 text-gray-900">{work.domain}</span>
								</div>
								<h1 className="text-3xl font-semibold">{work.title}</h1>
								<p className="flex-1 pt-2">{work.description}</p>
								<div rel="noopener noreferrer" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-green-400">
								<button onClick={handleSubmit} type="submit" value={work.email} name="workname"  clasName="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply here</button>
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
										<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
									</svg>
								</div>
								<div className="flex items-center justify-between pt-2">
									<div className="flex space-x-2">
										<div>
											<div rel="noopener noreferrer" className="flex items-center">
												<img src="https://imgs.search.brave.com/xVgGy3m90hhOvw7tJzt9Q5_KXNJKp_LjFuRIon2XLEk/rs:fit:571:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/dU1vOUlUZnJ1WFA4/aVF4OWNZY3F3SGFH/SiZwaWQ9QXBp" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
												<span className="hover:underline text-gray-400">{work.name}</span>
											</div>
											<p className="px-2 py-1 my-4 text-xs rounded-full bg-[#4c1d95] text-white">{work.college}</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)
			})}

		</>
	)
}