
import Asdf from './Asdf'



function Arro(props){
    return(
        <div className='www'> { props.ContactData.map((SingelContact, index)=>{
        return <Asdf key={index} title={SingelContact.title} year={SingelContact.year} director={SingelContact.director} duration={SingelContact.duration} gerne={SingelContact.gerne} rate={SingelContact.rate} />;
    }
    )}</div>
    )

}

export default Arro;



