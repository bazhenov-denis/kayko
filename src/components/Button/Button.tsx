
import './Button.css';

export const Button = ({ className = '' }: { className?: string }) => {
    const handleClick = () => {
        window.location.href = "https://n1356161.yclients.com/company/1221585/personal/select-services?o=";
    };
    return (
        <button className={`button ${className}`} onClick={handleClick}>
            <p id={"buttonText"}>Записаться</p>
        </button>
    );
};