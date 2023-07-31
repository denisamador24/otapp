import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ options, value, onChange }) {

  return (
    <Autocomplete
      options={options}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Buscar..."
          variant="outlined"
          InputProps={{
            ...params.InputProps,
            inputMode: 'numeric',
            pattern: '[0-9]*',
            startAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      )}
    />
  );
}

export default SearchBar;
