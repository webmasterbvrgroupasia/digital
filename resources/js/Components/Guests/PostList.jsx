import {Link} from "@inertiajs/react";

export default function PostList({ item }) {

    function sliceDescription(metaDescripition) {
        const splitDescription = metaDescripition.split(" ");
        const sliceDescription = splitDescription.slice(0, 25);
        return sliceDescription.join(' ');

    }


    return (
        <section className="max-w-5xl mx-auto grid grid-cols-12 py-16 md:py-24 z-50">
            <div className="col-span-12 md:col-span-8">
                <div className="space-y-2">
                    <h3 className="text-white text-2xl">
                        {item.title}
                    </h3>
                    <p className="text-neutral-400">
                        {sliceDescription(item.meta_description)}
                    </p>
                    <Link href={`/blogpost/detail/${item.id}`} className="text-blue-600 flex text-semibold items-center space-x-3">
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
    )
}
