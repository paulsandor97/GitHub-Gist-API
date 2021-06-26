import { IUserListProps } from './userList.types';

export const UserList = (props: IUserListProps): JSX.Element => {
    return (
        <ul>
            {props.names.map((name: string) => (
                <li key={name}>{name}</li>
            ))}
        </ul>
    );
};
