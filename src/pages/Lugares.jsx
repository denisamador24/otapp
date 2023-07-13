import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import resolveImg from '../utils/imageResolve.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../components/Header';

// styles 
import './Lugares.css';

import lugaresEs from '../utils/lugares_es.js';
import lugaresEn from '../utils/lugares_en.js';

const Lugares = () => {
  const { t, i18n } = useTranslation();
  
  let lugares;
  
  if (i18n.language == 'es'){
    lugares = lugaresEs;
  } else {
    lugares = lugaresEn;
  }
  
  return (
    <div>
      <Header/>
      <div className="lugares-list">
        {lugares.map( (lugar, index) => {
        
        return (
          <div key={lugar+index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 160 }}  
                image={resolveImg(lugar.images[0])}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {lugar.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {lugar.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'end'}}>
                <Link to={`/lugares/info/${index}`}
                ><Button size="small"
                >{t('see_more')}</Button></Link>
              </CardActions>
            </Card>
          </div>
        )
        })
        }
      </div>
    </div>
  );
}

export default Lugares;