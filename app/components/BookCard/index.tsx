'use client'
import { Book } from "@/app/types"
import styles from './styles.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import EditIcon from '@mui/icons-material/Edit';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const BookCard = ({book}: {book: Book}) => {
  const router = useRouter();
  const handleDelete = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/livros/${book.id}`, {method: "DELETE"})
    router.refresh()
  }

  return (
    <Link className={styles.item} href={`/${book.id}`}>
      <h3>{book.id} {book.titulo}</h3>
      <p>{book.autor}</p>
      <p>{book.exemplar}</p>
      <span>
        <Link href={`/${book.id}/add-reserva`}>
          <AddRoadIcon />
        </Link>
        <Link href={`/${book.id}/edit`}>
          <EditIcon />
        </Link>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
        <Link href={`/${book.id}/add-copias`}>
          <ControlPointIcon />
        </Link>
      </span>
    </Link>
  )
}

export default BookCard