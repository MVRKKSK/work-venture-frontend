
import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { Navbar } from "../home/navbar/Navbar";
import { API } from "../../config";
import Cookie from "js-cookie";

export const Profile = () => {
    const { user } = useSelector((state) => ({ ...state }));
    const userdetails = user;
    const [workdata, setWorkData] = useState([]);

    // console.log(user)
    // console.log({user})

    const { email } = user

    useEffect(() => {
        const getWorkData = async () => {
            const { data } = await axios.post(`${API}/getPostsbyUser`, {
                email: email
            });
            setWorkData(data);
        };
        getWorkData();
    }, [email]);

    console.log(workdata)

    const [eventdata, setEventdata] = useState([]);

    useEffect(() => {
        try {
            async function getData() {
                const { data } = await axios.post(`${API}/getEventsByUser`, { email: user.email });
                // console.log(data)
                setEventdata(data);
                // console.log(eventdata)
            }
            getData();
        } catch (err) {
            console.log(err)
        }

    }, [user.email])


    const handlePostDelete = async (id) => {
        console.log(id)
        const { data } = await axios.post(`${API}/deletePost`, {
            id
        });
        console.log(data)
        window.location.reload();
    }

    const handleEventDelete = async (id) => {
        console.log(id)
        const { data } = await axios.post(`${API}/deleteEvent`, {
            id
        });
        console.log(data)
        window.location.reload();
    }

    const handleLogout = () => {
        Cookie.remove("user")
        window.location.reload();
    }

    return (
        <>
            <Navbar />

            <div class="p-16">
                <div class="shadow mt-24">
                    <div class="grid grid-cols-1 md:grid-cols-3">
                        <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
                            <div>
                                <p class="font-bold text-white text-md"></p>

                            </div>

                        </div>
                        <div class="relative">
                            <div class="w-24 h-24  bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>


                    </div>

                    <div class="mt-20 text-center border-b pb-12">
                        <h1 class="text-4xl font-medium dark:text-gray-500">{userdetails.name} <span class="font-light text-gray-500"></span></h1>
                        <p class="font-light text-gray-600 mt-3">{userdetails.email}</p>
                        <button onClick={handleLogout} class="font-bold text-white text-md">log out</button>

                        <p class="mt-8 text-gray-500"></p>
                        <p class="mt-2 text-gray-500">{userdetails.college}</p>


                    </div>

                    <div>

                        <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                            <div className="container max-w-6xl mx-auto space-y-6 sm:space-y-12">
                                <div className="space-y-2 text-center">
                                    <h2 className="text-3xl font-bold">Work Posts Posted By You</h2>
                                    <p className="font-serif text-sm dark:text-gray-400">Here are the latest Work Posts posted by you . You can delete after you find a member</p>
                                </div>
                                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {workdata.map((work, index) => {
                                        console.log(work.image)
                                        return (
                                            <div key={index} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                                                <img className="object-cover w-full rounded h-44 bg-gray-500" alt="" src={work.image} />
                                                <div className="p-6 space-y-2">
                                                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{work.title}</h3>
                                                    <p>{work.description}</p>
                                                    {/* <form onSubmit={handleSubmit}> */}
                                                    <button onClick={(e) => handlePostDelete(e.target.value)} type="submit" value={work._id} name="link" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100">Delete</button>
                                                    {/* </form> */}
                                                </div>

                                                {/* onClick={(e)=> handleEventDelete(e.target.value)} */}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </section>
                        <>
                            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                                <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                                    <div className="space-y-2 text-center">
                                        <h2 className="text-3xl font-bold">Events Posted by You</h2>
                                        <p className="font-serif text-sm dark:text-gray-400">Here are the latest Events . You can delete after you find a member</p>
                                    </div>
                                    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                        {eventdata.map((event, index) => {
                                            return (


                                                <div key={index} rel="noopener noreferrer" className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-gray-900">
                                                    <img className="object-cover w-full rounded h-44 bg-gray-500" alt="" src={event.image} />
                                                    <div className="p-6 space-y-2">
                                                        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{event.name}</h3>
                                                        <span className="text-xs text-gray-400">January 21, 2021</span>
                                                        <p>{event.description}</p>
                                                        {/* <form onSubmit={handleSubmit}> */}
                                                        <button onClick={(e) => handleEventDelete(e.target.value)} type="submit" value={event._id} name="link" className="px-8 py-3 font-semibold border rounded border-gray-100 text-gray-100">Delete</button>
                                                        {/* </form> */}
                                                    </div>

                                                    {/* onClick={(e)=> handleEventDelete(e.target.value)} */}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </section></>
                    </div>



                </div>
            </div>
        </>
    )
}