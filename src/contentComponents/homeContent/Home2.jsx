import React from 'react'
import Navbar from '../../navbarComponents/Navbar'
import { NavLink } from 'react-router-dom'
export default function Home2() {

    return (
        <div>
            <Navbar

                navListOne="Why Bca"
                navListOneHref="whyBca"
            />

            <div className="homeContainer">
                <div className="logo">
                    <img src="https://edusanjal.com/img/default/degree.svg" alt="logo" />
                </div>
                <div className="info">
                    <h1>Bachelor Of Computer Application</h1>
                    <h2>BCA: Tribhuvan University</h2>
                    <h3>Bachelor . 4 years</h3>
                </div>
            </div>

            <div className="divide">

                <div className="homeContent">

                    <div className="contentSection">
                        <p>Tribhuvan University has launched Bachelor of Computer Application (BCA) program from the academic year 2074/75.  In the first phase, this program was launched in six (6) constituent campuses of Tribhuvan University and are allocated 35 seats each.</p>
                        <p>
                            Currently 120 colleges are running BCA program with the affiliation from Tribhuvan University. The BCA program of TU is of 4 years. The program runs on semester-system. It will be run under the faculties of Humanities and Social Sciences.
                        </p>
                        <p>The objective of the BCA program of Tribhuvan University is to produce high quality computer application users and developers. The program of study for Bachelor of Arts in Computer Application (BCA) is over a period of eight semesters (four academic years). The academic year begins in the September and February of each year. The medium of instruction and examination in the Bachelor of Arts in Computer Application (BCA) program is English..</p>
                    </div>
                    <div className="eligibility">
                        <h2>ELIGIBILITY</h2>
                        <h3>Passed in 2079 BS</h3>
                        <ul>
                            <li>
                                Minimum D grade in each subject of grade 11 and 12 with a CGPA 1.8 or more

                            </li>
                            <li>
                                Minimum score of second division marks in 10+2, PCL, or equivalent in any discipline.

                            </li>
                            <li>
                                Students who have passed grade 11 and are waiting for grade 12 results can also apply. However, they have to submit all the required documents at the time of admission.

                            </li>
                        </ul>
                    </div>
                    <div className="jobProspects">
                        <h2>JOB PROSPECTS</h2>
                        <p>
                            BCA graduates can apply for a post of system analysts, system managers, project managers, database administrators, system designers and programmers in IT Companies. Information industries and manufacture industries are always seeking for BCA graduates.
                        </p>
                        <p>Students completing their Bachelor's degree in Computer Application are further eligible to study in any faculties which come under the Management and Information Technology such as MCA, MIT, MBA and many more.

                        </p>
                    </div>
                    <div className="prospectCarrers">
                        <h2>PROSPECT CARRERS</h2>
                        <ul>
                            <li>
                                Network and Computer Systems Administrators
                            </li>
                            <li>
                                Computer Support Specialists
                            </li>
                            <li>
                                Computer Systems Analysts
                            </li>
                            <li>
                                Computer and Information Systems Managers
                            </li>
                            <li>
                                IT Officer
                            </li>
                        </ul>
                    </div>
                        <button>GET THE CURRICULAR STRUCTURE</button>
                    <div className="video">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/X-l7czko2hY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="questionSection">
                    <ul>
                        <NavLink to="/firstSemister">First Semister</NavLink>
                        <NavLink to="/secondSemister">Second Semister</NavLink>
                        <NavLink to="/thirdSemister"> Third Semister</NavLink>
                        <NavLink to="/fourthSemister"> Fourth Semister</NavLink>
                        <NavLink to="/fifthSemister"> Fifth Semister</NavLink>
                        <NavLink to="/sixthSemister"> Sixth Semister</NavLink>
                        <NavLink to="/seventhSemister"> Seventh Semister</NavLink>
                        <NavLink to="/eightSemister"> Eight Semister</NavLink>
                    </ul>
                </div>

            </div>
        </div>

    )
}
