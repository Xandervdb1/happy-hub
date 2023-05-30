import Header from '@/Components/Header'

const AdminDashboard = (props) => {
    console.log(props.teams)

    return (
        <>
            <Header />
            <center> <b><h1>Company Dashboard</h1></b></center>
        </>
    )
}
export default AdminDashboard;