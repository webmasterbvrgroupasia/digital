import Header from "@/Components/Guests/Header";
import Guest from "@/Layouts/Guest";
import { Head } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <Head>
                <title>About Us</title>
                <meta
                    name="description"
                    content="BVR Digital About Page Description"
                />
                <meta name="keywords" content="seo, websss design" />
            </Head>
            <Guest>
                <Header
                    subTitle={"About BVR Digital"}
                    mainTitle={"Lorem ipsum dolor sit."}
                    descriptionText={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget est placerat."
                    }
                />
                <section className="py-16 md:py-24">
                    <div className="text-center space-y-2">
                        <div className="text-neutral-200 text-3xl">
                            Trusted by Global Brands
                        </div>
                        <div className="text-neutral-400 text-lg">
                            Lorem ipsum dolor sit amet
                        </div>
                    </div>
                    <div></div>
                </section>
                <section className="py-16 md:py-24 space-y-8 z-50">
                    <div className="text-center">
                        <div className="text-neutral-400 text-lg">
                            Our Services
                        </div>
                        <div className="text-neutral-100 text-3xl">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <div className="max-w-6xl mx-auto p-6 border border-neutral-500 rounded-xl">
                        <div className="w-full flex justify-between bg-neutral-900 p-4 rounded-lg text-white">
                            <button className="bg-transparent hover:bg-white hover:text-neutral-900 p-2.5 rounded-lg transition-all ease-in-out duration-300">
                                Social Media Management
                            </button>
                            <button className="bg-transparent hover:bg-white hover:text-neutral-900 p-2.5 rounded-lg transition-all ease-in-out duration-300">
                                Website Design and Development
                            </button>
                            <button className="bg-transparent hover:bg-white hover:text-neutral-900 p-2.5 rounded-lg transition-all ease-in-out duration-300">
                                Photo and Video Production
                            </button>
                            <button className="bg-transparent hover:bg-white hover:text-neutral-900 p-2.5 rounded-lg transition-all ease-in-out duration-300">
                                Graphic Design
                            </button>
                        </div>
                        <div className="grid grid-cols-2 gap-10 items-center py-6">
                            <div className="">
                                <img className="" src="https://framerusercontent.com/images/G0cHDj6WhSnj6IXZ02izieUKhI.svg" alt="" />
                            </div>
                            <div className="space-y-2">
                                <div className="text-white text-2xl">
                                    Social Media Management
                                </div>
                                <div className="text-neutral-400">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam architecto, itaque eaque nulla reiciendis recusandae incidunt voluptatum nisi voluptatibus perferendis saepe maiores voluptatem placeat vel!
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Guest>
        </>
    );
}
