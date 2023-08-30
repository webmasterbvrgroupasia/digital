import PostHeader from "@/Components/Guests/PostHeader";
import Guest from "@/Layouts/Guest";
import { Head } from "@inertiajs/react";
import React from "react";

function Post() {
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
                    createdAt={"8th August 2023"}
                    postTitle={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, dolores?"
                    }
                />
                <section className="max-w-4xl mx-auto pt-14 md:pt-24 pb-14 md:pb-24 px-4 md:px-4 lg:px-0 mt-20 md:mt-0">
                    <article className="space-y-4">
                        <h3 className="text-white text-lg font-bold">
                            Introduction
                        </h3>
                        <p className=" text-neutral-200 leading-relaxed">
                            In the dynamic realm of business, a robust digital
                            presence is no longer a luxury – it's a necessity.
                            Welcome to BVR Digital, where we transform
                            businesses into online powerhouses through strategic
                            digital marketing solutions. With a focus on SEO,
                            social media management, content creation, and more,
                            we're your partners in achieving unparalleled online
                            success.
                        </p>
                        <h3 className="text-white text-lg font-bold">
                            The Power of SEO: Dominating Search Rankings
                        </h3>
                        <p className=" text-neutral-200 leading-relaxed">
                            Our agency excels in Search Engine Optimization
                            (SEO), a cornerstone of modern digital marketing.
                            Our team of skilled SEO experts employs cutting-edge
                            techniques to enhance your website's visibility on
                            search engines. By meticulously researching and
                            implementing relevant keywords, optimizing meta
                            tags, and refining your website's structure, we
                            ensure that your brand secures a prime spot in
                            search engine rankings. With our SEO strategies,
                            your business gains increased organic traffic and
                            the competitive edge it deserves.
                        </p>
                        <h3 className="text-white text-lg font-bold">
                            Strategic Social Media Management: Engage and
                            Conquer
                        </h3>
                        <p className=" text-neutral-200 leading-relaxed">
                            In an era where social media reigns supreme, an
                            effective presence across platforms is
                            non-negotiable. Our digital marketing agency crafts
                            customized social media strategies tailored to your
                            brand's voice and goals. From compelling content
                            creation to real-time engagement with your audience,
                            we've got it all covered. By harnessing the immense
                            potential of platforms like Facebook, Instagram,
                            Twitter, and LinkedIn, we'll help you forge
                            meaningful connections, boost brand loyalty, and
                            drive conversions.
                        </p>
                        <h3 className="text-white text-lg font-bold">
                            Compelling Content Creation: Your Brand Story,
                            Perfected
                        </h3>
                        <p className=" text-neutral-200 leading-relaxed">
                            Compelling content lies at the heart of every
                            successful digital marketing campaign. Our skilled
                            content creators are adept at weaving narratives
                            that resonate with your audience. Whether it's blog
                            posts, infographics, videos, or interactive content,
                            we create pieces that inform, entertain, and inspire
                            action. By aligning content with your brand's values
                            and your audience's interests, we facilitate
                            authentic connections that foster trust and brand
                            loyalty.
                        </p>
                    </article>
                </section>
            </Guest>
        </>
    );
}

export default Post;
