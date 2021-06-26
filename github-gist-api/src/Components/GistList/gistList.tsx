import React from 'react';
import { IDictionary } from '../../Model/IDicitionary';
import { IFileContentState } from '../../Model/IFileContentState';
import { IGistData } from '../../Model/IGistData';
import { IGistFile } from '../../Model/IGistFile';
import { GistServiceInstance } from '../../Service/Gist/gistCall';
import { IGistListProps } from './gistList.types';
import { GistRow } from './GistRow/gistRow';

export const GistList = (props: IGistListProps): JSX.Element => {
    const [filesContent, setFilesContent] = React.useState<IDictionary<IDictionary<IFileContentState>>>({});
    const columns: React.MutableRefObject<string[]> = React.useRef<string[]>(['Type', 'File', 'Forks']);

    const onFileContentToggle = async (file: IGistFile, gistID: string): Promise<void> => {
        if (!filesContent[gistID]) {
            filesContent[gistID] = {};
        }

        const isFileContentDownloaded: boolean = filesContent[gistID][file.Name] ? true : false;
        if (isFileContentDownloaded) {
            setFilesContent((filesContent) => {
                filesContent[gistID][file.Name].IsDisplayed = !filesContent[file.Name].IsDisplayed;
                return filesContent;
            });

            return;
        }

        const content: string = await GistServiceInstance.getFileContent(file.Name, gistID);
        setFilesContent((filesContent) => {
            filesContent[gistID][file.Name] = {
                IsDisplayed: true,
                Content: content,
            };

            return { ...filesContent };
        });
    };

    return (
        <table>
            <thead>
                <tr>
                    {columns.current.map((column: string) => {
                        return <th key={column}>{column}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {props.gistData.map((gist: IGistData) => (
                    <GistRow
                        key={gist.ID}
                        gist={gist}
                        onFileContentToggle={(file: IGistFile) => onFileContentToggle(file, gist.ID)}
                        fileContentStates={filesContent[gist.ID]}
                    />
                ))}
            </tbody>
        </table>
    );
};
