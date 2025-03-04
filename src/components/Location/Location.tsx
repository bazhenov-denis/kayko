
import './Location.css';

export const Location = () => {

    return (
        <div className="location">
            <div className="location-info">
                <h3>
                    ЖК «Символ» <br/>
                    Москва, ул. Золоторожский вал, 11 строение 22
                </h3>
                <p>+7 916 524 8880</p>
                <p>Часы работы: 10:00-22:00</p>
            </div>
            <div className="location-image">
                <img src={"../src/assets/студия-2.jpg"}/>
            </div>
        </div>
    );
};