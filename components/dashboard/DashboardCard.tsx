import { Card,CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";



interface DashboardCardProps {
    title: string;
    icon: React.ReactElement<LucideIcon>;
    count: number;
}

const DashboardCard = ({title,count,icon}:DashboardCardProps) => {
    return ( <div>
        <Card className="bg-slate-100 dark:bg-slate-800 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold
                text-slate-500 dark:tex-slate-200">{title}</h3>
                <div className="flex gap-5 justify-center items-center">
                    {icon}
                    <h3 className="text-5xl font-semi-bold text-slate-500 
                    dark:text-slate-200">
                        {count}
                    </h3>
                </div>
            </CardContent>
        </Card>
    </div> );
}
 
export default DashboardCard;