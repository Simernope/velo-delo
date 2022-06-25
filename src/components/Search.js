import {TextField} from "@mui/material";

const Search = (props) => {
    const { onChange, value } = props;

    return <TextField
        type='search'
        value={value}
        onChange={onChange}
        label="search"
        variant="standard"
        fullWidth
        sx={{mb: 2}}
    />;
};

export default Search;
