import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/Layout/Guest.jsx";
import ServiceList from "@/Components/Guests/List/ServiceList.jsx";
import CompenyList from "@/Components/Guests/List/CompenyList.jsx";
import dataComponies from "@/utils/dataCompenies.js";
import { useRef } from "react";
import dataServiceList from "@/utils/dataListService";
import Section from "@/Layouts/Layout/LayoutAnimation.jsx";

export default function Welcome() {
    const ref = useRef(null);


    return (
        <>
            <Head>
                <title>Welcome</title>
                <meta
                    head-key="description"
                    name="description"
                    content="Welcome to BVR Digital"
                />
                <meta name="keywords" content="seo, search engine optimization"/>
            </Head>
            <Guest>
                <Section>
                    <header className="h-screen flex items-end pb-44 max-w-5xl mx-auto">
                        <h1 className="text-neutral-100 font-bold text-2xl">Testing user</h1>
                    </header>
                </Section>

                {/* Hero Section End */}

                {/* Introduction Section Start */}
                <Section>
                    <section className="py-24 px-10 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
                        <div className="space-y-[16px]">
                            <Section>
                                <h2 className="text-white capitalize leading-tight text-4xl font-extrabold">
                                    Innovating brands with transformative digital
                                    solutions.
                                </h2>
                            </Section>
                            <Section>
                                <p className="text-gray-400 text-xl font-normal">
                                    Welcome to our creative agency! We specialize in
                                    revolutionizing brands through cutting-edge digital
                                    solutions that captivate, engage, and elevate your
                                    business to new heights. Let's create magic
                                    together!
                                </p>
                            </Section>
                        </div>
                        <div className="space-y-[16px]">
                            <Section>
                                <p className="text-gray-400 text-xl font-normal">
                                    Track work across the enterprise through an open,
                                    collaborative platform. Link issues across Jira and
                                    ingest data from other software development tools,
                                    so your IT support and operations teams have richer
                                    contextual information to rapidly respond to
                                    requests, incidents, and changes.
                                </p>
                            </Section>
                            <Section>
                                <p className="text-gray-400 text-xl font-normal">
                                    Deliver great service experiences fast - without the
                                    complexity of traditional ITSM solutions.Accelerate
                                    critical development work, eliminate toil, and
                                    deploy changes with ease, with a complete audit
                                    trail for every change.
                                </p>
                            </Section>
                        </div>
                    </section>
                </Section>
              {/* Introduction Section End */}

                {/* Clients Section Start */}
                <Section>
                    <section className="py-24 max-w-7xl mx-auto space-y-[48px]">
                        <div className="space-y-[16px]">
                            <h2 className="text-white text-4xl font-extrabold text-center">
                                We're Trusted By More Than 50+ Companies
                            </h2>
                            <p className="text-gray-400 text-center w-1/2 mx-auto text-lg">
                                We use an agile approach to test assumptions and
                                connect with the needs of your audience early and
                                often.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" ref={ref}>
                            {
                                dataComponies.map((item, index) => (
                                    <CompenyList title={item.title} />
                                ))

                            }
                            {
                                dataComponies.map((item, index) => (
                                    <CompenyList title={item.title}/>
                                ))
                            }
                        </div>
                    </section>
                </Section>
                {/* Clients Section End */}

                {/* Service Section Start */}
                <Section>
                    <section className="pt-16 pb-24 space-y-[64px] px-4">
                        <div className="space-y-[16px] max-w-7xl mx-auto">
                            <h2 className="text-white text-4xl font-extrabold text-center">
                                Our Services List
                            </h2>
                            <p className="text-gray-400 text-center w-1/2 mx-auto text-lg">
                                We use an agile approach to test assumptions and
                                connect with the needs of your audience early and
                                often.
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {
                                dataServiceList.map((item, index) => (
                                    <ServiceList key={index} {...item} />
                                ))
                            }
                        </div>
                    </section>
                </Section>
                {/* Service Section End */}
                <Section>
                    <section className="pt-16 pb-24 space-y-[64px] px-5">
                        <div className="space-y-[16px] max-w-7xl mx-auto">
                            <h2 className="text-white text-4xl font-extrabold text-left">
                                Latest Article by BVR Digital
                            </h2>
                            <p className="text-gray-400 text-left w-1/2 text-lg">
                                We use an agile approach to test assumptions and
                                connect with the needs of your audience early and
                                often.
                            </p>
                        </div>
                        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        </div>
                    </section>
                </Section>
            </Guest>
        </>
    );
}


