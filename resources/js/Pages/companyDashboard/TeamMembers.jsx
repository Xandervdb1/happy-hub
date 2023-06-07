import Header from "@/Components/Header.jsx"


const TeamMembers = (props) => {
    console.log(props.teams)
    console.log(props.teamMembers)
    return (
        <>
            <Header />
            <h1>Team Members</h1>
        </>
    )
}
export default TeamMembers;