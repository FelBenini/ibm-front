import { notFound } from "next/navigation";
import styles from './styles.module.css'
import AddCopies from "./AddCopies";

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
        <p>Adicionar Cópias</p>
      </div>
      <AddCopies id={data.id} />
    </main>
  )
}

export default EditPage