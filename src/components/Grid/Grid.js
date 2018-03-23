import React from "react";
import Circle from "components/Circle";
import sizeMe from "react-sizeme";
import "./Grid.css";

const Grid = props => {
    const { circles, size } = props;

    const gridSpecs = [
        {
            minWidth: 1800,
            numColumns: 7
        },
        {
            minWidth: 1500,
            numColumns: 6
        },
        {
            minWidth: 1200,
            numColumns: 5
        },
        {
            minWidth: 900,
            numColumns: 4
        },
        {
            minWidth: 600,
            numColumns: 3
        },
        {
            minWidth: 0,
            numColumns: 2
        }
    ];

    const gutter = 25;

    const minGridSpecs = gridSpecs.filter(spec => spec.minWidth < size.width);

    const currentNumColumns = minGridSpecs.reduce(
        (max, currentObject) =>
            currentObject.numColumns > max ? currentObject.numColumns : max,
        minGridSpecs[0].numColumns
    );

    const circleWidth =
        (size.width - (currentNumColumns + 1) * gutter) / currentNumColumns;

    const gridStyle = {
        display: "grid",
        padding: `${gutter}px`,
        gridTemplateColumns: `repeat(${currentNumColumns}, 1fr)`,
        gridGap: `${gutter}px`,
        fontSize: `${circleWidth - 40}px`
    };

    return (
        <div style={gridStyle}>
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

export default sizeMe()(Grid);
