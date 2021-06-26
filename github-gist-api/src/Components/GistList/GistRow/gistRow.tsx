import React from 'react';
import { IGistFile } from '../../../Model/IGistFile';
import { FileRow } from '../FileRow/fileRow';
import { IGistRowProps } from './gistRow.types';

export const GistRow = (props: IGistRowProps): JSX.Element => {
    const { gist } = props;
    return (
        <>
            {gist.Files.map((file: IGistFile) => (
                <React.Fragment key={gist.ID + file.Name}>
                    <tr key={gist.ID + file.Name}>
                        <FileRow key={file.Name} file={file} toggleFileContent={() => props.onFileContentToggle(file)} />
                    </tr>
                    {props.fileContentStates && props.fileContentStates[file.Name] && props.fileContentStates[file.Name].IsDisplayed && (
                        <tr>
                            <td colSpan={5}>{props.fileContentStates[file.Name].Content}</td>
                        </tr>
                    )}
                </React.Fragment>
            ))}
        </>
    );
};
