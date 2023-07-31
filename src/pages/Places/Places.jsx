import './places.css';

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { 
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@mui/material';

import { Header } from '@components';

import getPlacesData from '@utils/getPlacesData.js'

const Places = () => {
  const { t } = useTranslation();
  const places = getPlacesData()

  return (
    <div>
      <Header/>
      <div className="lugares-list">
        {places.map( (place, index) => {
        
        return (
          <div key={place+index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 160 }}  
                image={place.images[0]}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {place.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description}
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

export default Places;