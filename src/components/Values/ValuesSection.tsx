import {Values} from "./Values.tsx";
import "./Values.css"

export const ValuesSection: React.FC = () => {
    const values = [
        {
            title: "Естественная красота",
            description: "Мы стремимся к тому, чтобы все процедуры подчеркивали естественные черты, создавая выразительные образы, не нарушающие гармонии",
            imageUrl: "../src/assets/values-1.PNG"
        },
        {
            title: "Профессионализм и внимание к деталям",
            description: "Мы используем только профессиональные и безопасные средства, работаем с клиентами на основе персонализированного подхода и максимального внимания к каждой детали",
            imageUrl: "../src/assets/values-2.PNG"
        },
        {
            title: "гармония внутреннего и внешнего",
            description: "умение сочетать в себе красоту и ум, нежность и силу",
            imageUrl: "../src/assets/values-3.JPG"
        }
    ];

    return (
        <div className="values-section">
            <h2>Наши ценности</h2>
            <div className="values-container">
                {values.map((value, index) => (
                    <Values
                        key={index}
                        title={value.title}
                        description={value.description}
                        imageUrl={value.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};