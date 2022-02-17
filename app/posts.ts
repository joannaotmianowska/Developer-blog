export type Post = {
    slug: string,
    title: string
}

export function getPosts() {
    const posts: Post[] = [
        {
            slug: "my-post",
            title: "My Post"
        },
        {
            slug: "my-another-post",
            title: "My Another Post"
        }
    ];
    return posts;
};