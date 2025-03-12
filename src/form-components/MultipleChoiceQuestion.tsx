import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selectedChoice, setSelectedChoice] = useState<string>(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="multipleChoiceSelect">
                <Form.Label>Select an answer:</Form.Label>
                <Form.Select //dropdown
                    value={selectedChoice}
                    onChange={(e) => {setSelectedChoice(e.target.value)}}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <div>{selectedChoice === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
