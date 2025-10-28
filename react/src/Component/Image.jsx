import lotus from "../assets/lotus.jpg"
import lotus2 from "../assets/lotus1.jpg"
export default function Content1(){
    return(
    <>
            <img src={lotus} alt="Lotus"style={{width:300}} />
            <br />
            <img src={lotus2} alt="Lotus" style={{width:300}}/>
            <br />
            <img src="lotus2.jpg" alt="" style={{width:300}}/>
    </>        
    )
}