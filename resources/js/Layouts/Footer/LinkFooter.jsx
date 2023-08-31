import { Link } from "@inertiajs/react";

export default function LinkFooter({ ...props  }) {
    return (
        <div className="space-y-4">
            <div className="text-white font-bold uppercase">
                {props.title}
            </div>
            <ul className="text-neutral-400 space-y-4">
                {
                    props.data.map((item) => (

                        <li>
                            <Link href={item.link}>{item.title}</Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
