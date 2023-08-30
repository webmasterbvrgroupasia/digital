import Header from "@/Components/Guests/Header";
import Guest from "@/Layouts/Guest";
import Section from "@/Layouts/LayoutAnimation";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import PostList from "@/Components/Guests/PostList.jsx";

function Post({ posts }) {

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
                {
                    posts.data.map((item , i)=> (
                      <PostList item={item} key={i} />
                    ))
                }
            </Guest>
        </>
    );
}

export default Post;
