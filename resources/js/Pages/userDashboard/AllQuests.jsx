import Header from "@/Components/Header";

const AllQuests = (props) => {
    // console.log(props.userQuests.name);
    // console.log(props.teamQuests);
    
    const { userQuests, teamQuests } = props;
   

    return (
        <>
            <Header />
            <table>
                <tbody>
                    {userQuests.map((userQuest) => (
                        <tr key={userQuest.id}>
                        <td>{userQuest.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
<br />
            <table>
                <tbody>
                    {teamQuests.map((teamQuest) => (
                        <tr key={teamQuest.id}>
                        <td>{teamQuest.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default AllQuests;