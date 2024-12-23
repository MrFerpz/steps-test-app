import { useState } from "react";

export default function Goal({goalTitle}) {
    return (
        <div className="goals-container">{goalTitle}
            <div className="box">
                <div className="box-dynamic-fill"></div>
            </div>
        </div>
    )
}