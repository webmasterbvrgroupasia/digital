import Header from "@/Components/Guests/Header";
import Guest from "@/Layouts/Guest";
import { Head } from "@inertiajs/react";
import { motion } from "framer-motion";
import {useState} from "react";
import Section from "@/Layouts/LayoutAnimation.jsx";

const listButton = ["Social Media Management", "Website Design and Development", "Photo and Video Production", "Graphic Design"];

function setListContent(index) {
    const listContent = [
        {
            title: "Social Media Management",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam architecto, itaque eaque nulla reiciendis recusandae incidunt voluptatum nisi voluptatibus perferendis saepe maiores voluptatem placeat vel!"
        },
        {
            title: "Website Design and Development",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam architecto, itaque eaque nulla reiciendis recusandae incidunt voluptatum nisi voluptatibus perferendis saepe maiores voluptatem placeat vel!"
        },
        {
            title: "Photo and Video Production",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam architecto, itaque eaque nulla reiciendis recusandae incidunt voluptatum nisi voluptatibus perferendis saepe maiores voluptatem placeat vel!"
        },
        {
            title: "Graphic Design",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam architecto, itaque eaque nulla reiciendis recusandae incidunt voluptatum nisi voluptatibus perferendis saepe maiores voluptatem placeat vel!"
        },

    ]

    return listContent.filter((item, i) => i === index);
}
export default function About() {
    const [index, setIndex] = useState(0);

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
                        subTitle={"About BVR Digital"}
                        mainTitle={"Lorem ipsum dolor sit."}
                        descriptionText={
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget est placerat."
                        }
                    />
                </Section>
                <section className="py-16 md:py-24">
                    <div className="text-center space-y-2">
                        <Section>
                            <div className="text-neutral-200 text-3xl">
                                Trusted by Global Brands
                            </div>
                        </Section>
                        <Section>
                            <div className="text-neutral-400 text-lg">
                                Lorem ipsum dolor sit amet
                            </div>
                        </Section>
                    </div>
                    <div></div>
                </section>
                <section className="py-16 md:py-24 space-y-8 z-50">
                    <div className="text-center">
                        <Section>
                            <div className="text-neutral-400 text-lg">
                                Our Services
                            </div>
                        </Section>
                        <Section>
                            <div className="text-neutral-100 text-3xl">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </Section>
                    </div>
                    <div className="max-w-6xl mx-auto p-6 border border-neutral-500 rounded-xl">
                        <Section>
                            <div className="w-full flex justify-between bg-neutral-900 p-4 rounded-lg text-white">
                                {listButton && (listButton.map((item, index) => (
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIndex(index)}
                                        className="bg-transparent hover:bg-white hover:text-neutral-900 p-2.5 rounded-lg transition-all ease-in-out duration-300">
                                        {item}
                                    </motion.button>
                                )))}
                            </div>
                        </Section>
                        <div className="grid grid-cols-2 gap-10 items-center py-6">
                            <Section>
                                <div className="">
                                    <img className="" src="https://framerusercontent.com/images/G0cHDj6WhSnj6IXZ02izieUKhI.svg" alt="" />
                                </div>
                            </Section>
                            {
                                setListContent(index).map(item => (
                                  <Section>
                                      <div className="space-y-2">

                                          <div className="text-white text-2xl">
                                              {item.title}
                                          </div>
                                          <div className="text-neutral-400">{item.description}</div>
                                      </div>
                                  </Section>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </Guest>
        </>
    );
}
