import { Head, Link } from "@inertiajs/react";
import Guest from "@/Layouts/Guest";

export default function Welcome() {
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
                {/* Hero Section Start */}
                <header className="h-screen flex items-end pb-44 max-w-5xl mx-auto">
                    <h1 className="text-neutral-100 font-bold text-2xl"></h1>
                </header>
                {/* Hero Section End */}

                {/* Introduction Section Start */}
                <section className="py-24 grid grid-cols-2 max-w-7xl mx-auto">
                    <div className="space-y-[16px]">
                        <h2 className="text-white capitalize leading-tight text-4xl font-extrabold">
                            Innovating brands with transformative digital
                            solutions.
                        </h2>
                        <p className="text-gray-400 text-xl font-normal">
                            Welcome to our creative agency! We specialize in
                            revolutionizing brands through cutting-edge digital
                            solutions that captivate, engage, and elevate your
                            business to new heights. Let's create magic
                            together!
                        </p>
                    </div>
                    <div className="space-y-[16px]">
                        <p className="text-gray-400 text-xl font-normal">
                            Track work across the enterprise through an open,
                            collaborative platform. Link issues across Jira and
                            ingest data from other software development tools,
                            so your IT support and operations teams have richer
                            contextual information to rapidly respond to
                            requests, incidents, and changes.
                        </p>
                        <p className="text-gray-400 text-xl font-normal">
                            Deliver great service experiences fast - without the
                            complexity of traditional ITSM solutions.Accelerate
                            critical development work, eliminate toil, and
                            deploy changes with ease, with a complete audit
                            trail for every change.
                        </p>
                    </div>
                </section>
                {/* Introduction Section End */}

                {/* Clients Section Start */}
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                        <div className="h-32 bg-gray-800 rounded-lg"></div>
                    </div>
                </section>
                {/* Clients Section End */}

                {/* Service Section Start */}
                <section className="pt-16 pb-24 space-y-[64px]">
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
                        <div className="p-6 bg-gray-800 text-white shadow-lg shadow-neutral-800/50 space-y-[8px] rounded-lg">
                            <div className="p-2 rounded-md bg-gray-700 w-fit drop-shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                                        clip-rule="evenodd"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">
                                Social Media Management
                            </h3>
                            <p className="text-base font-normal text-gray-400">
                                We keep Flowbite, secure, and free of spam and
                                abuse so that this can be the platform where
                                developers come together to create.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 text-white space-y-[8px] rounded-lg shadow-lg shadow-neutral-800/50 border border-gray-800">
                            <div className="p-2 rounded-md bg-gray-700 w-fit drop-shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">
                                Website Design and Development
                            </h3>
                            <p className="text-base font-normal text-gray-400">
                                We keep Flowbite, secure, and free of spam and
                                abuse so that this can be the platform where
                                developers come together to create.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 shadow-lg shadow-neutral-800/50 text-white space-y-[8px] rounded-lg">
                            <div className="p-2 rounded-md bg-gray-700 w-fit drop-shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z" />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">
                                Graphic Design
                            </h3>
                            <p className="text-base font-normal text-gray-400">
                                We keep Flowbite, secure, and free of spam and
                                abuse so that this can be the platform where
                                developers come together to create.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-800 shadow-lg shadow-neutral-800/50 text-white space-y-[8px] rounded-lg">
                            <div className="p-2 rounded-md bg-gray-700 w-fit drop-shadow-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                                    <path
                                        fill-rule="evenodd"
                                        d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold">
                                Photo and Video
                            </h3>
                            <p className="text-base font-normal text-gray-400">
                                We keep Flowbite, secure, and free of spam and
                                abuse so that this can be the platform where
                                developers come together to create.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Service Section End */}
                <section className="pt-16 pb-24 space-y-[64px]">
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
            </Guest>
        </>
    );
}
