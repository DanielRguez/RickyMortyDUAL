import Character from "./Character"

export default function ListCharacters({list}) {


    return (
        <div className="characters">
            <h3 className="title" >Personajes</h3>
            <div className="container-characters">
                {list.map((character, index) => (
                    <Character key={index} data={character}/>
                ))}
            </div>
        </div>
    )
}