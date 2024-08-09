import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div className='container'>
        <h1>Bienvenido a la página principal</h1>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, background:'grey' }}
        height="140"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">Agregar</Button>
        <Button variant="outlined" color='error' size="small">Eliminar</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default Home