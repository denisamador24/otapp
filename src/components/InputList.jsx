import Button from '@mui/material/Button';

const InputList = ({list, setList}) => {
  
    const listItem = list.map((it, index) => <input 
              value={it}
              onChange={ (e) => {
                const newServicesList = list.map((changeIt, changeIndex) => index == changeIndex ? e.target.value : changeIt)
                setList(newServicesList);
              }}
          />
  );
  return (
    <div>{listItem}
          <Button
            variant='outlined'
            onClick={ (event) => {
              // borrar el ultimo item de la lista
              const newServices = list.slice();
              newServices.pop()
              setList(newServices);
            }}
          >-</Button>
          
          <Button
            variant='outlined'
            onClick={ (event) => setList([ ...list, ''])}
          >+</Button>
          
          </div>
  )
}

export default InputList;