import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"



function App() {

  return (
    <>
      <div id="blueShop" className="">
        <header className="w-full bg-blue-300 p-4 flex justify-content-center" >

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Sobre</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Roupas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
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
                  <DropdownMenuLabel>Peças</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Roupa</DropdownMenuItem>
                  <DropdownMenuItem>Tecnologia</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>

          <div id="card">


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </main>


        <footer className="w-full bg-blue-300 p-4 flex justify-content-center">
          
        </footer>
      </div>


    </>
  )
}

export default App
