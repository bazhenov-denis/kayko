import {Card} from "./Card.tsx";

export const CardGrid = () => {
    const cards = [
        { image: '../src/assets/ресницы.jpg', title: 'Ресницы', description: 'Описание 1' },
        { image: '../src/assets/plug.JPG', title: 'Макияж', description: 'Описание 2' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 3', description: 'Описание 3' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 4', description: 'Описание 4' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 5', description: 'Описание 5' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 6', description: 'Описание 6' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 7', description: 'Описание 7' },
        { image: '../src/assets/plug.JPG', title: 'Карточка 8', description: 'Описание 8' },
    ];

    return (
        <div className="card-grid">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} title={card.title} description={card.description} />
            ))}
        </div>
    );
};
