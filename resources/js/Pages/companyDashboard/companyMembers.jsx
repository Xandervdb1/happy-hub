import Header from "@/Components/Header.jsx";
import { Head } from '@inertiajs/react';
import '../../../css/teamMembers.css';
import coin from '../../../../public/coin.png';
import { Link } from "@inertiajs/react";


const TeamMembers = (props) => {
    const teams = props.teams;
    const members = props.teamMembers;
    const roles = props.roles;
    const userCoins = props.userCoins;


    const linkRole = (member, roles) => {
        for (let role of roles) {
            if (member.role_id === role.id) {
                return role.name;
            }
        }
    }

    const linkTeam = (member, teams) => {
        for (let team of teams) {
            if (member.team_id === team.id) {
                return team.name;
            }
        }
    }

    const filterArray = (teams, members, roles) => {
        const membersList = [];

        for (let i = 0; i < members.length; i++) {
            if (members[i].length > 0) {
                for (let member of members[i]) {
                    membersList.push({
                        name: member.name,
                        coins: member.coins,
                        function: linkRole(member, roles),
                        email: member.email,
                        team: linkTeam(member, teams)
                    });
                }
            }
        }
        return membersList;
    }

    const companyMembers = filterArray(teams, members, roles);

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            </Head>
            <Header userCoins = {userCoins}/>
            <div className="titleWrapper">
                <Link href="/company-dashboard">
                    <span className="material-symbols-outlined" style={{ fontSize: '35px' }}> keyboard_backspace </span>
                </Link>
                <h1>Members</h1>
                <div className="empty"></div>
            </div>
            <div className="membersWrapper">
                {
                    companyMembers.map(member =>
                        <div className="member" key={member.email}>
                            <div className="nameCoins">
                                <p className="name">{member.name}</p>
                                <div className="coinsWrap">
                                    <div className="coins">
                                        <img src={coin} alt="coin" />
                                        <p>{member.coins}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="memberInfo">
                                <p>Function: &nbsp;</p>
                                {member.function === undefined ? <p>Unknown function</p> : <p>{member.team}</p>}
                            </div>
                            <div className="memberInfo">
                                <p>Email: &nbsp;</p>
                                <p>{member.email}</p>
                            </div>
                            <div className="memberInfo">
                                <p>Team: &nbsp; </p>
                                {member.team}
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default TeamMembers;