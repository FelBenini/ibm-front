import { Reservation } from '@/app/types'
import styles from './styles.module.css'

const ReservasCard = ({reservation}: {reservation: Reservation}) => {
  return (
    <li className={styles.item}>
      <h3>{reservation.id} {reservation.usuario}</h3>
      <p>{reservation.data_inicio}</p>
      <p>{reservation.data_fim}</p>
    </li>
  )
}

export default ReservasCard