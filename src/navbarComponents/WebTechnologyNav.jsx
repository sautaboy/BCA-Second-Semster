import ChessBoard from '../contentComponents/webTechnologyContent/ChessBoard'
import TableChart from '../contentComponents/webTechnologyContent/TableChart'
import Form from '../contentComponents/webTechnologyContent/Form'
import SubNavbar from './SubNavbar'
import Class from '../contentComponents/JavaContent/Class'
import CoverPage from '../contentComponents/webTechnologyContent/CoverPage'
export default function WebTechnologyNav() {
    return (
        <>
            {/* embeding second navbar */}
            <SubNavbar title1="Chess Board" title1Href="chessBoard" title2="Table Chart" title2Href="tableChart" title3="Form" title3Href="form" title4="CoverPage" title4Href="coverPage" />

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
            <hr />
        </>
    )
}
