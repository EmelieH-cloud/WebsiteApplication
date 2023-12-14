import React from 'react'
import './degree.css'

const degree = () => {
  return (
    <div className="alltables">

    <div className="info">
      <h3>Degree: Bachelor of Philosophy, Major: Computer Science</h3>
      <h4>Total Points: 182.5</h4>
      <h4>Finish Date: 2020-10-19</h4>
      <h4>Location: Lund University</h4>
    </div>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Computer Science: Introduction to Information Systems (SYSA11)</td>
        <td>30.0</td>
        <td>2018-05-23</td>
      </tr>
      <tr className="delkurser">
        <strong>Sub-courses:</strong><br />
        - Information Systems as a Subject<br />
        - Business, IT, and Digitalization<br />
        - System Analysis and Modeling<br />
        - Software Development (Java)<br />
        - IS Project (IS project)
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Computer Science: Information Systems and Business (SYSA12) </td>
        <td>30.0</td>
        <td>2018-06-20</td>
      </tr>
      <tr className="delkurser">
        <strong>Sub-courses:</strong><br />
        - Group Dynamics and Communication<br />
        - Organization, Operations, and IS<br />
        - Project Management<br />
        - IT Law<br />
        - Interaction Design<br />
        - IS Project, Report
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Information Systems: IS and Business Development (SYSB13)</td>
        <td>30.0</td>
        <td>2019-02-04</td>
      </tr>
      <tr className="delkurser">
        <strong>Sub-courses:</strong><br />
        - Process Modeling<br />
        - Database Design<br />
        - Business Systems<br />
        - Managerial Accounting<br />
        - Risk Analysis<br />
        - Business Architecture<br />
        - Project Methodology<br />
        - Information System Project<br />
        - Information Security
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Media and Communication Science: Basic Course (MKVA11)</td>
        <td>30.0</td>
        <td>2019-06-07</td>
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Commercial Law: Data Protection Law (HARA24)</td>
        <td>15.0</td>
        <td>2020-02-26</td>
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Computer Science: Human-Computer Interaction, Analysis (INFC25)</td>
        <td>7.5</td>
        <td>2020-03-12</td>
      </tr>
      <tr className="delkurser">
        <strong>Sub-courses:</strong><br />
        - User-Centered Design<br />
        - Perspectives: Human-Computer Interface<br />
        - Design of Information Systems and Interaction<br />
        - Interaction Models for Computer Applications<br />
        - Standards for Dialogue Design<br />
        - Reflection on System Development Trends<br />
        - Methods and Techniques for Analysis and Evaluation
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Informatics: Information Architecture (INFC65)</td>
        <td>7.5</td>
        <td>2020-03-24</td>
      </tr>
      <tr className="delkurser">
        <strong>Sub-courses:</strong><br />
        - Information Architecture and Modern Information Systems<br />
        - Fundamental Principles of Information Architectures<br />
        - Work Processes and Methods for Creating Functional<br />
        - Information Architectures
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Computer Science: Thesis (essay) for Bachelor's Degree (SYSK16)</td>
        <td>15.0</td>
        <td>2020-08-20</td>
      </tr>
      <tr className="delkurser">
        <strong>Content:</strong><br />
        - Basic Scientific Research Methods in Computer Science<br />
        - Planning and Conducting Scientific Research<br />
        - Reporting and Presenting the Implementation and Results of Own<br />
        - Scientific Research
      </tr>
    </table>

    <table>
      <tr>
        <th>Course</th>
        <th>Points</th>
        <th>Date</th>
      </tr>
      <tr>
        <td>Openness on the Internet (OPIN)</td>
        <td>7.5</td>
        <td>2019-11-03</td>
      </tr>
    </table>

  </div>
  )
}

export default degree