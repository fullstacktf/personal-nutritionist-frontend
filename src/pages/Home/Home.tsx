import './Home.css';
import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <div className="HomeImg">
        <h1>La web del cuidado personal</h1>
        <h2>Cómoda, accesible y la mejor manera de cuidarte a ti mismo.</h2>
        <Button variant="contained">Inicia sesión</Button>
      </div>
    </div>
  );
}
