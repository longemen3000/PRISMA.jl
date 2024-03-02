import "../scss/header.scss";
import { createSignal } from "solid-js";
import { A } from "@solidjs/router";

const Link = (props: any) => (
    <A
        class="nav-link"
        href={props.href}
        activeClass="nav-link-active"
        end
    >
        {props.children}
    </A>
);

function Header() {
    const [isLightTheme, setIsLightTheme] = createSignal(true);
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme());
    };
    return (
        <header class="header">
            <h1 class="header-title">PRISMA.jl</h1>

            <nav class="navbar">
                <ul class="navbar-links">
                    <li class="navbar-item">
                        <Link
                            class="navbar-item-link"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li class="navbar-item">
                        <a
                            class="navbar-item-link"
                            href="https://github.com/cecoeco/PRISMA.jl"
                            target="_blank"
                        >
                            Documentation
                        </a>
                    </li>
                    <li class="navbar-item">
                        <Link
                            class="navbar-item-link"
                            href="/checklist"
                        >
                            Checklist
                        </Link>
                    </li>
                    <li class="navbar-item">
                        <Link
                            class="navbar-item-link"
                            href="/flow-diagram"
                        >
                            Flow Diagram
                        </Link>
                    </li>
                    <li class="navbar-item">
                        <Link
                            class="navbar-item-link"
                            href="/citation"
                        >
                            Citation
                        </Link>
                    </li>
                </ul>
            </nav>

            <div class="github-container">
                <a
                    class="github-repo-link"
                    href="https://github.com/cecoeco/PRISMA.jl"
                    target="_blank"
                >
                    <img
                        class="github-logo"
                        src="/public/svg/github-mark.svg"
                        alt="github logo"
                    />
                    <label class="github-repo-text">
                        Star
                    </label>
                </a>
                <a
                    class="github-stars-link"
                    href="https://github.com/cecoeco/PRISMA.jl/stargazers"
                    target="_blank"
                >
                    <label class="github-stars">
                        0
                    </label>
                </a>
            </div>

            <div class="theme-button-container">
                <button
                    class="theme-button"
                    onClick={toggleTheme}
                >
                    {isLightTheme() ? (
                        <img
                            class="theme-button-icon"
                            src="/svg/sun.svg"
                            alt="sun icon for light mode"
                        />
                    ) : (
                        <img
                            class="theme-button-icon"
                            src="/svg/moon.svg" 
                            alt="moon icon for dark mode"
                        />
                    )}
                </button>
            </div>
        </header>
    );
}

export default Header;
