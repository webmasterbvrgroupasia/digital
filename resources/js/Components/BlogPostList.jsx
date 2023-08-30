import {Parser} from "html-to-react";
import {Link} from "@inertiajs/react";

export default function BlogPostList({ post, onDelete }) {

    function sliceDescription(metaDescripition) {
        const splitDescription = metaDescripition.split(" ");
        const sliceDescription = splitDescription.slice(0, 5);
        return sliceDescription.join(' ');

    }

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
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
                <button onClick={() => onDelete(post.id)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}
