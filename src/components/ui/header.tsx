import { Link } from "react-router-dom";
import { useState } from "react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";




function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div id="greenShop" >
                <header>
                    <div id="header-maior" className=" place-items-center bg-green-700 lg:p-3">
                        <NavigationMenu className="hidden md:block p-3">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="bg-green-700 text-white  mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold"><a href="#sobre">Início</a></NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className="bg-green-700 text-white  mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold"><a href="#produtos">Produtos</a></NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem >
                                    <NavigationMenuLink asChild className="bg-green-700 text-white mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold">
                                        <Link target="_blank" to="https://github.com/feliixjuliana/blueshop-web2">Docs</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-green-700 text-white hover:text-green-700">Acesso</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[200px] gap-4 p-8 text-green-700">
                                            <li>
                                                <NavigationMenuLink asChild >
                                                    <Link to="#">
                                                        <div className="font-bold pb-3">Criar Conta</div>

                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="#">
                                                        <div className="pb-3 font-bold ">Login</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="#">
                                                        <div className="font-bold ">Suporte</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div id="header-menor" className=" block md:hidden p-3 top-0 right-0 w-full">
                        <nav className="p-2">
                            <div className="container mx-auto flex justify-between items-center">
                                <a href="#" className="text-black text-lg font-bold">
                                    <img src="greenshop.png" className="h-14" />

                                </a>

                                <div>
                                    <a href="">

                                    </a>
                                <button id="menu-btn" className="text-black block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81a85d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                                </button>
                                </div>
                                <div id="menu" className={`${menuOpen ? 'flex' : 'hidden'} flex-col space-y-2`}>
                                    <a href="#" className="font-bold text-green-700">Sobre</a>
                                    <a href="#produtos" className="font-bold text-green-700">Produtos</a>
                                    <Link target="_blank" to="https://github.com/feliixjuliana" className="font-bold text-green-700">Docs</Link>
                                    <a href="#footer" className="font-bold text-green-700">Mais</a>
                                </div>
                            </div>
                        </nav>

                    </div>
                </header>
            </div >


        </>
    )
};
export default Header
