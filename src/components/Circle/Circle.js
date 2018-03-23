import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faRegular from "@fortawesome/fontawesome-free-regular";

import "./Circle.css";

// import "./CircleColorGradient.css";

class Circle extends Component {
    render() {
        const { title, color, linkTo, icon } = this.props;

        return (
            <Link to={linkTo} className={`circle ${color}`}>
                <div className="content">
                    {icon && <FontAwesomeIcon icon={faRegular[icon]} />}
                    {/* <p>{title}</p> */}
                </div>
            </Link>
        );
    }
}

export default Circle;
