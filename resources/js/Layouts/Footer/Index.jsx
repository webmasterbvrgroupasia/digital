import LinkFooter from "@/Layouts/Footer/LinkFooter.jsx";
import SosialMedia from "@/Components/Guests/SosialMedia/Index.jsx";

export default function Index() {
    return (
        <>
            <footer className="border-t bg-black border-neutral-800 py-16 md:py-16 w-full">
                <div className="max-w-full md:max-w-2xl lg:max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-0">
                    <LinkFooter data={[
                        {title: "Home", link: "/"},
                        {title: "About Use", link: "/"},
                        {title: "Services", link: "/"},
                        {title: "Career", link: "/"},]}
                                title={"useful links"}
                    />
                    <LinkFooter data={[{title:"Blogposts", link:"/blogposts" }]}
                                title={"articles and blogposts"}
                    />
                    <LinkFooter data={[
                        {title: "Home", link: "/"},
                        {title: "About Use", link: "/"},
                        {title: "Services", link: "/"},
                        {title: "Career", link: "/"},]}
                                title={"link"}
                    />

                    <LinkFooter data={[
                        {title: "Home", link: "/"},
                        {title: "About Use", link: "/"},
                        {title: "Services", link: "/"},
                        {title: "Career", link: "/"},]}
                                title={"link"}
                    />
                </div>
                <div className="space-y-5 max-w-sm mx-0 md:mx-auto mt-16 px-4 md:px-0">
                    <img src="/images/vertical-white.png" className="w-20 mx-0 md:mx-auto" alt="BVR Digital" />
                    <div className="text-neutral-400 text-sm text-left md:text-center">
                        © 2023 BVR Digital. All rights reserved.
                    </div>
                    <div className="flex justify-start md:justify-center space-x-5">
                        <SosialMedia title={"Facebook"} />
                        <SosialMedia title={"Instagram"} />
                    </div>
                </div>
            </footer>
        </>
    );
}
