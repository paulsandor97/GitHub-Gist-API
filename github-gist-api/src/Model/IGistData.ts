import { IGistFile } from './IGistFile';

export interface IGistData {
    Files: IGistFile[];
    IsTruncated: boolean;
}
