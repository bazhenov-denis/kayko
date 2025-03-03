import {Values} from "./Values.tsx";
import "./Values.css"

export const ValuesSection: React.FC = () => {
    const values = [
        {
            title: "Красота и уникальность",
            description: "Каждая наша услуга направлена на раскрытие индивидуальности и уникальности каждого человека.",
            imageUrl: "../src/assets/plug.JPG"
        },
        {
            title: "Комфорт",
            description: "Мы сделали все, чтобы приходя к нам, вы чувствовали себя свободно и непринужденно, как будто в кругу близких друзей.",
            imageUrl: "../src/assets/plug.JPG"
        },
        {
            title: "Забота",
            description: "Высокий сервис, как в дорогом отеле. В любой из наших студий вы попадаете в пространство, где главная цель – это забота о вас.",
            imageUrl: "../src/assets/plug.JPG"
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