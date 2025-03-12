import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>('');
    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={answer}
                onChange={(e) => {
                    setAnswer(e.target.value);
                }} //When a user types something, React passes an event object (e) to the function
                placeholder="Enter your answer"
            />
            <p>{answer === expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
