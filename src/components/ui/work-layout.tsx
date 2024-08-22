import PostHeader from "./post-header";

export default function WorkLayout({ children, company }: { children: React.ReactNode, company: string }) {
    return (
        <>
            <PostHeader title={`Work - ${company}`} />
            <article className="text-center">
                {children}
            </article>
        </>
    );
}