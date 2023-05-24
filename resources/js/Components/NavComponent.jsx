import { Link } from "@inertiajs/react";

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/generate-key">Generate Key</Link></li>
                    <li><Link href="/register">Register</Link></li>
                    <li><Link href="/admin-dashboard">Admin Dashboard</Link></li>
                    <li><Link href="/user-dashboard">User Dashboard</Link></li>
                    <li><Link href="/wallet">Wallet</Link></li>
                </ul>
            </nav>
        </>
    )
}
