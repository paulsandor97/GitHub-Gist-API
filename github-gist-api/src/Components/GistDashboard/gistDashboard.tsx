import React from 'react';
import { IGistData } from '../../Model/IGistData';
import { GistCallHelperInstance } from '../../Service/Gist/gistCall';
import { SearchBar } from '../SearchBar/searchBar';

export const GistDashboard = (): JSX.Element => {
    const [gistData, setGistData] = React.useState<IGistData[]>();

    const onSearcUserGistData = (user: string): void => {
        GistCallHelperInstance.getUserGistList(user).then((gistData: IGistData[]) => {
            setGistData(gistData);
        });
    };

    React.useEffect(() => {
        console.log(gistData);
    }, [gistData]);

    return (
        <div>
            <SearchBar onSearch={onSearcUserGistData} />
        </div>
    );
};
