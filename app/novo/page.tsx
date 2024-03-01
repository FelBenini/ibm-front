'use client';
import { useState } from "react";
import styles from './styles.module.css'
import { Book } from "../types";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NewBook = () => {
  const router = useRouter()
  const [data, setData] = useState<Book>({ autor: "", titulo: "", ano_publicacao: "" });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/livros`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data) 
    })
    router.prefetch('/')
    router.replace('/')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1>Adicionar Novo <Link href="/">Voltar</Link></h1>
      <input type="text" value={data.titulo} onChange={e => setData({ ...data, titulo: e.target.value })} />
      <input type="text" value={data.autor} onChange={e => setData({ ...data, autor: e.target.value })} />
      <input type="text" value={data.ano_publicacao} onChange={e => setData({ ...data, ano_publicacao: e.target.value })} />
      <button>Adicionar</button>
    </form>
  )
}

export default NewBook