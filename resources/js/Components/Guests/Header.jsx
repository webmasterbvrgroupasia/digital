import React from "react";

function Header({subTitle, mainTitle, descriptionText}) {
    return (
        <header className="h-screen flex items-center justify-center static -z-10">
            <div className="absolute left-0 top-10">
                <img className="h-96"
                    src="https://framerusercontent.com/images/VAghYRak1orJZWcevSJLQXlxmM.svg"
                    alt=""
                />
            </div>
            <div className="text-center w-fit mx-auto absolute z-50 space-y-2 px-4">
                <span className="text-neutral-300 text-base md:text-lg">
                    {subTitle}
                </span>
                <h1 className="font-semibold text-white text-5xl">
                    {mainTitle}
                </h1>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    {descriptionText}
                </p>
            </div>
            <div className="absolute right-0 top-0">
                <img
                    className="h-96"
                    src="https://framerusercontent.com/images/EV0JayRnHcKEROFlY5vlvdol8G4.svg"
                    alt=""
                />
            </div>
        </header>
    );
}

export default Header;
