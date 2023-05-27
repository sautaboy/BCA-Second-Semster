
import Topics from '../contentComponents/JavaContent/Topics'
import CoverPage from '../contentComponents/webTechnologyContent/CoverPage'
import ChessBoard from '../contentComponents/webTechnologyContent/ChessBoard'
import Form from '../contentComponents/webTechnologyContent/Form'
import TableChart from '../contentComponents/webTechnologyContent/TableChart'



const assignmentA = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"
const assignmentB = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"
const assignmentC = "https://drive.google.com/file/d/1XDlqATDwI3LJcNwmXi7aZGWJANa1yodc/preview"



export default function WebTechnologyNav() {
    return (
        <>
            <Topics
                // Left Title
                topicListA="Chess Board"
                topicListB="Table Chart"
                topicListC="Form"
                topicListD="Cover Page"

                topicListAhref="chessBoard"
                topicListBhref="tableChart"
                topicListChref="form"
                topicListDhref="coverPage"

                // Content Section
                topicListAcontent={<ChessBoard />}
                topicListBcontent={<TableChart />}
                topicListCcontent={<Form />}
                topicListDcontent={<CoverPage />}



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
                Different between procedure oriented vS 00P.
                "
                questionE1="
                write a program in java to find the fraction of given integer. 
                "

                // Assignments Two
                questionA2="Heloolaksnd "


                // Assignments Thre
                questionA3="Pending "
            />

            )
        </>
    )
}


{/* <SubNavbar title1="Chess Board" title1Href="chessBoard" title2="Table Chart" title2Href="tableChart" title3="Form" title3Href="form" title4="CoverPage" title4Href="coverPage" />

<div id="chessBoard">
    <ChessBoard />
</div>
<hr />
<div id="tableChart">
    <TableChart />
</div>
<hr />
<div id="form">
    <Form />
</div>
<hr />
<div id="coverPage">
    <CoverPage />
</div>
<hr /> */}