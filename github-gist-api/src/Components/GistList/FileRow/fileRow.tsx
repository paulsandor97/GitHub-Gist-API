import { IFileFork } from '../../../Model/IFileFork';
import { FileAvatar } from '../../FileAvatar/fileAvatar';
import { UserList } from '../../UserList/userList';
import { IFileRowProps } from './fileRow.types';

const MAX_FORK_USERS_DISPLAY: number = 3;

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
                <UserList names={file.Forks.slice(0, MAX_FORK_USERS_DISPLAY).map((fork: IFileFork) => fork.Author.Name)} />
            </td>
        </>
    );
};
