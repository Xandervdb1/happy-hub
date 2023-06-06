import { Link, usePage } from "@inertiajs/react";

const Navigation = () => {
    const props = usePage().props;
    if (props.auth.user && props.auth.user.is_admin) {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link href="/user-dashboard">User Dashboard</Link></li>
                        <li><Link href="/company-dashboard">Company Dashboard</Link></li>
                        <li><Link href="/wallet">Wallet</Link></li>
                        <li><Link href="/logout" method="post" as="button">Log out</Link></li>
                    </ul>
                </nav>
            </>
        )
    } else if (props.auth.user) {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link href="/user-dashboard">User Dashboard</Link></li>
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
                        <li><Link href="/generate-key">Buy key</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navigation;