import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { getProdutos } from "../services/produtos";
import type { Produto } from "../types/Produto";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description: "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description: "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
]

import {
    DropdownMenu,
    DropdownMenuContent,
    // DropdownMenuItem,
    DropdownMenuLabel,
    // DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"


function App() {


    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getProdutos();
                setProdutos(data.slice(0, 10));
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        loadData();
    }, []);

    return (
        <>
            <div id="blueShop" className="">
                <header>
                    <NavigationMenu >
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild>
                                                <Link
                                                    to="/"
                                                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                >
                                                    <div className="mt-4 mb-2 text-lg font-medium">
                                                        shadcn/ui
                                                    </div>
                                                    <p className="text-muted-foreground text-sm leading-tight">
                                                        Beautifully designed components built with Tailwind CSS.
                                                    </p>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem to="/docs" title="Introduction">
                                            Re-usable components built using Radix UI and Tailwind CSS.
                                        </ListItem>
                                        <ListItem to="/docs/installation" title="Installation">
                                            How to install dependencies and structure your app.
                                        </ListItem>
                                        <ListItem to="/docs/primitives/typography" title="Typography">
                                            Styles for headings, paragraphs, lists...etc
                                        </ListItem>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                        {components.map((component) => (
                                            <ListItem
                                                key={component.title}
                                                title={component.title}
                                                to={component.href}
                                            >
                                                {component.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/docs">Docs</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>List</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[300px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">
                                                    <div className="font-medium">Components</div>
                                                    <div className="text-muted-foreground">
                                                        Browse all components in the library.
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">
                                                    <div className="font-medium">Documentation</div>
                                                    <div className="text-muted-foreground">
                                                        Learn how to use the library.
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">
                                                    <div className="font-medium">Blog</div>
                                                    <div className="text-muted-foreground">
                                                        Read our latest blog posts.
                                                    </div>
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Simple</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">Components</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">Documentation</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#">Blocks</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="#" className="flex items-center gap-2">
                                                    <CircleHelpIcon />
                                                    Backlog
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#" className="flex items-center gap-2">
                                                    <CircleIcon />
                                                    To Do
                                                </Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link to="#" className="flex items-center gap-2">
                                                    <CircleCheckIcon />
                                                    Done
                                                </Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </header>

                <main>
                    <aside className="m-20 space-x-5 flex">
                        <div className="">
                            <h1>BlueShop</h1>

                            <p>Sua loja de referência para roupas e apetrechos que combinam estilo, qualidade e conforto. Oferecemos uma seleção cuidadosamente escolhida de peças modernas e acessórios essenciais para completar seu visual, seja para o dia a dia ou ocasiões especiais. Na BlueShop, você encontra tendências atuais com preços acessíveis, atendimento personalizado e uma experiência de compra prática e agradável. Vista-se com atitude, vista BlueShop!</p>
                        </div>

                        <div className="" id="logo" >
                            LOGOOOOOaaaaaaaaaaaaaaaaaaaaaaa
                        </div>
                    </aside>
                    <nav className="w-full bg-blue-100">
                        <div className="p-9">
                            <DropdownMenu>
                                <DropdownMenuTrigger>Categoria</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {produtos.map((produto) => (
                                        <div key={produto.category.name}>
                                            <DropdownMenuLabel>{produto.category.name}</DropdownMenuLabel>
                                        </div>))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </nav>

                    <div id="card">


                        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            {produtos.map((produto) => (
                                <div key={produto.id}>
                                    <a href="#">
                                        <img
                                            className="rounded-t-lg"
                                            src={produto.images[0]}
                                        />
                                    </a>
                                    <div className="p-5">
                                        <a href="#">
                                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                                {produto.title}
                                            </h5>
                                        </a>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            R$ {produto.price}
                                        </p>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            Categoria: {produto.category.name}
                                        </p>
                                        <a
                                            href="#"
                                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-400 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-400 dark:hover:bg-blue-400 dark:focus:ring-blue-400"
                                        >
                                            Ver produto
                                            <svg
                                                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </main >


                <footer className="w-full bg-blue-300 p-4 flex justify-content-center">

                </footer>
            </div >


        </>
    )
}

function ListItem({
    title,
    children,
    to,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { to: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link to={to}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default App
