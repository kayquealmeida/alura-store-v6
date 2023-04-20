import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

export default function Menu() {
  const rotas = [
    {
      label: 'Nova Colecao',
      to: '/'
    },
    {
      label: 'Masculino',
      to: '/masculino'
    },
    {
      label: 'Feminino',
      to: '/feminino'
    },
    {
      label: 'Infantil',
      to: '/infantil'
    }
  ];
  
  return (
    <nav className={styles.menu}>
      <ul className={styles.menu__list}>
        {
          rotas.map((rota, index) => (
            <li key={index} className={styles.menu__link}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  );
}