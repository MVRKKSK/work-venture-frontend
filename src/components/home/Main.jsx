import React from "react";
import logo from "./navbar/logo.png"

export const Main = () => {
    return (
        <>
            <section className="dark:bg-gray-800 text-gray-50">
                <div className="container px-6 py-12 mx-auto">
                    <div className="grid items-center gap-4 xl:grid-cols-5">
                        <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                            <h2 className="text-4xl font-bold">Welcome to Work Venture</h2>
                            <p className="dark:text-gray-400">Work venture is a place where you and everybody grow by working on projects globally and also in college</p>
                            <img alt="" src={logo} />
                        </div>
                        <div className="p-6 xl:col-span-3">
                            <div className="grid gap-4 md:grid-cols-2">
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>Do you want to attend or host any events and want people to join the event globally across the world
                                            to make it a grand success then Work Venture consists of a platform where you can host events globally..
                                        </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                           
                                            <div>
                                                <p className="text-lg font-semibold">Events</p>
                                                <p className="text-sm dark:text-gray-400">Host</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>Have any doubt or want to discuss with anyone something then work venture is the right place to make it happen . In the live Discussion panel user can discuss their doubt or ask anything with the users around the world in just one click .</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            
                                            <div>
                                                <p className="text-lg font-semibold">Discussion Page</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid content-center gap-4">
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>In this Era of competition the early graduate or post graduate students always think about of new ideas and want to make it live with some developers , this can happen by work venture where you can ask other developers to work in your project world wide . </p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            
                                            <div>
                                                <p className="text-lg font-semibold">Work Section</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 rounded shadow-md dark:bg-gray-900">
                                        <p>As Each and every developers follows mails regularly , work venture send each and every update to the user withing seconds by just clicking the apply or register button . And it just happens in one click</p>
                                        <div className="flex items-center mt-4 space-x-4">
                                            
                                            <div>
                                                <p className="text-lg font-semibold">Email authentication</p>
                                                {/* <p className="text-sm dark:text-gray-400">CTO of Company Co.</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="dark:bg-gray-800 text-gray-50">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-green-400">
                                <h3 className="text-3xl font-semibold">Want to Work on Project / Start an Event </h3>
                                <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">It all takes 3 steps</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Start or Post</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Step 1</time>
                                    <p className="mt-3">Go to events or work page and post about the details of the project</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Enter the Details</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">step 2</time>
                                    <p className="mt-3">Enter the event or work details where both college and global people can see your post</p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-green-400">
                                    <h3 className="text-xl font-semibold tracking-wide">Check Email</h3>
                                    <time className="text-xs tracking-wide uppercase dark:text-gray-400">Step 3</time>
                                    <p className="mt-3">People who are interested in the project or Event will get update using the Email</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}