import EditForm from "./EditForm";

export const revalidate = 0;

const fetchBookInfo = async (id: number) => {
  const res = await fetch(`${process.env.BACKEND_URL}/api/livros/${id}`)
  return await res.json();
}

const EditPage = async ({params}: {params: {id: number}}) => {
  const data = await fetchBookInfo(params.id);
  return (
    <EditForm book={data} />
  )
}

export default EditPage