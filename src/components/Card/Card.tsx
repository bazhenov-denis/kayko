import './Card.css';
import {useNavigate} from "react-router-dom";

interface CardProps {
    image: string;
    title: string;
}

export const Card: React.FC<CardProps> = ({ image, title }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/service/${title.toLowerCase()}`); // URL формируется по названию услуги
    };

    return (
        <div className="card">
            <div className="card-image" onClick={handleNavigate}>
                <img src={image} alt={title} />
                <button className="card-button" onClick={handleNavigate}>{title}</button>
            </div>
        </div>
    );
};