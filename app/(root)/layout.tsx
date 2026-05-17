import React from "react";

export default function  layout({children}:{children:React.ReactNode}) {
    return (
        <div className={"flex flex-col"}>
            <h1>Navbar</h1>
            {children}
        </div>
    )
}