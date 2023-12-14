import React from 'react'
import './about.css'
import Profile from './profil.jpg'
import dogwalk from './dogwalk.jpeg'
import frans from './frans.jpeg'

const about = () => {
  return (
    <div>
       <img src={Profile} height="270"  alt="profile1" className='profile1'/>
       <img src={dogwalk} height="270"  alt="profile2" className='profile2'/>
       <img src={frans} height="270"  alt="profile3" className='profile3'/>
<div>
<p className="aboutMeIntro">
  I'm navigating life in the cozy center of Lund, a charming city renowned for its historic university 
  and unique blend of urban life and Scandinavian tranquility. Here, my partner and I, along with our 
  cat Frans, have found a comfortable living. 
By daytime, I like to immerse myself into the tech world, but beyond the coding screens,
 you'll often find me exploring the world with my trusty feline companion. Yes, I'm that person with a cat on a leash - he's got a sense of adventure too!
 </p>

 <div className='fade-in-element'>
<div className="placement">
<div class="element"></div>
</div></div>
<div className="placement2">
<div class="element2"></div>
</div>
 <p className="aboutMe2">
 I would summarize my life as blend of tech challenges, spending time in nature, and enjoying the relaxation I find in painting.
Lund itself holds a special academic place in my story; it's where I finished a degree in informatics, enjoyed the student
life and met interesting new people. Now, settled in central Lund, I cherish the mix of the academic energy and the
tranquility of nearby nature spots. </p>
<p className='aboutMe3'>
Being on the introvert side, I find my sweet spot juggling independent tech projects with groupbased coding.
 It's a balance that keeps things interesting. Group-based coding injects a different energy into my routine, fostering teamwork and shared insights. It's a dynamic shift from the solitary coding sessions, and I appreciate how the exchange of ideas brings a fresh perspective to the table.</p>
</div>
<p className='smallscreenText'>
  
  <div className="space"></div>
  I'm navigating life in the cozy center of Lund, a charming city renowned for
 its historic university and unique blend of urban life and Scandinavian tranquility. Here, my partner and I, along with our 
  cat Frans, have found a comfortable living. By daytime, I like to immerse myself into the tech world, but beyond the 
  coding screens, you'll often find me exploring the world with my trusty feline companion. Yes, I'm that person with a cat on
   a leash - he's got a sense of adventure too!<br></br><br></br>
   I would summarize my life as blend of tech challenges, spending time in nature, and enjoying the relaxation I find in painting.
Lund itself holds a special academic place in my story; it's where I finished a degree in informatics, enjoyed the student
life and met interesting new people. Now, settled in central Lund, I cherish the mix of the academic energy and the
tranquility of nearby nature spots. <br></br><br></br>
Being on the introvert side, I find my sweet spot juggling independent tech projects with groupbased coding.
 It's a balance that keeps things interesting. Group-based coding injects a different energy into my routine, 
 fostering teamwork and shared insights. It's a dynamic shift from the solitary coding sessions, and I appreciate
  how the exchange of ideas brings a fresh perspective to the table.
   </p>
    </div>
  )
}

export default about