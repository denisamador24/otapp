import './places.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import resolveImg from '@utils/imageResolve.js';

import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';

import { Header } from '@components';

import lugaresEs from '@data/lugares_es.js';
import lugaresEn from '@data/lugares_en.js';
import lugaresFr from '@data/lugares_fr.js';

const Lugares = () => {
  const { t, i18n } = useTranslation();
  
  let lugares;
  
  if (i18n.language == 'es'){
    lugares = lugaresEs;
  } else if (i18n.language == 'en') {
    lugares = lugaresEn;
  } else if ( i18n.language == 'fr') {
    lugares = lugaresFr;
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