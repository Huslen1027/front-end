import { useEffect, useState } from "react";
export default function Home() {
  const [article, setArticle] = useState();
  useEffect(() => {
    async function getArticle() {
      const res = await fetch("http://localhost:4000/api/blogs");
      const data = await res.json();
      console.log(data);
      setArticle(data);
    }
    getArticle();
  }, []);

  return (
    <main>
      <p className="ml-5">{article?.title}</p>

      <img src={article?.cover_image} alt="" />
    </main>
  );
}
