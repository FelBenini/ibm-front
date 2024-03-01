import { notFound } from "next/navigation";
import styles from './page.module.css'
import AddReserva from "./AddReserva";

export const revalidate = 0;

const fetchBookInfo = async (id: number) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/livros/${id}`)
  if (res.status !== 200) return null
  return await res.json();
}

const EditPage = async ({params}: {params: {id: number}}) => {
  const data = await fetchBookInfo(params.id);
  if (!data) return notFound()
  return (
    <main className={styles.main}>
      <div>
        <h1>{data.id} {data.titulo}</h1>
      </div>
      <AddReserva book={data} />
    </main>
  )
}

export default EditPage