import {Card} from "./Card.tsx";

export const CardGrid = () => {
    const cards = [
        { image: '../src/assets/images/Card/наращивание.PNG', title: 'Наращивание ресниц'},
        { image: '../src/assets/images/Card/косметология.JPG', title: 'Косметология'},
        { image: '../src/assets/images/Card/макияж.PNG', title: 'Макияж и прически'},
        { image: '../src/assets/images/Card/брови.JPG', title: 'Оформление бровей'},
        { image: '../src/assets/images/Card/ламинирование.JPG', title: 'Ламинирование и окрашивание ресниц'},
        { image: '../src/assets/images/Card/перманент.JPG', title: 'Перманентный макияж'},
    ];

    return (
        <div className="card-grid">
            {cards.map((card, index) => (
                <Card key={index} image={card.image} title={card.title} />
            ))}
        </div>
    );
};
