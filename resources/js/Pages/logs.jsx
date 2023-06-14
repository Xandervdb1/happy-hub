import React from "react";
import HeaderDesktop from "@/Components/HeaderDesktop.jsx";
import Header from "@/Components/HeaderMobile.jsx";
import { Link } from "@inertiajs/react";
import '../../css/companyDashboard.css';

const logs = (props) => {
    console.log(props.logs)
    const logs = props.logs;
    const userCoins = props.auth.user.coins
    return (
        <>
            <HeaderDesktop userCoins={userCoins} />
            <Header userCoins={userCoins} />
            <div
                className="backgroundImage"
                style={{ backgroundImage: "url('../teamwork3.jpg')" }}
            >
                <h1 className="logTitle">Logs</h1>
                <div className="logContainer">
                    <div className="log">
                        {
                            logs.map(log => {
                                if (log.scope === "Reward") {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp">{log.created_at}</li></i>
                                                <p className="red"> {log.name} spent {log.scopeCoins.toLocaleString()} coins on {log.scopeName}.</p>
                                                <p className="coinTotal">(Total coins: {log.coins.toLocaleString()} coins)</p>
                                            </div>
                                        </>
                                    )
                                } else {
                                    return (
                                        <>
                                            <div className="scope">
                                                <i><li className="timestamp">{log.created_at}</li></i>
                                                <p className="green"> {log.name} gained {log.scopeCoins.toLocaleString()} coins for {log.scopeName}.</p>
                                                <p className="coinTotal">(Total coins: {log.coins.toLocaleString()})</p>
                                            </div>
                                        </>
                                    )
                                }
                            })

                        }
                    </div>
                    <Link href='/company-dashboard' className="goBackButton">Go back</Link>
                </div>
            </div>
        </>
    )
}
export default logs