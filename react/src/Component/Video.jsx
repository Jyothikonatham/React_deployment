import Video1 from "../assets/v1.mp4";
import Video2 from "../assets/v2.mp4";
export function Video(){
    return(
        <>
        <video controls style={{ width: "400px"}}>
        <source src={Video1} type="video/mp4" />
      </video>

      <video controls style={{ width: "400px" }}>
        <source src={Video2} type="video/mp4" />
      </video>
        </>
    )
}