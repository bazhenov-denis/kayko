import './ServiceDescription.css';
import {Button} from "../Button/Button.tsx";



export const ServiceDescription = () => {
    const info = [
        { image: '../src/assets/images/ServiceDescription/главная-1.jpg', title: 'KAYKO — это больше, чем просто    салон красоты.', description: 'Это место, где каждая женщина может восстановить связь с собой, повысить свою самооценку и научиться ценить свою уникальность' },
        { image: '../src/assets/images/ServiceDescription/главная-2.jpg', title: 'Миссия KAYKO', description: 'сделать так, чтобы каждая женщина вспомнила: любовь к себе — это первый шаг к истинной красоте. Создать  гармонию внутреннего и внешнего, умение сочетать в себе красоту и ум, нежность и силу' },
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

