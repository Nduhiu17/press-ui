export interface Post{
    id: string;
    title: string;
    body: string;
    date: string,
    author: string;
    comments: PostComment[]
}

export interface PostComment{
    id: string;
    text: string;
    username:string;
}