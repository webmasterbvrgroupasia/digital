import {Head} from "@inertiajs/react";
import React from "react";
import Guest from "@/Layouts/Layout/Guest.jsx";
import Section from "@/Layouts/Layout/LayoutAnimation.jsx";
import Header from "@/Components/Guests/Header/Header.jsx";

export default function  Index() {
    return (
        <>
            <Head>
                <title>Service</title>
                <meta
                    name="description"
                    content="BVR Digital Service"
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
            </Guest>
        </>
    )
}
