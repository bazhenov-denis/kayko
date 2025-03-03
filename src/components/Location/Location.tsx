
import './Location.css';

export const Location = () => {

    return (
        <div className="location">
            <div className="info">
                <h2>
                    Большой Харитоньевский пер. 9
                </h2>
                <p>+7 (499) 388-92-31</p>
                <p>Часы работы пн.-вс.: 9:00-22:00</p>
            </div>
            <div className="image">
                <img src={"../src/assets/студия-1.jpg"}/>
            </div>
        </div>
    );
};