import Header from "@/Components/Guests/Header/Header.jsx";
import Guest from "@/Layouts/Layout/Guest.jsx";
import Section from "@/Layouts/Layout/LayoutAnimation.jsx";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Index() {
    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta
                    name="description"
                    content="BVR Digital portfolio Description"
                />
                <meta name="keywords" content="seo, websss design" />
            </Head>
            <Guest>
                <Section>
                    <Header
                        subTitle={"Index"}
                        mainTitle={"Our Best Works"}
                        descriptionText={
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eius."
                        }
                    />
                </Section>
                <section className="py-16 md:py-24 px-4 z-50">
                    <div className="max-w-6xl mx-auto grid grid-cols-12 gap-5">
                        <div className="col-span-12 md:col-span-6 lg:col-span-6 rounded-lg overflow-hidden border border-neutral-800">
                            <div>
                                <img
                                    className="h-72 w-full object-cover"
                                    src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/320398170.jpg?k=24bc291d55e011b3813dc1899854cfb03d80126586d1bf9714b9cec2ebfdf306&o=&hp=1"
                                    alt=""
                                />
                            </div>
                            <div className="p-5 space-y-4">
                                <span className="block w-fit bg-blue-100 text-blue-600 px-2.5 py-1 text-xs rounded">
                                    Social Media Management
                                </span>
                                <div>
                                    <h2 className="text-white text-2xl">
                                        Vije Boutique Resort
                                    </h2>
                                    <p className="text-neutral-400">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Tempora non
                                        consequatur voluptate, vitae,
                                        necessitatibus enim nesciunt adipisci
                                        quasi quas rem rerum alias placeat,
                                        corporis at!
                                    </p>
                                </div>
                                <div>
                                  <Link href="/portfolio/detail" className="text-blue-600">
                                    More Details
                                  </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </Guest>
        </>
    );
}

export default Index;
