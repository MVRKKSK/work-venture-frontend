import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import event from "./event.svg"
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../config";

export const PostEvent = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const initialValues = {
        title: "",
        description: "",
        link: "",
        image: "",
        user: user.id
    }
    const [formdata, setFormdata] = useState(initialValues);


    const handleChange = async (e) => {
        const { name, value, files } = e.target;
        let imageUrl;
        if (name === "image") {
            const formData = new FormData();
            formData.append("file", files[0]);
            formData.append("fileName", files[0].name);
            const res = await axios.post(`${API}/uploadImages`, formData)

            imageUrl = res.data[0].url;
        }

        setFormdata({ ...formdata, [name]: name === "image" ? imageUrl : value });
    }
    console.log(formdata);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formdata.image)
        try {
            const data = await axios.post(`${API}/createEvent`, formdata).then((res) => {
                setSuccess(true)
                setError(false)

                return res.data
            }).catch((err) => {
                setError(true)
                console.log(err)
            });
            console.log(data)
        } catch (err) {

            console.log(err);
        }

    }
    return (
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-800 text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Start an Event</h2>
                    <div className="text-gray-400">Host an Event , Webinar , Workshop , Coding Camp</div>
                </div>
                <img src={event} alt="" className=" h-96 w-96 " />
            </div>
            <form onSubmit={handleSubmit} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label for="name" className="text-sm">Title</label>
                    <input name="title" onChange={handleChange} id="name" type="text" placeholder="" className="w-full border-2 border-white outline-none p-3 rounded bg-gray-800" />
                </div>
                <div>
                    <label for="email" className="text-sm">Event Link</label>
                    <input name="link" onChange={handleChange} id="email" type="email" className="w-full  p-3 rounded border-2  border-white outline-none bg-gray-800" />
                </div>
                <div>
                    <label for="message" className="text-sm">Description</label>
                    <textarea name="description" onChange={handleChange} id="message" rows="3" className="w-full  p-3 rounded border-2 border-white outline-none bg-gray-800"></textarea>
                </div>

                <fieldset className="w-full space-y-1 text-gray-100">
                    <label for="files" className="block text-sm font-medium">Select Image for Event</label>
                    <div className="flex">
                        <input name="image" type="file" onChange={handleChange} id="files" className="px-8 py-12 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800" />
                    </div>
                </fieldset>

                {/* <DatePicker name="date" selected={formdata.date} onChange={(date) => setDate(date)} /> */}


                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-400 text-gray-900">Launch Event</button>
                {error && <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl relative bg-gray-900 text-gray-100">
                    <div className="self-stretch flex items-center px-3 flex-shrink-0 bg-gray-700 text-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-8 w-8">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                    <div className="p-4 flex-1">
                        <h3 className="text-xl font-bold">Error</h3>
                        <p className="text-sm text-gray-400">There is an error on submitting your post please try again
                        </p>
                    </div>
                    <button className="absolute top-2 right-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>}
                {success && <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-gray-900 text-gray-100 divide-gray-700">
                    <div className="flex flex-1 flex-col p-4 border-l-8 border-green-400">
                        <span className="text-2xl">Success</span>
                        <span className="text-xs text-gray-400">Your Post was submitted successfully</span>
                    </div>
                    <button className="px-4 flex items-center text-xs uppercase tracking-wide text-gray-400 border-gray-700">Dismiss</button>
                </div>}
            </form>
        </div>
    )
}