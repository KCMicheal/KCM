import Image from "next/image"

export default function About() {
    return (
        <div className=" min-h-full flex flex-col justify-evenly space-y-5">
            <div>
                <h1 className="body-heading1">about</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center h-full overflow-hidden">
                <div className="lg:w-1/2 h-[45vh] lg:h-full overflow-y-auto text-left md:text-center p-2">
                    <h2 className="text-xl font-ubuntu font-medium">Meet <span className="text-3xl font-syne font-bold">KCM</span></h2>
                    <p className="body-text1 md:text-2xl">In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo.In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat voIn a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat voIn a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat vo</p>
                </div>
                <div className="w-full lg:w-1/2 h-full p-4 flex flex-col justify-center items-center ">
                    <div className="bg-primary border-2 border-secondary h-[15rem] w-[15rem] transition-transform lg:h-[20rem] lg:w-[20rem] rounded-full">
                        <Image alt="ProfilePic" src="/assets/profilepic.png" width={1000} height={1000} className="w-[100%] h-full lg:h-[110%] lg:-mt-8 rounded-full"></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}