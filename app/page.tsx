import BookCard from "./components/BookCard";
import styles from "./page.module.css";
import { Book, Page } from "./types";
import PaginationComponent from "./components/Pagination";
import Link from "next/link";

export const revalidate = 0;

async function fetchBooks(page: number): Promise<Page<Book>> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/livros?page=${page ? page - 1 : 0}`)
  const data = await res.json();
  return data;
}

export default async function Home({searchParams}: {searchParams: {page: number}}) {
  const data = await fetchBooks(searchParams.page);
  return (
    <main className={styles.main}>
      <h1>Livros <Link href="/novo">Adicionar</Link></h1>
      <li className={styles.item}>
      <h3>Id Título</h3>
      <p>Autor</p>
      <p>Exemplares</p>
      <p>Ações</p>
    </li>
      {data.content.map((book: Book, index: number) => <BookCard key={index} book={book} />)}
      {data.totalPages > 1 ?
        <PaginationComponent page={searchParams.page} totalPages={data.totalPages}  />
      : <></>
      }
    </main>
  );
}
