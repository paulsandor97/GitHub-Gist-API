import React from 'react';
import { IDictionary } from '../../Model/IDicitionary';
import { IGistData } from '../../Model/IGistData';
import { IGistFile } from '../../Model/IGistFile';
import { FileRow } from './FileRow/fileRow';
import { IGistListProps } from './gistList.types';

interface IFileContentState {
    Content: string;
    IsDisplayed: boolean;
}

export const GistList = (props: IGistListProps): JSX.Element => {
    const [filesContent, setFilesContent] = React.useState<IDictionary<IFileContentState>>({});
    const columns: React.MutableRefObject<string[]> = React.useRef<string[]>(['Type', 'File', 'Forks']);

    const onFileContentToggle = (fileName: string): void => {
        const isFileContentDownloaded: boolean = filesContent[fileName] ? true : false;
        if (isFileContentDownloaded) {
            setFilesContent((fileContent) => {
                filesContent[fileName].IsDisplayed = !filesContent[fileName].IsDisplayed;
                return filesContent;
            });

            return;
        }
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
                {props.gistData.map((gist: IGistData) => {
                    return gist.Files.map((file: IGistFile) => <FileRow key={file.Name} file={file} toggleFileContent={onFileContentToggle} />);
                })}
            </tbody>
        </table>
    );
};
