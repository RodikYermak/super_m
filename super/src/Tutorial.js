// React.createElemnent
// React.createElement(type, props, children)

/*




import React from "react";
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(React.createElement("p", {}, "Hello World"));

import React from "react";
import {createRoot} from "react-dom/client";

const root = document.querySelector("#root");
createRoot(root).render(<h1>Hello World</h1>);


<input max={2} disabled={true} className="textbox" />

import clsx from "clsx";

function MyComponent(props) {
    const className = clsx({
        "text": true, // this class is always added
        "title": props.loggedIn
    });

    return <h1 className={className}></h1>
}


function Navbar(props) {
    const {children, ...rest} = props;
    return <h1 {...rest}>{children}</h1>;
}
*/
