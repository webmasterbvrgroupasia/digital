import React, {useState} from "react";
import {Head, Link, router} from "@inertiajs/react";
import AlertMessage from "@/Components/AlertMessage.jsx";
import Authenticated from "@/Layouts/AuthenticatedLayout.jsx";
import Pagination from "@/Components/Pagination.jsx";
import { Parser } from "html-to-react";

export default function Blogpost({ auth, blogposts, session }) {
    const [alert, setAlert] = useState(session.success);

    const { data, links, per_page, total } = blogposts;

    function handleDelete(id) {
        router.delete(`/admin/blogposts/${id}`)
    }

    function sliceDescription(metaDescripition) {
        const splitDescription = metaDescripition.split(" ");
        const sliceDescription = splitDescription.slice(0, 5);
        return sliceDescription.join(' ');

    }

    return (
        <>
            <Authenticated
                user={auth.user}
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Blogpost
                    </h2>
                }
            >
                <Head title="Admin Asset" />
                {
                    alert && (
                        <AlertMessage message={session.message} setAlert={setAlert} />
                    )
                }
                <section className="max-w-7xl mx-auto py-8 bg-white mt-10 rounded-lg px-8">
                    <div className="flex w-full items-center justify-between">
                        <div className="text-neutral-900 font-semibold text-lg">
                            Blogposts Management
                        </div>
                        <div className="">
                            <Link href={route('blogposts.create')} className="bg-blue-700 py-2.5 px-5 rounded text-sm text-white font-nedium">
                                Add Assets
                            </Link>
                        </div>
                    </div>

                    <div className="relative overflow-x-auto mt-10">
                        <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-5">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Keywords
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Tags
                                </th>
                                <th scope="col" className="px-6 py-5">
                                    Action
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {data ? (
                                data.map((post,i) => (
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                            scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {post.title}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {Parser().parse(post.content)}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {sliceDescription(post.meta_description)}....
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {post.meta_keywords}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-6 py-5 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {post.tags}
                                        </th>
                                        <td className="px-6 py-5 flex space-x-4">
                                            <Link href={`blogposts/${post.id}/edit`}>
                                                Edit
                                            </Link>
                                            <button onClick={() => handleDelete(post.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div>Data is unavailable</div>
                            )}
                            </tbody>

                        </table>
                    </div>
                    <Pagination links={links} perPage={per_page} total={total} />
                </section>
            </Authenticated>
        </>
    )
}
