import Chunks from "./chunks";
import Search from "./search";

export default function Sidenav() {
    return(
            <div className="bg-[#0f111a] w-[20%] h-screen text-white border-black border-2 px-5">
                <Search/>
                <Chunks/>
            </div>
    )
}