import Header from "@/Components/Guests/Header";
import Guest from "@/Layouts/Guest";
import Section from "@/Layouts/LayoutAnimation";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Post() {
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
                <Section>
                    <Header
                        subTitle={"Selected Articles by The Digital Team"}
                        mainTitle={"Lorem ipsum dolor sit."}
                        descriptionText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget est placerat."
                        }
                    />
                </Section>
                <section className="max-w-5xl mx-auto grid grid-cols-12 py-16 md:py-24 z-50">
                    
                    <div className="col-span-12 md:col-span-8">
                        <div className="space-y-2">
                            <h3 className="text-white text-2xl">
                                Lorem ipsum dolor sit amet.
                            </h3>
                            <p className="text-neutral-400">
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Ducimus neque alias laudantium
                                culpa a excepturi porro beatae corrupti, enim
                                dolorum et cum autem, unde at?
                            </p>
                            <Link href="/blogpost/detail" className="text-blue-600 flex text-semibold items-center space-x-3">
                                <div>Read More</div>
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="w-4 h-4"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
            </Guest>
        </>
    );
}

export default Post;
