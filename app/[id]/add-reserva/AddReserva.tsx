'use client'
import { Book } from "@/app/types"
import { useState } from "react"
import styles from './page.module.css'
import { useRouter } from "next/navigation"

const AddReserva = ({book}: {book: Book}) => {
  const router = useRouter()
  const [data, setData] = useState<{usuario: string, data_inicio: string, data_fim: string}>({usuario: '', data_inicio: '', data_fim: ''})
  const addReserva = async (e: React.FormEvent) => {
    e.preventDefault()
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/livros/${book.id}/reservas`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        usuario: data.usuario,
        data_inicio: data.data_inicio,
        data_fim: data.data_fim
      }) 
    })
    router.push(`/${book.id}`)
  }
  return (
    <form onSubmit={addReserva} className={styles.form}>
      <label>Usuário</label>
      <input type="text" value={data.usuario} onChange={(e) => setData({...data, usuario: e.target.value})} />
      <label>Data início</label>
      <input type="text" value={data.data_inicio} onChange={(e) => setData({...data, data_inicio: e.target.value})} />
      <label>Data fim</label>
      <input type="text" value={data.data_fim} onChange={(e) => setData({...data, data_fim: e.target.value})} />
      <button>Reservar</button>
    </form>
  )
}

export default AddReserva