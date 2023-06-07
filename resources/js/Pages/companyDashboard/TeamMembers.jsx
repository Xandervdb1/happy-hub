import Header from "@/Components/Header.jsx" ;
import { Head } from '@inertiajs/react' ;
import backIcon from '../../../../public/backspace.svg';
import '../../../css/teamMembers.css';


const TeamMembers = (props) => {
    console.log(props.teams)
    console.log(props.teamMembers)
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <Header />
            <div className="titleWrapper">
                <span className="material-symbols-outlined" style={{fontSize:'35px'}}> keyboard_backspace </span>
                <h1>Members</h1>
                <div className="empty"></div>
            </div>
        </>
    )
}

export default TeamMembers;