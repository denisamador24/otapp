// @mui components
import { Button } from '@mui/material';
//import { Autorenew } from '@mui/icons-material';


const SumitButton = ({ onClick, loading, children }) => {
  
    if (loading) {
      return (<Button
          disabled
         
          onClick={onClick}
        >
          {children}
        </Button>)
    } else {
      return (<Button onClick={onClick}>
          {children}
        </Button>)
    }
}

export default SumitButton;