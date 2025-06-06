import { useEffect, useState } from "react";
import { getProdutos } from "../../services/produtos";
import type { Produto } from "../..//types/Produto";
import { getCategorias } from "../../services/categorias";
import type { Categoria } from "../../types/Categoria";
import { Button } from "@/components/ui/button"
import { BsBagHeartFill } from "react-icons/bs";
import { BsBasketFill } from "react-icons/bs";
import Carrossel from "./carrossel";
import Spinner from "./spinner"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";


function App() {

    const [produtos, setProdutos] = useState<Produto[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getProdutos();
                setProdutos(data.slice(0, 12));
            } catch (error) {
                console.error("Erro ao buscar produtos:", error);
            } finally {
                setSpinner(false)
            }
        }

        loadData();
    }, []);

    useEffect(() => {
        async function loadCategoria() {
            try {
                const data = await getCategorias();
                setCategorias(data.slice(0, 2));
            } catch (error) {
                console.error("Erro ao buscar categorias:", error);
            }
        }

        loadCategoria();
    }, []);



    return (
        <>

            <main className="flex flex-col justify-center align-center">
                <div className="bg-[url('../public/fotoinicial.jpeg')] bg-no-repeat bg-cover">

                    <aside className=" p-10 flex overflow-auto md:justify-center items-center" id="sobre">
                        <div className="hidden md:block" id="logo" >
                            <img src="greenshop.png" alt="" />
                        </div>
                        <div className="">

                            <p className="text-lg md:text-base lg:text-xl font-bold  text-center border border-green-600 bg-white-100 text-white rounded-lg lg:max-w-sm lg:ml-32">Sua loja de referência que combina estilo, qualidade e conforto.</p>
                        </div>


                    </aside>
                    <nav className="flex">
                        <div className="p-5 pr-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="font-bold text-white border p-4 rounded-full ">Categorias</DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    {categorias.map((categoria) => (
                                        <div key={categoria.id}>
                                            <DropdownMenuLabel>{categoria.name}</DropdownMenuLabel>
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
                    <Carrossel />
                </div>

                {spinner ? (<Spinner />) : (
                    <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 m-4 " id="produtos">
                        {produtos.map((produto) => (
                            <div key={produto.id} className="bg-green-700 bg-opacity-50 p-3 rounded-xl">
                                <a href="#">
                                    <img
                                        className="rounded-xl"
                                        src={produto.images[0]}
                                    />
                                </a>
                                <div className="flex flex-col flex-grow h-full">
                                    <a href="#">
                                        <h5 className="mb-2 text-lg mt-2 font-bold tracking-tight text-white dark:text-white lg:text-2xl">
                                            {produto.title}
                                        </h5>
                                    </a>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        R$ {produto.price}
                                    </p>
                                    <p className="mb-3 font-normal text-white dark:text-gray-400">
                                        Categoria: {produto.category.name}
                                    </p>

                                    <Dialog >
                                        <DialogTrigger className="bg-white font-bold p-2 rounded-full text-green-900">Ver produto</DialogTrigger>
                                        <DialogContent className="mx-4 my-6 w-full max-w-sm sm:max-w-md bg-green-200 rounded-2xl">
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
                )}




            </main >


        </>
    )
};
export default App
