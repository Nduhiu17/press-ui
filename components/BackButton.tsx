import { Divide } from "lucide-react";
import { ArrowUpCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
    text: string
    link: string
}

const BackButton = ({text,link}:BackButtonProps) => {
    return (  
        <Link href={link} className="flex items-center gap-1 hover:underline text-gray-500 
        font-bold mb-5">
                <ArrowUpCircle size="18" />
                {text}
        </Link>
    );
}
 
export default BackButton;