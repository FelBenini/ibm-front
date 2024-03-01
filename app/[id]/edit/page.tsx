import EditForm from "./EditForm";
import { notFound } from "next/navigation";

export const revalidate = 0;

const fetchBookInfo = async (id: number) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/livros/${id}`)
  if (res.status !== 200) return null;
  return await res.json();
}

const EditPage = async ({params}: {params: {id: number}}) => {
  const data = await fetchBookInfo(params.id);
  if (!data) return notFound();
  return (
    <EditForm book={data} />
  )
}

export default EditPage