import { IDictionary } from '../../../Model/IDicitionary';
import { IFileContentState } from '../../../Model/IFileContentState';
import { IGistData } from '../../../Model/IGistData';
import { IGistFile } from '../../../Model/IGistFile';

export interface IGistRowProps {
    gist: IGistData;
    fileContentStates: IDictionary<IFileContentState>;
    onFileContentToggle: (file: IGistFile) => void;
}
