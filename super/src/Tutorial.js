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

const point = [3.3124, 14.52028, 10]; //coordinates

const [lat, lng, elevation] = point;

function sayHello() {
    return "Welcome!";
}

function getUser() {
    //return the id and a function that welcomes the user
    return [15, sayHello];
}
const result = getUser();
const [id, sayHello] = result;

*/
