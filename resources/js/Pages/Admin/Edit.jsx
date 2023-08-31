import React from "react";
import {Head, router, useForm} from "@inertiajs/react";
import Authenticated from "@/Layouts/Layout/AuthenticatedLayout.jsx";
import TextEditor from "@/Components/Inputs/CkEditor.jsx";

export default function Edit({ auth, blogposts }) {
    const { data, setData, post, processing, errors, progress } = useForm({
        _method: 'put',
        title: blogposts.title,
        content: blogposts.content,
        meta_description: blogposts.meta_description,
        meta_keywords: blogposts.meta_keywords,
        tags: blogposts.tags,
        image: null
    });

    const handleSubmit = event => {
        event.preventDefault();

        router.post(`/Admin/blogposts/${blogposts.id}`, data);
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit Index
                </h2>
            }
        >
            <Head title="Add New Index" />
            <div className="max-w-7xl px-8 py-10 mx-auto">
                <section className="max-w-4xl p-8 bg-white rounded-lg drop-shadow-lg">
                    <div className="">
                        <form className="" onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label
                                    htmlFor="title"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    value={data.title}
                                    onChange={event => setData('title', event.target.value)}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Title.."
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="keywords"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Keywords
                                </label>
                                <input
                                    type="text"
                                    id="keywords"
                                    value={data.meta_keywords}
                                    onChange={event => setData('meta_keywords', event.target.value)}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Keywords.."
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="tags"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Tags
                                </label>
                                <input
                                    type="text"
                                    id="tags"
                                    value={data.tags}
                                    onChange={event => setData('tags', event.target.value)}
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                    placeholder="Tags...."
                                    required
                                />
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="image"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Image
                                </label>
                                <input
                                    type="file"
                                    id="image"
                                    onChange={event =>
                                        setData('image', event.target.files[0])
                                    }
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                />
                            </div>

                            <div className="mb-6">

                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="6"
                                          value={data.meta_description}
                                          onChange={event => setData('meta_description', event.target.value)}
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                          placeholder="Write your thoughts here..."></textarea>

                            </div>

                            <div className="mb-6">
                                <label htmlFor="content"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
                                <TextEditor content={data.content} onChange={event => setData("content",event)} />
                            </div>


                            <button
                                type="submit"
                                className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Update
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </Authenticated>
    )
}
