'use client';
import { Book } from "@/app/types";
import { Link } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./styles.module.css";

const EditForm = ({book}: {book: Book}) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/livros/${book.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) 
    })
    router.prefetch('/')
    router.replace('/')
  }
  const [data, setData] = useState<Book>({autor: book.autor, titulo: book.titulo, ano_publicacao: book.ano_publicacao})
  const router = useRouter()

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Editar {book.titulo} <Link href="/">Voltar</Link></h1>
      <input type="text" value={data.titulo} onChange={e => setData({ ...data, titulo: e.target.value })} />
      <input type="text" value={data.autor} onChange={e => setData({ ...data, autor: e.target.value })} />
      <input type="text" value={data.ano_publicacao} onChange={e => setData({ ...data, ano_publicacao: e.target.value })} />
      <button>Adicionar</button>
    </form>
  )
}

export default EditForm