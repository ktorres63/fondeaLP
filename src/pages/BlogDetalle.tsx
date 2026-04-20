import { useParams, Link } from "react-router";
import { blogPosts } from "@/data/blogPosts";
import { useState } from "react";
import { Calendar, Clock, ArrowLeft, User, MessageSquare } from "lucide-react";
import SEO from "@/components/SEO";

interface Comment {
  id: number;
  author: string;
  email: string;
  content: string;
  date: string;
}

export default function BlogDetalle() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "María González",
      email: "maria@example.com",
      content: "Excelente artículo, muy útil la información. Me ayudó mucho a entender mejor el tema.",
      date: "2026-04-15"
    },
    {
      id: 2,
      author: "Carlos Pérez",
      email: "carlos@example.com",
      content: "Gracias por compartir estos consejos. Los pondré en práctica para mejorar mis finanzas.",
      date: "2026-04-18"
    }
  ]);

  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: ""
  });

  const [submitted, setSubmitted] = useState(false);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">Post no encontrado</h1>
          <Link to="/blog" className="text-[#00a9e0] hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 3);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();

    const comment: Comment = {
      id: comments.length + 1,
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      date: new Date().toISOString().split('T')[0]
    };

    setComments([...comments, comment]);
    setNewComment({ author: "", email: "", content: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <SEO
        title={`${post.title} - Blog FONDEA`}
        description={post.description}
        keywords={`${post.category}, finanzas personales, préstamos, educación financiera`}
        ogImage={post.image}
      />

      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Breadcrumb */}
          <div className="absolute top-8 left-6 md:left-12">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Volver al blog</span>
            </Link>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block px-4 py-1.5 bg-[#00a9e0] text-white text-sm font-bold rounded-full mb-4">
                {post.category}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>20 Abril 2026</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>5 min de lectura</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16">
          {/* Article Content */}
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">
              {post.description}
            </p>

            <div className="text-slate-700 leading-relaxed space-y-6">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Comparte este artículo</h3>
            <div className="flex gap-3">
              <button className="px-6 py-2.5 bg-[#1877f2] text-white rounded-lg hover:bg-[#166fe5] transition-all font-medium">
                Facebook
              </button>
              <button className="px-6 py-2.5 bg-[#1da1f2] text-white rounded-lg hover:bg-[#1a8cd8] transition-all font-medium">
                Twitter
              </button>
              <button className="px-6 py-2.5 bg-[#25d366] text-white rounded-lg hover:bg-[#20ba5a] transition-all font-medium">
                WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-slate-50 py-16">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                Artículos relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="inline-block px-3 py-1 bg-cyan-100 text-[#00a9e0] text-xs font-bold rounded-full mb-3">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-[#00a9e0] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-slate-600 line-clamp-2">
                        {relatedPost.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
          <div className="flex items-center gap-3 mb-8">
            <MessageSquare className="w-6 h-6 text-[#00a9e0]" />
            <h2 className="text-3xl font-bold text-slate-900">
              Comentarios ({comments.length})
            </h2>
          </div>

          {/* Comment Form */}
          <div className="bg-slate-50 rounded-2xl p-6 md:p-8 mb-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Deja tu comentario
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 border border-green-300 text-green-800 rounded-xl">
                ¡Gracias por tu comentario! Se ha publicado correctamente.
              </div>
            )}

            <form onSubmit={handleSubmitComment} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={newComment.author}
                    onChange={(e) => setNewComment({...newComment, author: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={newComment.email}
                    onChange={(e) => setNewComment({...newComment, email: e.target.value})}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Comentario *
                </label>
                <textarea
                  required
                  rows={5}
                  value={newComment.content}
                  onChange={(e) => setNewComment({...newComment, content: e.target.value})}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-[#00a9e0] focus:ring-2 focus:ring-[#00a9e0]/20 transition-all resize-none"
                  placeholder="Escribe tu comentario..."
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-[#00a9e0] text-white font-bold rounded-xl hover:bg-[#0099d5] transition-all duration-300 shadow-lg hover:scale-105"
              >
                Publicar comentario
              </button>
            </form>
          </div>

          {/* Comments List */}
          <div className="space-y-6">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00a9e0] to-[#0088cc] rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-slate-900">{comment.author}</h4>
                      <span className="text-sm text-slate-500">
                        {new Date(comment.date).toLocaleDateString('es-PE', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <p className="text-slate-700 leading-relaxed">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
