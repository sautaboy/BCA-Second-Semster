import SubNavbar from "./SubNavbar";

import Class from '../contentComponents/JavaContent/Class'
import Object from '../contentComponents/JavaContent/Object'
import Constructor from '../contentComponents/JavaContent/Constructor'
import Polymorphism from '../contentComponents/JavaContent/Polymorphism'
import Inheritence from '../contentComponents/JavaContent/Inheritence'

export default function JavaNav() {

    return (
        <>
            <SubNavbar title1="Class" title2="Object" title3="Polymorphism" title4="Inheritence" title5="Constructor" title5Href="constructor" title1Href="class" title2Href="object" title3Href="polymorphism" title4Href="inheritence" />

            <div id="class">
                <Class />
            </div>
            <div id="object">
                <Object />
            </div>
            <div id="constructor">
                <Constructor />
            </div>
            <div id="inheritence">
                <Inheritence />
            </div>
            <div id="polymorphism">
                <Polymorphism />
            </div>

        </>
    )
}
