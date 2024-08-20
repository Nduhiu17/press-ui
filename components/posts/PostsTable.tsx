import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow,TableCaption } from "../ui/table";
import Link from "next/link";
import posts from "@/data/posts";
import { Post } from "@/types/posts";

interface PostTableProps {
    limit?:number
    title?:string
}

const PostsTable = ({limit,title}:PostTableProps) => {

    const sortedPosts: Post[] = [...posts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )

    const filteredPosts = limit ? sortedPosts.slice(0,limit):sortedPosts
    return ( <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semi-bold">{title?title:"Posts"}</h3>
        <Table>
            <TableCaption>A list of recent Posts</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead className="hidden md:table-cell">Author</TableHead>
                    <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                    <TableHead>View</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {filteredPosts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell>
                        {post.title}
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                        <TableCell className="hidden md:table-cell text-right">{new Date(post.date).toLocaleDateString()}</TableCell>
                        <TableCell>
                            <Link href={`/posts/edit/${post.id}`}>
                                <button className="bg-blue-500 hover:bg-blue-700 text-white
                                font-bold py-2 px-4 rounded text-xs">
                                    Edit
                                </button>
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div> );
}
 
export default PostsTable;