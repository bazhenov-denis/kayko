import { useParams } from "react-router-dom";
import "./ServisePage.css";
import info from "./info.json";
import { DataProcessing } from "./DataProcessing.tsx";
import {Button} from "../Button/Button.tsx";


export const ServicePage = () => {
    const { serviceId } = useParams()
    console.log(serviceId)
    const service = serviceId ? info.users[serviceId as keyof typeof info.users] : null;

    if (!service) {
        return (
            <div className="info">
                <h1>Услуга не найдена</h1>
            </div>
        );
    }

    const renderTextWithLineBreaks = (text: string) => {
        return text.split("\n").map((item, index) => (
            <span key={index}>
                {item}
                <br/> <br/>
            </span>
        ));
    };

    // Безопасно вызываем DataProcessing, если serviceId существует
    const data = (serviceId ? DataProcessing(serviceId) : []) || [];

    return (
        <div className="info">
            <div className="container">
                <div className="servise-image">
                    <img src={service.image} alt={service.title}/>
                    <h1 className="title">{service.title}</h1>
                </div>
                <p className="description">{service.description}</p>
                <Button></Button>
                <div className="service-list">
                    {data.length > 0 ? (
                        data.map((yclients) => (
                            <div key={yclients.id} className="service-item">
                                <h3>{yclients.title}</h3>
                                <p>{yclients.price_max}</p>
                            </div>
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
                <h2>Особенности</h2>
                <p className="description">
                    {renderTextWithLineBreaks(service.features)}
                </p>
            </div>
        </div>
    );
};
