import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react";
import { getProdutos } from "../services/produtos";
import type { Produto } from "../types/Produto";
import { Button } from "@/components/ui/button"
import { BsBagHeartFill } from "react-icons/bs";
import { BsBasketFill } from "react-icons/bs";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    //navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
    DropdownMenu,
    DropdownMenuContent,
    //DropdownMenuItem,
    DropdownMenuLabel,
    //DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Dialog,
    DialogContent,
    //DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


function App() {
    
    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getProdutos();
                setProdutos(data.slice(0, 12));
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            }
        }

        loadData();
    }, []);

    return (
        <>
            <div id="blueShop" >
                <header>
                    <div id="header-maior" className=" place-items-center bg-green-700 lg:p-3">
                        <NavigationMenu className="hidden md:block ">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink className="bg-green-700 text-white  mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold"><a href="#sobre">Início</a></NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink className="bg-green-700 text-white  mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold"><a href="#sobre">Produtos</a></NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem >
                                    <NavigationMenuLink asChild className="bg-green-700 text-white mr-2 hover:bg-white pt-2 pb-2 pl-4 pr-4 rounded-lg hover:text-green-700 font-semibold">
                                        <Link to="https://github.com/feliixjuliana/blueshop-web2">Docs</Link>
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
                                    <img src="../public/greenshop.png
                                    " className="h-14" />

                                </a>
                                <button id="menu-btn" className="text-black block md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#81a85d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg>
                                </button>
                                <div id="menu" className={`${menuOpen ? 'flex' : 'hidden'} flex-col space-y-2`}>
                                    <a href="#" className="text-black-300 hover:text-white font-bold">Home</a>
                                    <a href="#card-roupas" className="text-black-300 hover:text-white font-bold">Produtos</a>
                                    <a href="#" className="text-black-300 hover:text-white font-bold">Docs</a>
                                    <a href="#" className="text-black-300 hover:text-white font-bold">Sobre</a>
                                </div>
                            </div>
                        </nav>

                    </div>
                </header>

                <main className="flex flex-col justify-center align-center">
                    <div className="bg-[url('../public/fotoinicial.jpeg')] bg-no-repeat bg-cover">

                        <aside className=" p-10 flex overflow-auto md:justify-center items-center" id="sobre">
                            <div className="hidden md:block" id="logo" >
                                <img src="../public/greenshop.png" alt="" />
                            </div>
                            <div className="">

                                <p className="text-lg md:text-base lg:text-lg font-bold  text-center border border-green-600 bg-white-100 text-white rounded-lg">Sua loja de referência para roupas e apetrechos que combinam estilo, qualidade e conforto.</p>
                            </div>


                        </aside>
                        <nav className="flex">
                            <div className="p-5 pr-2">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="font-bold text-white border p-4 rounded-full ">Categorias</DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        {produtos.map((produto) => (
                                            <div key={produto.category.name}>
                                                <DropdownMenuLabel>{produto.category.name}</DropdownMenuLabel>
                                            </div>))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                            <div className="p-5 pl-0">
                                <DropdownMenu>
                                    <DropdownMenuTrigger className="font-bold text-white border p-4 rounded-full"><a href="">Modelos</a></DropdownMenuTrigger>

                                </DropdownMenu>
                            </div>
                        </nav>
                    </div>

                    <div className="w-full bg-green-700 bg-opacity-50 p-4">
                        <div className="flex justify-center items-center ">
                            <Carousel className="w-40 lg:w-60 rounded-lg">
                                <CarouselContent>
                                    <CarouselItem><img src="../public/modelo.jpeg" alt="" /></CarouselItem>
                                    <CarouselItem><img src="../public/modelo2.jpeg" alt="" /></CarouselItem>
                                    <CarouselItem><img src="../public/modelo3.jpeg" alt="" /></CarouselItem>

                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>


                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 m-4 ">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="bg-green-700 bg-opacity-50 p-3 rounded-xl">
                                <a href="#">
                                    <img
                                        className="rounded-xl"
                                        src={produto.images[0]}
                                    />
                                </a>
                                <div className="flex flex-col justify-center align-center ">
                                    <a href="#">
                                        <h5 className="mb-2 text-2xl mt-2 font-bold tracking-tight text-white dark:text-white">
                                            {produto.title}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        R$ {produto.price}
                                    </p>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        Categoria: {produto.category.name}
                                    </p>

                                    <Dialog>
                                        <DialogTrigger className="bg-white font-bold p-2 rounded-full text-green-900 ">Ver produto</DialogTrigger>
                                        <DialogContent className="m-2 bg-green-200">
                                            <DialogHeader>
                                                <div className="flex gap-2 justify-center items-center">
                                                    <div className="lg:w-1/2">
                                                        <img className="rounded-t-lg w-40 lg:w-72"
                                                            src={produto.images[0]} />
                                                    </div>
                                                    <div className="flex-1">
                                                        <DialogTitle className="mb-3">{produto.title}</DialogTitle>
                                                        <p>
                                                            R$ {produto.price}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="gap-4">
                                                    <p className="flex justify-center align-center">{produto.description}</p>


                                                    <div id="buttons" className="flex justify-center align-center mt-5 gap-4">
                                                        <button className="">
                                                            <BsBagHeartFill />
                                                        </button>
                                                        <Button variant="outline" size="sm">
                                                            <BsBasketFill /> Colocar no Carrinho
                                                        </Button>
                                                    </div>

                                                </div>
                                            </DialogHeader>

                                        </DialogContent>
                                    </Dialog>

                                </div>
                            </div>
                        ))}
                    </div>



                </main >


                <footer className="w-full bg-green-700 p-4 flex justify-content-center">

                </footer>
            </div >


        </>
    )
};
export default App
