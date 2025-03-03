import { useParams } from "react-router-dom";

import info from "./info.json";

/*const serviceData = {
    ресницы: { title: "Ресницы", description: "Описание услуги по ресницам" },
    макияж: { title: "Макияж", description: "Описание услуги по макияжу" },
    карточка3: { title: "Карточка 3", description: "Описание 3", },
    карточка4: { title: "Карточка 4", description: "Описание 4" },
    карточка5: { title: "Карточка 5", description: "Описание 5" },
    карточка6: { title: "Карточка 6", description: "Описание 6" },
    карточка7: { title: "Карточка 7", description: "Описание 7" },
    карточка8: { title: "Карточка 8", description: "Описание 8" },
};*/

export const ServicePage = () => {
    const { serviceId } = useParams();
    const service = info.users[serviceId as keyof typeof info.users];
    console.log(info.users);

    if (!service) {
        return (
            <div>
                <h1>Услуга не найдена</h1>
            </div>
        );
    }

    return (
        <div>
            <main style={{ padding: "20px", textAlign: "center" }}>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <img src={"../src/assets/студия-1.jpg"} alt={service.title}/>
            </main>
        </div>
    );
};
