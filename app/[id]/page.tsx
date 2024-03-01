import { notFound } from "next/navigation";
import { Reservation } from "../types";
import ReservasCard from "../components/ReservasCard";
import styles from './page.module.css'
import Link from "next/link";

export const revalidate = 0;

async function fetchBook(id: number) {
  const res = await fetch(`${process.env.BACKEND_URL}/api/livros/${id}/reservas`)
  if (res.status !== 200) return null
  const data = await res.json();
  return data;
}

const UpdateBook = async ({ params }: { params: { id: number } }) => {
  const data = await fetchBook(params.id);
  if (!data) return notFound();
  return (
    <main className={styles.main}>
      <div>
        <h1>Reservas</h1>
        <Link href={`/${params.id}/add-reserva`}>Reservar Novo</Link>
      </div>
      <ul>
        <li>
          <h3>ID Usuário</h3>
          <p>Data ínicio</p>
          <p>Data fim</p>
        </li>
        {data.content.map((item: Reservation, index: number) => ( <ReservasCard reservation={item} key={index} />))}
      </ul>
    </main>
  )
}

export default UpdateBook