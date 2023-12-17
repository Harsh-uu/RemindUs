import Chunks from "./chunks";
import Search from "./search";

export default function Sidenav() {
    return(
            <div className="bg-[#0f111a]  h-screen text-white border-black border-2 px-5">
                <Search/>
                <Chunks/>
            </div>
    )
}