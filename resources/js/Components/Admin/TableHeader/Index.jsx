import React from "react";

export default function Index({ ...props}) {
    return (
        props.data.map((item) => (
            <th scope="col" className="px-6 py-5">
                {item}
            </th>
        ))
    )
}
