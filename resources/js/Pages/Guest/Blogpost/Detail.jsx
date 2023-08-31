import PostHeader from "@/Components/Guests/Header/PostHeader.jsx";
import Guest from "@/Layouts/Layout/Guest.jsx";
import { Head } from "@inertiajs/react";
import React from "react";
import { Parser } from "html-to-react";

function Detail({ blogpost }) {


    return (
        <>
            <Head>
                <title>Portfolio Detailed Page</title>
                <meta
                    name="description"
                    content="BVR Digital blogposts Description"
                />
                <meta name="keywords" content="seo, websss design" />
            </Head>
            <Guest>
                <PostHeader
                    altText={"Test Alt Text"}
                    createdAt={blogpost.created_at}
                    postTitle={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores?"
                    }
                    image={blogpost.image}
                />
                <section className="max-w-4xl mx-auto pt-14 md:pt-24 pb-14 md:pb-24 px-4 md:px-4 lg:px-0 mt-20 md:mt-0">
                    <article className="space-y-4">
                        <h3 className="text-white text-lg font-bold">
                            {blogpost.title}
                        </h3>
                        <h3 className="text-white text-lg font-bold">
                            {blogpost.meta_keywords}
                        </h3>
                        <p className=" text-neutral-200 leading-relaxed">
                            {blogpost.meta_description}
                        </p>
                        <h3 className="text-white text-lg font-bold">
                            {blogpost.tags}
                        </h3>
                        <div className=" text-neutral-200 leading-relaxed">
                            {Parser().parse(blogpost.content)}
                        </div>
                        {/*<p className=" text-neutral-200 leading-relaxed">*/}
                        {/*    In an era where social media reigns supreme, an*/}
                        {/*    effective presence across platforms is*/}
                        {/*    non-negotiable. Our digital marketing agency crafts*/}
                        {/*    customized social media strategies tailored to your*/}
                        {/*    brand's voice and goals. From compelling content*/}
                        {/*    creation to real-time engagement with your audience,*/}
                        {/*    we've got it all covered. By harnessing the immense*/}
                        {/*    potential of platforms like Facebook, Instagram,*/}
                        {/*    Twitter, and LinkedIn, we'll help you forge*/}
                        {/*    meaningful connections, boost brand loyalty, and*/}
                        {/*    drive conversions.*/}
                        {/*</p>*/}
                        {/*<h3 className="text-white text-lg font-bold">*/}
                        {/*    Compelling Content Creation: Your Brand Story,*/}
                        {/*    Perfected*/}
                        {/*</h3>*/}
                        {/*<p className=" text-neutral-200 leading-relaxed">*/}
                        {/*    Compelling content lies at the heart of every*/}
                        {/*    successful digital marketing campaign. Our skilled*/}
                        {/*    content creators are adept at weaving narratives*/}
                        {/*    that resonate with your audience. Whether it's blog*/}
                        {/*    posts, infographics, videos, or interactive content,*/}
                        {/*    we create pieces that inform, entertain, and inspire*/}
                        {/*    action. By aligning content with your brand's values*/}
                        {/*    and your audience's interests, we facilitate*/}
                        {/*    authentic connections that foster trust and brand*/}
                        {/*    loyalty.*/}
                        {/*</p>*/}
                    </article>
                </section>
            </Guest>
        </>
    );
}

export default Detail;
