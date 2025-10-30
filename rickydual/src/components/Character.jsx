

export default function Character({data}) {


    return (
        <div className="character-container">
        <div>
            <img src={data.image} alt={data.name}/>
        </div>
        <div>
            <h3>{data.name}</h3>
            <h6>
                { (data.status ==="Alive") ? (<span className="alive">Alive</span>
                ) : (
                   <span className="dead">Dead</span> 
                )}
            </h6>
            <p>
                <span className="text-grey">Episodios:</span>
                <span>{data.episode.length}</span>
            </p>
        </div>

        </div>
    )
}