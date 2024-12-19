function Competence({ competence }) {
    return (
        <>
            {competence.map((imgSrc, index) => (
                <img key={index} src={imgSrc} alt={`Competence ${index}`} />
            ))}
        </>
    );
}

export default Competence;
