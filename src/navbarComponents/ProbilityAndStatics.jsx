import React from 'react'
import Navbar from './Navbar'
import Topics from '../contentComponents/JavaContent/Topics'
export default function ProbilityAndStatics() {


    const assignmentA = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"

    const assignmentB = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"

    const assignmentC = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"
    return (
        <div>
            <Navbar
                navListOne="Data Structure And Alogorithm"
                navListOneHref="dataStructureAndAlogorithm"

                navListTwo="Probility and Statistics" navListTwoHref="probilityAndStatistics"

                navListThree="System Analysis and Design" navListThreeHref="systemAnalysisAndDesign"

                navListFour="OOp in Java" navListFourHref="oopInJava"

                navListFive="Web Technology" navListFiveHref="webTechnology"
            />


            <Topics topicListAhref="firstAssignment"
                topicListBhref="secondAssignment"
                topicListChref="thirdAssignment"
                // topicListDhref="fourthAssignment"
                // topicListEhref="fifthAssignment"
                // topicListFhref="sixthAssignment"
                // topicListGhref="seventhAssignment"
                // topicListHhref="eightthAssignment"
                // topicListJhref="ninethAssignment"
                // topicListIhref="tenethAssignment"


                topicListA="First Assignment"
                topicListB="Second Assignment"
                topicListC="Third Assignment"
                // topicListD="Fourth Assignment"
                // topicListE="Fifth Assignment"
                // topicListF="Sixth Assignment"
                // topicListG="Seventh Assignment"
                // topicListH="Eightth Assignment"
                // topicListI="Nineth Assignment"
                // topicListJ="Teneth Assignment"



                // Assignments Section

                assignmentA={assignmentA}
                assignmentB={assignmentB}
                assignmentC={assignmentC}


                // QUESTIONS Section

                // Assignments One
                questionA1="
                Define Control Statement. Explain different types of control statements with examples.
                "
                questionB1="
                Define operators. Explain the different types of operater used in java with suitable examples.
                "
                questionC1="
                Define identifires. What are the different rule to declare identifiers. 
                "
                questionD1="
                Different between procedure oriented vs 00P.
                "
                questionE1="
                write a program in java to find the fraction of given integer. 
                "

                // Assignments Two
                questionA2="Explain the features Object oriented concept in details. "
                questionB2="Define constructors. explain the different types of constructors."
                questionC2="Explain method Overriding in Java with proper Example."
                questionD2="Explain the use of this keyword  with example."
                questionE2="Explain nested classes with example."
                questionF2="Create two time class and add,substract the time and return the time in output in time format."

                // Assignments Three
                questionA3="Explain Inheritance. Explain different types of inheritance with suitable example."
                questionB3="Define method Overroding. Write a program to show the method overriding with correct example."
                questionC3="Difference between Method Overloading  and method Overriding."
                questionD3=" Why multiple inheritance is not supported by JAVA,Explain Why? How multiple inheritance is archiverd by, Explain."
                questionE3="Define Packaging. Discuss the different techniques for accessing packages."
                questionF3="Define Abstract Classses and method with example."
                questionG3="Discuss the use of Final keyword with suitable example."
                questionH3="Discuss the rule of Super keyword."

            />

        </div>
    )
}
