import React from 'react';
import { ISearchBarProps } from './searchBar.types';

export const SearchBar = (props: ISearchBarProps): JSX.Element => {
    const [text, setText] = React.useState<string>('paulsandor97');

    const onSearchClick = (): void => {
        if (!text) {
            return;
        }

        props.onSearch(text);
    };

    return (
        <form>
            <input
                type='text'
                placeholder='Search user gists...'
                value={text}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
            />
            <input type='button' value='Search' onClick={onSearchClick} />
        </form>
    );
};
