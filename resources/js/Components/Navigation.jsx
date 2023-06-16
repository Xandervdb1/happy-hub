import { Link, usePage } from "@inertiajs/react";

const Navigation = () => {
    const props = usePage().props;
    if (props.auth.user) {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link href="/user-dashboard">User Dashboard</Link></li>
                        {props.auth.user.is_admin ? <li><Link href="/company-dashboard">Company Dashboard</Link></li> : ""}
                        <li><Link href="/wallet">Wallet</Link></li>
                        <li><Link href="/logout" method="post" as="button">Log out</Link></li>
                    </ul>
                </nav>
            </>
        )
    } else {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/login">Log in</Link></li>
                        <li><Link href="/admin-register">Buy key</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navigation;