import { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';

const SearchBar: React.FunctionComponent = () => {
    const [text, setText] = useState('');

    return (
        <FormLabel>
            <TextField
                onChange={(event) => setText(event.target.value)}
                value={text}
                fullWidth
                variant="outlined"
                label="Sök efter ett ord"
                type='input'
            />

            <Button
                onClick={() => Router.push('/ord/[word]', `/ord/${text.toLowerCase()}`, { shallow: true })}
                fullWidth
                aria-label="search"
                color="default"
                style={{ background: '#15C39A', color: 'white', marginTop: '12px' }}
            >
                <SearchIcon />
            </Button>
        </FormLabel>
    )
}

export default SearchBar;