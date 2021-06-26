import { IFileRowProps } from './fileRow.types';

export const FileRow = (props: IFileRowProps): JSX.Element => {
    const { file } = props;

    return (
        <>
            <td>{file.Type}</td>
            <td>
                <div onClick={props.toggleFileContent}>{file.Name}</div>
            </td>
            <td>{file.Forks.length}</td>
        </>
    );
};
