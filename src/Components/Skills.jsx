import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faTypo3,
    faWordpress,
} from '@fortawesome/free-brands-svg-icons';


import "../Styles/Skills.scss"
function Skills() {

    const skillData = [
        {
            id:1,
            name:"HTML",
            url:"#html",
            icon:faHtml5,
            title:"HTML5",
            color:"linear-gradient(to right, #e34c26 50%, #f06529 51%)"
        },
        {
            id:2,
            name:"CSS",
            url:"#css",
            icon:faCss3,
            title:"CSS3",
            color:"linear-gradient(to right, #264de4 50%, #2965f1 50%)"
        },
        {
            id:3,
            name:"Javscript",
            url:"#javascript",
            icon:faJsSquare,
            title:"Javascript",
            color:"linear-gradient(to right, #E5A126 50%, #F0BF25 50%)"
        },
        {
            id:4,
            name:"Reactjs",
            url:"#react",
            icon:faReact,
            title:"React",
            color:"#61DBFB"
        },
        {
            id:5,
            name:"Typo3",
            url:"#typo3",
            icon:faTypo3,
            title:"Typo3",
            color:"linear-gradient(to right, #ff8700 50%,  #fab85c 60%)"
        },
        {
            id:6,
            name:"Wordpress",
            url:"#wordpress",
            icon:faWordpress,
            title:"Wordpress",
            color:"#21759B"
        }
    ]

 return <>
    <ul className="skills">
        {
            skillData && (
                skillData.map(item => (
                    <li key={item.id} 
                        className="social-link" data-color={item.color}
                        >
                            <Link to={item.url} title={item.title} dataname={item.name} target="_blank" role="button" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={item.icon}/>
                            </Link>
                    </li>
                ))
            )
        }
    </ul>
 </>
}

export default Skills