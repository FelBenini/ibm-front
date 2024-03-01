'use client';
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import { useState } from 'react';

const AddCopies = ({id}: {id: number}) => {
  const [quantity, setQuantity] = useState<string>('');
  const route = useRouter()
  const updateCopies = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/livros/${id}/exemplares`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({quantidade: parseInt(quantity, 2)}) 
    });
    route.push("/");
  }
  return (
    <form onSubmit={updateCopies} className={styles.form}>
      <label>Quantidade:</label>
      <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number" />
      <button>Adicionar Cópias</button>
    </form>
  )
}

export default AddCopies