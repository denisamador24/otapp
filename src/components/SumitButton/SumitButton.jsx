import { Button } from '@mui/material';

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