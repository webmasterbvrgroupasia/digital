import React from "react";

function PostHeader({ altText, postTitle, createdAt }) {
    return (
        <>
            <header className="max-w-4xl mx-auto h-screen md:h-auto items-center flex px-4 md:px-4 lg:px-0">
                <div className="space-y-4 pt-16 md:pt-24">
                    <img className="h-96 w-full rounded-lg object-cover" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt={altText} />
                    <span className="text-neutral-300 block text-base md:text-lg">
                        Article by BVR Digital
                    </span>
                    <h1 className="font-semibold text-white text-5xl">
                        {postTitle}
                    </h1>
                    <p className="text-neutral-400 text-lg max-w-2xl">
                        {createdAt}
                    </p>
                </div>
            </header>
        </>
       
    );
}

export default PostHeader;
