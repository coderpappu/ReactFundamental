

let Card = ({person }) =>{
    
    return(
        <>
         <div className='singleTopFreelancer'>
          {/* freelancer profile image  */}
          <div className='profile'>
            <img src={person.img} alt='profile image'/>
          </div>
          {/* freelancer bio txt  */}
          <div className='bioTxt'>
            <h3>{person.bio}</h3>
          </div>
          {/* freelancer info  */}
          <div className='freelnacerInfo'>
            <h2>{person.name}</h2>
            <p>{person.about}</p>
          </div>

        </div>
        </>
    )
}


export default Card

