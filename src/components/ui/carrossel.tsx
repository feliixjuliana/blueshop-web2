import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

function Carrossel(){
    return (
        <>
        <div className="w-full p-4">
                        <div className="flex justify-center items-center ">
                            <Carousel className="w-40 lg:w-60 rounded-lg">
                                <CarouselContent>
                                    <CarouselItem><img src="modelo.jpeg" alt="" /></CarouselItem>
                                    <CarouselItem><img src="modelo2.jpeg" alt="" /></CarouselItem>
                                    <CarouselItem><img src="modelo3.jpeg" alt="" /></CarouselItem>

                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        </div>
                    </div>
        </>
    )
}

export default Carrossel