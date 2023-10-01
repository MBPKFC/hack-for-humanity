const ProviderCard = (props) => {
    return (
        <div className="bg-white my-4 rounded-md shadow-lg p-4">
            <p className="font-bold">{props.name}</p>
            <p>{props.address}</p>
            <p>{props.contact}</p>
            <p>{props.distance}</p>
        </div>
    )
};

export default ProviderCard;