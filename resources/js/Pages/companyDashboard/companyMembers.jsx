import Header from "@/Components/Header.jsx" ;
import { Head } from '@inertiajs/react';
import backIcon from '../../../../public/backspace.svg';
import '../../../css/teamMembers.css';


const TeamMembers = (props) => {
    const teams = props.teams;
    const members = props.teamMembers;
    const roles = props.roles;

    const linkRole = (member, roles) => {
        for(let role of roles){
            if(member.role_id === role.id){
                return role.name;  
            }
        }
    }

    const linkTeam = (member, teams) => {
        for(let team of teams){
            if(member.team_id === team.id){
                return team.name;  
            }
        }
    }

    const filterArray = (teams, members, roles) => {
        const membersList = [];

        for (let i = 0; i < members.length ; i++){
            if(members[i].length > 0){
                for(let member of members[i]) {
                    membersList.push({
                        name: member.name,
                        function: linkRole(member, roles),
                        email: member.email,
                        team: linkTeam(member, teams)
                    });
                }
            }
        }
    }

    filterArray(teams, members, roles);

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
            <div className="membersWrapper">
                {}
                <div className="member">
                    <div className="name">
                        <p>Name</p>
                        <p>XXX</p>
                    </div>
                    <div className="function">
                        <p>Function</p>
                        <p>XXX</p>
                    </div>
                    <div className="email">
                        <p>Email</p>
                        <p>XXX</p>
                    </div>
                    <div className="team">
                        <p>Team</p>
                        <p>XXX</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamMembers;