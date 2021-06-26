import { IGistFile } from '../../../Model/IGistFile';

export interface IFileRowProps {
    file: IGistFile;
    toggleFileContent: (name: string) => void;
}
