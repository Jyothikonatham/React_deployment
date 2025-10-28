import Audio1 from "../assets/audio.mp3"
export function Audio(){
    return(
        <>
        <audio controls>
            <source src={Audio1}/>
        </audio>
        </>
    )
}