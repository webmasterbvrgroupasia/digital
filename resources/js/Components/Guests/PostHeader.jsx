import React from "react";
function PostHeader({ altText, postTitle, createdAt, image }) {

    function convertTimeStamp() {
        return  new Date(createdAt).toLocaleDateString("en-US")
    }
    return (
        <>
            <header className="max-w-4xl mx-auto h-screen md:h-auto items-center flex px-4 md:px-4 lg:px-0">
                <div className="space-y-4 pt-16 md:pt-24">
                    <img className="h-96 w-full rounded-lg object-cover" src={`http://127.0.0.1:8000/blogpost/${image}`} alt={altText} />
                    <span className="text-neutral-300 block text-base md:text-lg">
                        Article by BVR Digital
                    </span>
                    <h1 className="font-semibold text-white text-5xl">
                        {postTitle}
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl">
                        {convertTimeStamp()}
                    </p>
                </div>
            </header>
        </>

    );
}

export default PostHeader;
