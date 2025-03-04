import axios from "axios";

const API_URL = "https://api.yclients.com/api/v1"; // Базовый URL API
const PARTNER_TOKEN = "csy4ggde9xf4pzpd956d"; // Замените на реальный токен
const USER_TOKEN = "71c4a7d6b77357d4aceb50ed5dcacdf9"; // Замените на реальный токен
const companyId = 1221585; // Замените на свой ID компании


export const GetServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/company/${companyId}/services`, {
            headers: {
                Accept: "application/vnd.yclients.v2+json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${PARTNER_TOKEN}, User ${USER_TOKEN}`
            },
        });
        return response.data.data;
    } catch (error) {
        console.error("Ошибка при получении категории услуг:", error);
        return null;

    }
};
