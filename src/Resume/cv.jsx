import React from 'react'
import './cv.css'

const cv = () => {
  return (
    <div className="jobContainer">
  <p className="introP">
    By working within finance with IT tools at the center, I have actively explored and gauged both areas to clarify my future direction. This versatile experience has not only provided me with broad insight into both worlds but has also helped me define my passion and direction for the future.
  </p>

  <div className="job">
    <div className="company">Consafe Logistics Group</div>
    <div className="position">IT Project Assistant</div>
    <div className="duration">August 2022 – June 2023</div>
    <p className="description">As an IT Project Assistant at Consafe Logistics Group, I was responsible for various administrative and financial tasks, supporting project managers in the coordination of IT projects. I particularly appreciated gaining insight into working with larger development projects, which motivated me to further my studies in programming.</p>
    <div className="location">Lund, Skåne, Sweden</div>

    <div className="company">Bygghemma</div>
    <div className="position">Finance Assistant</div>
    <div className="duration">December 2021 – August 2022</div>
    <p className="description">
      As a Finance Assistant at Bygghemma, I was primarily involved in invoice handling and bookkeeping. I contributed to streamlining routines for invoice handling and bookkeeping, resulting in precise and smooth management of financial transactions. Additionally, I had tasks that included communication regarding prices with suppliers, a prerequisite for favorable agreements for the company.
      <div className="location">Malmö, Skåne, Sweden</div>
    </p>

    <div className="company">PwC</div>
    <div className="position">Audit Administrator</div>
    <div className="duration">June 2020 – June 2021 </div>
    <p className="description">As an Audit Administrator at PwC, one acts as support for the auditors' work. I was responsible for gathering relevant documentation for the audit and collecting information from clients' banks. My role also included compiling all material in a structured manner so that the rest of the team in the audit could easily access necessary information. Through meticulous planning and communication, I facilitated the work of the audit team and contributed to a smooth and efficient audit process.</p>
    <div className="location">Lund, Skåne, Sweden</div>
  </div>
</div>
  )
}

export default cv