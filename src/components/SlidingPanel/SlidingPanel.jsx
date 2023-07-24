import './sliding_panel.css';

import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

const SlidingPanel = ({ isOpen, onClose, children }) => {
  
  const { t } = useTranslation();
  
  return (
    <div className={`panel-deslizante ${isOpen ? 'abierto' : ''}`}>
      {/* Contenido del panel deslizante */}
      <div className='panel-deslizante__button'>
        <Button
          onClick={onClose}
          endIcon={<CloseIcon/>}>
          {t('close')}
        </Button>
      </div>
        
      <div className="contenido">
        {/* Aquí puedes añadir cualquier contenido adicional que desees mostrar */}
        {children}

      </div>
    </div>
  );
};

export default SlidingPanel;
