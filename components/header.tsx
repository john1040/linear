import { Logo } from "./icons/logo"
import Link from "next/link"
import { Container } from "./container"
import { Button } from "./button"
export const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full border-b border-transparent-white">
            <Container className="flex h-[var(--navigation-height)]">
                <Link href='/' className="flex items-center">
                    <Logo />
                </Link>
                <nav className="h-full">
                    <ul className="flex items-center h-full [&_a]:text-sm [&_li]:ml-6">
                        <li>
                            <Link href='#'>Features</Link>

                        </li>
                        <li>
                            <Link href='#'>Method</Link>

                        </li>
                        <li>
                            <Link href='#'>Pricing</Link>

                        </li>
                        <li>
                            <Link href='#'>Company</Link>

                        </li>
                    </ul>
                </nav>
                <div className="ml-auto h-full flex items-center">
                    <Link href='#' className="mr-6 text-sm">Log in</Link>
                    <Button href='#' className="">Sign up</Link>
                </div>
            </Container>


        </header>
    )
}