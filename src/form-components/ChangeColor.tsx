import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function ChangeColor(): React.JSX.Element {
        const colors = [
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "orange",
            "pink",
            "brown",
        ];

        // State for tracking the selected color
        const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

        return (
            <div>
                <h3>Change Color</h3>
                <Form>
                    {colors.map((color) => (
                        <Form.Check
                            key={color}
                            type="radio"
                            name="colorOptions"
                            label={color}
                            value={color}
                            checked={selectedColor === color}
                            onChange={(e) => {setSelectedColor(e.target.value)}}
                            inline
                            style={{ color: color }} // Display text in corresponding color
                        />
                    ))}
                </Form>
                <div
                    data-testid="colored-box"
                    style={{
                        backgroundColor: selectedColor,
                        color: "white",
                        padding: "10px",
                        marginTop: "10px",
                        border: "1px solid black",
                        textAlign: "center",
                    }}
                >
                    {selectedColor}
                </div>
            </div>
        );
}
