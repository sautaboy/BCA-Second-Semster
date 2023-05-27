import React from 'react'
import { useState } from 'react';
export default function Home() {

    // Ya chai maile Ramita garya xu hai kina ki yo kaam yeutai hook bata hunthyo but maiel syntax birsya huna le garina bihan garxu vanerarakhya xu XD

    const [firstBackgroundColor, setfirstBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickFirstSem = () => {
        setfirstBackgroundColor(
            {
                backgroundColor: "#4F7942",
                color: "white"
            }
        )
    }

    const [secondBackgroundColor, setSecondBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickSecondSem = () => {
        setSecondBackgroundColor(
            {
                backgroundColor: "#4A5D23",
                color: "white"
            }
        )
    }

    const [thirdBackgroundColor, setThirdBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickThirdSem = () => {
        setThirdBackgroundColor(
            {
                backgroundColor: "#01796F",
                color: "white"
            }
        )
    }

    const [fourthBackgroundColor, setFourthBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickFourthSem = () => {
        setFourthBackgroundColor(
            {
                backgroundColor: "#014421",
                color: "white"
            }
        )
    }

    const [fifthBackgroundColor, setFifthBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickFifthSem = () => {
        setFifthBackgroundColor(
            {
                backgroundColor: "#004B49",
                color: "white"
            }
        )
    }

    const [sixthBackgroundColor, setSixthBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickSixthSem = () => {
        setSixthBackgroundColor(
            {
                backgroundColor: "#355E3B",
                color: "white"
            }
        )
    }

    const [seventhBackgroundColor, setSeventhBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickSeventhSem = () => {
        setSeventhBackgroundColor(
            {
                backgroundColor: "#123524",
                color: "white"
            }
        )
    }
    const [eightBackgroundColor, setEightBackgroundColor] = useState(
        {
            backgroundColor: "",
            color: ""
        }
    )
    const clickEightSem = () => {
        setEightBackgroundColor(
            {
                backgroundColor: "#013220",
                color: "white"
            }
        )
    }
    return (
        <div className='homeWithSemisterList'>
            <div className="semisterList">
                <ul>
                    <a href="#semisterOne" onClick={clickFirstSem} style={firstBackgroundColor}>First Semister</a>
                    <a href="#semisterTwo" onClick={clickSecondSem} style={secondBackgroundColor}>Second Semister</a>
                    <a href="#semisterThree" onClick={clickThirdSem} style={thirdBackgroundColor}>Third Semister</a>
                    <a href="#semisterFour" onClick={clickFourthSem} style={fourthBackgroundColor}>Fourth Semister</a>
                    <a href="#semisterFive" onClick={clickFifthSem} style={fifthBackgroundColor}>Fifth Semister</a>
                    <a href="#semisterSix" onClick={clickSixthSem} style={sixthBackgroundColor}>Sixth Semister</a>
                    <a href="#semisterSeven" onClick={clickSeventhSem} style={seventhBackgroundColor}>Seventh Semister</a>
                    <a href="#semisterEight" onClick={clickEightSem} style={eightBackgroundColor}>Eight Semister</a>
                </ul>
            </div>


            <div className='home'>
                <div className="head">
                    <div className="logo">
                        Bca
                    </div>
                    <div className="title">
                        <h1>Bachelor Of Computer Application</h1>
                        <h3>BCA. Tribhuvan University</h3>
                        <h3>Bachelors . 4 Years</h3>
                    </div>
                </div>

                <div className="bcaInformation">
                    <h3>What is BCA ?</h3>
                    <p >

                        Tribhuvan University has launched Bachelor of Computer Application (BCA) program from the academic year 2074/75.  In the first phase, this program was launched in six (6) constituent campuses of Tribhuvan University and are allocated 35 seats each.
                    </p >

                    <p>
                        Currently 120 colleges are running BCA program with the affiliation from Tribhuvan University. The BCA program of TU is of 4 years. The program runs on semester-system. It will be run under the faculties of Humanities and Social Sciences.
                    </p>
                    <p>
                        The objective of the BCA program of Tribhuvan University is to produce high quality computer application users and developers. The program of study for Bachelor of Arts in Computer Application (BCA) is over a period of eight semesters (four academic years). The academic year begins in the September and February of each year. The medium of instruction and examination in the Bachelor of Arts in Computer Application (BCA) program is English..
                    </p>
                </div>


                <div className="video">
                    <iframe width="624" height="351" src="https://www.youtube.com/embed/X-l7czko2hY" title="Bachelor of Computer Application BCA in Nepal | Syllabus, Eligibility, Scopes, Fees, &amp; Scholarship" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>

                <div className="eligibility">
                    <h2>Passed In 2079 BS</h2>
                    <ul>
                        <li>Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8 or more</li>
                        <li>Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.</li>
                        <li>Students who have passed grade 11 and are waiting for grade 12 results can also apply. However, they have to submit all the required documents at the time of admission.</li>
                    </ul>
                    <h2>Passed Before 2079 BS</h2>
                    <ul>
                        <li>Minimum D grade in each subject of grade 11 and 12 with a CGPA 2.0 or more</li>
                        <li>Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.</li>
                    </ul>
                </div>

                <div className="jobProspects">
                    <h2>JOB PROSPECTS</h2>
                    <p>BCA graduates can apply for a post of system analysts, system managers, project managers, database administrators, system designers and programmers in IT Companies. Information industries and manufacture industries are always seeking for BCA graduates.
                    </p>
                    <p>Students completing their Bachelor's degree in Computer Application are further eligible to study in any faculties which come under the Management and Information Technology such as MCA, MIT, MBA and many more.

                    </p>
                </div>
                <div className="prospectCarrers">
                    <h2>PROSPECT CAREERS</h2>
                    <ul>
                        <li>Network and Computer Systems Administrators</li>
                        <li>Computer Support Specialists</li>
                        <li>Computer Systems Analysts</li>
                        <li>Computer and Information Systems Managers</li>
                        <li>IT Officer</li>
                    </ul>
                </div>

                <div className="curicullarStructure">
                    <h2>CURRICULAR STRUCTURE</h2>
                    <h3>Semester wise breakdown of the course</h3
                    >
                    <div id="semisterOne" >
                        <h4>First Year</h4>
                        <h5>Semister One</h5>
                        <table style={firstBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CACS101	</td>
                                <td>Computer Fundamentals and Applications</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology	 </td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>English I	</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC155</td>
                                <td>Digital Logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>


                    <div id="semisterTwo">
                        <h5>Semister Two</h5>
                        <table style={secondBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>C Programming</td>
                                <td>4</td>
                                <td>4</td>
                                <td>1</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Financial Accounting	</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN153</td>
                                <td>English II	 </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT154</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterThree">
                        <h4>Second Year</h4>
                        <h5>Semister Three</h5>
                        <table style={thirdBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterFour">
                        <h5>Semister Four</h5>
                        <table style={fourthBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterFive">
                        <h4>Third Year</h4>
                        <h5>Semister Five</h5>

                        <table style={fifthBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterSix">
                        <h5>Semister Six</h5>
                        <table style={sixthBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterSeven">
                        <h4>Fourth Year</h4>

                        <h5>Semister Seven</h5>
                        <table style={seventhBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>
                    <div id="semisterEight">
                        <h5>Semister Eight</h5>
                        <table style={eightBackgroundColor}>
                            <tr>
                                <td>S.N</td>
                                <td>Cource Code</td>
                                <td>Cource Title</td>
                                <td>Credit Hours</td>
                                <td>Lecture Hours</td>
                                <td>Tutorial Hours</td>
                                <td>Lab Hours</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>CASC151	</td>
                                <td>Computer Fundamentals and Application</td>
                                <td>4</td>
                                <td>4</td>
                                <td>-</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>CASO102</td>
                                <td>Society and Technology</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAEN103</td>
                                <td>Emgllish I </td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>CAMT104</td>
                                <td>Mathmatics I</td>
                                <td>3</td>
                                <td>3</td>
                                <td>1</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CASC105</td>
                                <td>Digital logic</td>
                                <td>3</td>
                                <td>3</td>
                                <td>-</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td colSpan="3">Total</td>
                                <td>16</td>
                                <td>16</td>
                                <td>2</td>
                                <td>7</td>
                            </tr>
                        </table>
                    </div>


                </div>



            </div>
            <div className="goto">
                
            </div>
        </div>
    )
}
