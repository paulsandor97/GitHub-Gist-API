import React from 'react';
import { IGistData } from '../../Model/IGistData';
import { GistServiceInstance } from '../../Service/Gist/gistCall';
import { GistList } from '../GistList/gistList';
import { SearchBar } from '../SearchBar/searchBar';

export const GistDashboard = (): JSX.Element => {
    const [gistData, setGistData] = React.useState<IGistData[]>();

    const onSearcUserGistData = (user: string): void => {
        GistServiceInstance.getUserGistList(user).then((gistData: IGistData[]) => {
            setGistData(gistData);
        });
    };

    return (
        <div>
            <SearchBar onSearch={onSearcUserGistData} />
            {gistData && gistData.length > 0 && <GistList gistData={gistData} />}
        </div>
    );
};
