import React, {useState} from "react";
import {Head, Link, router} from "@inertiajs/react";
import Authenticated from "@/Layouts/Layout/AuthenticatedLayout.jsx";
import Pagination from "@/Components/Paginations/Pagination.jsx";
import BlogpostList from "@/Components/Admin/List/Index.jsx";
import AlertMessage from  "@/Components/Admin/Alert/Index.jsx";
import TableHeader from "@/Components/Admin/TableHeader/Index.jsx";
export default function Index({ auth, blogposts, session }) {
    const [alert, setAlert] = useState(session.success);

    const { data, links, per_page, total } = blogposts;

    function handleDelete(id) {
        router.delete(`/Admin/blogposts/${id}`)
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
                                <TableHeader data={["Title", "Content", "Description", "Keywords", "Tags", "action"]} />
                            </tr>
                            </thead>
                            <tbody>
                            {data ? (
                                data.map((post,i) => (
                                   <BlogpostList post={post} key={i} onDelete={handleDelete}/>
                                ))
                            ) : (
                                <div>Data is unavailable</div>
                            )}
                            </tbody>

                        </table>
                    </div>
                    <Pagination links={links} perPage={per_page} total={total} background={"white"} />
                </section>
            </Authenticated>
        </>
    )
}
