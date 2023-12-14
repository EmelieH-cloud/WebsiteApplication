import React from 'react'
import { LuCalendarDays } from "react-icons/lu";
import { RiTeamFill } from "react-icons/ri";
import './header.css'


const header = () => {
  return (
    <div className="mainC">
    <div className="headerContainer">
     <h1 className='typewriter1'>Hello there</h1> 
     </div>
     <div className="paragraphContainer">
     <p className="fade-in-element">      <h1><span className='Hi'>I'm Emelie.</span>
     <div className='calendericon'><LuCalendarDays /></div>
     <div className='teamicon'><RiTeamFill /></div>

      </h1>
      <div class="slider-thumb"></div>
I'm a software development student based in Sweden, and I've been inspired by the positive culture and purposeful spirit described by your organisation. The prospect of contributing to a dynamic environment like yours is particularly appealing to me as I am approaching my first internship in tech.
Passionate about diversity and collaboration, I'm beyond excited to enhance my skills in a workplace where human connection is the foundation of progress. The emphasis on growth, lifelong learning, and a strong social community at your workplace aligns perfectly with my values.
<br></br><br></br>To provide insight into my journey in software development, I've crafted this website to complete my application with a personal touch. I invite you to explore and welcome the opportunity on how I can contribute during a potential internship.
I look forward to connecting with you! 
      </p>
      </div>
   <div className="line"></div>
   <div className="internshipDetails">
    <h1 className="howItWorks">The internship</h1> 
    <p className="interndescription">It is entirely free to host an internship student. No compensation is exchanged between the parties. All that is required from your company is commitment, clear tasks, the right tools, and a supervisor.</p>
    <h2 className="When">When</h2>
    <p className="interndescription">The internship period is called LIA,
which is an abbreviation for "learning by doing". Newton's programme will divide the internship into two time periods, where the first one is scheduled for
    <span className='embold'> 2024-09-23 to 2024-12-13</span> and the second one is slated for 2025-03-10 to 2025-05-30. </p>
   <h2 className="Who">Who</h2>
   <p className="interndescription2">
As a supervisor, you are expected to guide the student through tasks and provide them with the opportunity to 
apply their theoretical knowledge in a real work environment. By creating clear tasks aligned with the framework of their education and being engaged, you foster a conducive learning environment where the student understands their responsibilities and how they can contribute to the company's operations.</p>
  
   </div>
    </div>
  )
}

export default header