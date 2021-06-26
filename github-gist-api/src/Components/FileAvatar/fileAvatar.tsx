import Avatar from 'react-avatar';
import { IFileAvatarProps } from './fileAvatar.types';

export const FileAvatar = (props: IFileAvatarProps): JSX.Element => {
    const getFileExtensionToDisplay = (): string => {
        const fileExtension: string = props.name.split('.').pop();
        return fileExtension.split('').join(' ');
    };

    return <Avatar name={getFileExtensionToDisplay()} size='30' />;
};
