import './App.css';
import Card from './components/card';

let personDetails = [
  {
    name : 'Freelancer Nasim',
    bio : "Professional Web Developer",
    about : "If you are looking for a genius for this project, Then you are reading the right one.Over the last 10 years, I have been working as a Web Developer & Graphics Designer as well. I have higher experience in the following areas:",
    img : "https://cdn5.f-cdn.com/ppic/212907708/logo/19413960/jL56b/CROPPED_profile_logo_OKOKP_9ae63c0bafa002596202140f8f05d644.jpg?image-optimizer=force&format=webply&width=336",
  
  },
  {
    name : 'Sumit Saha',
    bio : "Mern Stack Developer",
    about : "If you are looking for a genius for this project, Then you are reading the right one.Over the last 10 years, I have been working as a Web Developer & Graphics Designer as well. I have higher experience in the following areas:",
    img : "https://cdn5.f-cdn.com/ppic/212907708/logo/19413960/jL56b/CROPPED_profile_logo_OKOKP_9ae63c0bafa002596202140f8f05d644.jpg?image-optimizer=force&format=webply&width=336"
  
  },
  
   {
    name : 'Hasin Hayder',
    bio : "Mern Stack Developer",
    about : "If you are looking for a genius for this project, Then you are reading the right one.Over the last 10 years, I have been working as a Web Developer & Graphics Designer as well. I have higher experience in the following areas:",
    img : "https://softexpo.com.bd/assets/media/speaker_photo/1676522040.jpg",
  
  },
  {
    name : 'Hasin Hayder',
    bio : "Mern Stack Developer",
    about : "If you are looking for a genius for this project, Then you are reading the right one.Over the last 10 years, I have been working as a Web Developer & Graphics Designer as well. I have higher experience in the following areas:",
    img : "https://softexpo.com.bd/assets/media/speaker_photo/1676522040.jpg",
  
  }
]


let App = () =>{
  return(
    <>
    <div className='wrapper'>
      <div className='header'>
        <h2>Top Freelancer</h2>
   
      </div>
      <div className='allTopFreelancerInfo'>
       
      {
        personDetails.map((person) => <Card person={person}/> )
      }
        


      </div>
    </div>
    </>
  )
}

export default App
