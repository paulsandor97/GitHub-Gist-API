import { IFileFork } from '../../../Model/IFileFork';
import { FileAvatar } from '../../FileAvatar/fileAvatar';
import { UserList } from '../../UserList/userList';
import { IFileRowProps } from './fileRow.types';

export const FileRow = (props: IFileRowProps): JSX.Element => {
    const { file } = props;

    return (
        <>
            <td>
                <FileAvatar name={file.Name} />
            </td>
            <td>
                <div onClick={props.toggleFileContent}>{file.Name}</div>
            </td>
            <td>{file.Forks.length}</td>
            <td>
                <UserList names={file.Forks.map((fork: IFileFork) => fork.Author.Name)} />
            </td>
        </>
    );
};
