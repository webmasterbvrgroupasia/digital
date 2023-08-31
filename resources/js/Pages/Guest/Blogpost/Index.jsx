import Header from "@/Components/Guests/Header/Header.jsx";
import Guest from "@/Layouts/Layout/Guest.jsx";
import Section from "@/Layouts/Layout/LayoutAnimation.jsx";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import PostList from "@/Components/Guests/List/PostList.jsx";
import Pagination from "@/Components/Paginations/Pagination.jsx";

function Index({ posts }) {

    const { data, links, total, per_page } = posts;

    return (
        <>
            <Head>
                <title>Index Us</title>
                <meta
                    name="description"
                    content="BVR Digital Index Page Description"
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
                    data.map((item , i)=> (
                      <PostList item={item} key={i} />
                    ))
                }

                <div className="max-w-7xl mx-auto">
                    <Pagination links={links} perPage={per_page} total={total} background={"black"} />
                </div>

            </Guest>
        </>
    );
}

export default Index;
