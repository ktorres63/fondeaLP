import { useParams } from "react-router";
import { blogPosts } from "@/data/blogPosts";

export default function BlogDetalle() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <div className="p-10 text-center">Post no encontrado</div>;
  }

  return (
    <section className="px-6 py-20 mx-auto bg-white">
      <img src={post.image} className="rounded-3xl mb-8" />

      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

      <p className="text-lg text-slate-700 leading-relaxed">{post.content}</p>
    </section>
  );
}
