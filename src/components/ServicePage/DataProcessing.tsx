import { GetServices } from "./GetServices.tsx";
import { useEffect, useState } from "react";
import { GetCategory } from "./GetCategory.tsx";

// Определим интерфейс для данных, которые ты получаешь от API
interface Service {
    id: number;
    title: string;
    category_id: number; // Указываем поле category_id
    price_max: number;
}

interface CategoryMapping {
    [key: number]: string; // объект с ключами как id и значениями как название категории (categoryTitle)
}

export const DataProcessing = (serviceTitle: string) => {
    const [filteredServices, setFilteredServices] = useState<Service[] | null>(null); // Для хранения отфильтрованных услуг

    useEffect(() => {
        const fetchData = async () => {
            const data = await GetServices();

            // Убедимся, что data.data имеет правильный тип
            if (Array.isArray(data)) {
                // Собираем уникальные category_id
                const categoryIds = data.map((service: Service) => service.category_id);
                const uniqueCategoryIdsSet = new Set(categoryIds); // Убираем дубликаты
                const UniqueCategoryIds = Array.from(uniqueCategoryIdsSet);

                const categoryMappingTemp: CategoryMapping = {}; // Временный объект для хранения пар id и categoryTitle
                for (const id of UniqueCategoryIds) {
                    const categoryTitle = await GetCategory(id);
                    categoryMappingTemp[id] = categoryTitle; // Используем categoryTitle как значение
                }

                // Найдем нужную категорию по serviceTitle
                const targetCategoryId = Object.keys(categoryMappingTemp).find(
                    (key) =>
                        categoryMappingTemp[Number(key)].toLowerCase() === serviceTitle.toLowerCase() // Приводим оба значения к нижнему регистру
                );

                if (targetCategoryId) {
                    // Преобразуем строковый id категории в число
                    const targetCategoryIdNum = Number(targetCategoryId);

                    // Фильтруем все услуги, которые соответствуют найденной категории
                    const filtered = data.filter(
                        (service: Service) => service.category_id === targetCategoryIdNum
                    );

                    // Сохраняем отфильтрованные услуги в состоянии
                    setFilteredServices(filtered);
                }

                // Обновляем состояния
            }
        };
        fetchData();
    }, [serviceTitle]); // Добавляем serviceTitle в зависимости, чтобы обновлять данные при изменении serviceTitle
    return filteredServices
};
