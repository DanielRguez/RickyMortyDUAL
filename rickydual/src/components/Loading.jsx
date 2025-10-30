import imageRickyMortySonrisa from "../imges/rick-morty.png"

export default function Loading() {
    return (
        <>
            <h3 className="title">Buscando personajes en el multiverso...</h3>
            <img src={imageRickyMortySonrisa} alt="Ricky & Morty" className="img-home"></img>
        </>
    )
}