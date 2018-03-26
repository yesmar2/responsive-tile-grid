import React from "react";
import Circle from "components/Circle";
import "./Grid.css";

const Grid = props => {
    const { circles } = props;

    return (
        <div className="grid">
            {circles.map((circle, index) => (
                <Circle
                    key={index}
                    title={circle.title}
                    linkTo={circle.linkTo}
                    color={circle.color}
                    icon={circle.icon}
                />
            ))}
        </div>
    );
};

export default Grid;
