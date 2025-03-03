import "./Values.css"

type ValuesProps = {
    title: string;
    description: string;
    imageUrl: string;
};

export const Values: React.FC<ValuesProps> = ({ title, description, imageUrl }) => (
    <div className="value">
        <div className="value-image">
            <img src={imageUrl} alt={title} className="value-img" />
            <div className="value-dark-overlay"></div> {/* Затемняющий слой */}
            <div className="value-text">
                <h3 className="value-title">{title}</h3>
                <p className="value-description">{description}</p>
            </div>
        </div>
    </div>
);