import { IFileRowProps } from './fileRow.types';

export const FileRow = (props: IFileRowProps): JSX.Element => {
    const { file } = props;

    return (
        <tr>
            <td>{file.Type}</td>
            <td>{file.Name}</td>
            <td>{file.Forks.length}</td>
        </tr>
    );
};
