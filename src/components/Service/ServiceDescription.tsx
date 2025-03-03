import './ServiceDescription.css';
import {Button} from "../Button/Button.tsx";



export const ServiceDescription = () => {
    const info = [
        { image: '../src/assets/студия-1.jpg', title: 'KAYKO-пространство для тех кто ценит себя', description: 'Мы создали пространство в Москве, где вы расслабляетесь, заряжаетесь энергией и чувствуете себя особенными. Наши мастера знают, как подчеркнуть вашу уникальность, потому что они фанаты своего дела и всегда в теме новых трендов. Атмосфера, качество и забота — всё, чтобы вы ушли с уверенностью и сияющей улыбкой.' },
        { image: '../src/assets/студия-3.webp', title: 'KAYKO-пространство для тех кто ценит себя', description: ' где вы расслабляетесь, заряжаетесь энергией и чувствуете себя особенными. Наши мастера знают, как подчеркнуть вашу уникальность, потому что они фанаты своего дела' },
    ];
    return (
        <div className="service-grid">
            <div className="service-description">
                <div className="text">
                    <h2>{info[0].title}</h2>
                    <p>{info[0].description}</p>
                    <Button className="servise-button"/>
                </div>
                <div className="image">
                    <img src={info[0].image} alt={info[0].title}/>
                </div>
            </div>
            <div className="service-description">
                <div className="text">
                    <h2>{info[1].title}</h2>
                    <p>{info[1].description}</p>
                    <Button className="servise-button"/>
                </div>
                <div className="image">
                    <img src={info[1].image} alt={info[0].title}/>
                </div>
            </div>
        </div>
    );
};

