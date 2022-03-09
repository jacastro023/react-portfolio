import React from 'react';
import '../skills/style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import  {faHtml5, faCss3Alt, faJs, faReact, faGithub, faGitAlt } from "@fortawesome/free-brands-svg-icons"
import VsCode from "../pictures/icons/vscode.webp"
import Responsive from "../pictures/icons/responsive.jpg"
import Sql from "../pictures/icons/mysql.svg"
import MongoDb from "../pictures/icons/mongodb.png"

function AboutMe() {
  return (
    <div>
    <div className="description">
        <h1>SKILLS:</h1>
        <div>
        <FontAwesomeIcon className='icons' title='HTML' icon={faHtml5} />
        <FontAwesomeIcon className='icons' title='CSS' icon={faCss3Alt} />
        <FontAwesomeIcon className='icons' title='Javascript' icon={faJs} />
        <FontAwesomeIcon className='icons' title='React' icon={faReact} />
        <FontAwesomeIcon className='icons' title='Github' icon={faGithub} />
        <FontAwesomeIcon className='icons' title='Git' icon={faGitAlt} />
        <img src={VsCode} className='icons2' title="VsCode" alt="Vscode logo"/>
        <img src={Responsive} className='icons2' title="Responsive" alt="Responsive logo"/>
        <img src={Sql} className='icons2' title="MySql" alt="MySql logo"/>
        <img src={MongoDb} className='icons2' title="MongoDB" alt="MongoDB logo"/>
        </div>
    </div>
    </div>
  );
}

export default AboutMe;