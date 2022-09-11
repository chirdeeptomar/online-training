import { Navbar } from "@nextui-org/react";
import Logo from "./logo";

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Navbar>
                <Navbar.Brand>
                    <Logo></Logo>
                </Navbar.Brand>
                <Navbar.Content>
                    <Navbar.Link>Home</Navbar.Link>
                    <Navbar.Link>About</Navbar.Link>
                    <Navbar.Link>Contact</Navbar.Link>
                </Navbar.Content>
            </Navbar>
            <div className="container">
                <main>{children}</main>
            </div>
        </>
    )
}