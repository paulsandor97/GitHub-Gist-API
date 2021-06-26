import { IGistFile } from './IGistFile';

export interface IGistData {
    ID: string;
    Files: IGistFile[];
    IsTruncated: boolean;
}
