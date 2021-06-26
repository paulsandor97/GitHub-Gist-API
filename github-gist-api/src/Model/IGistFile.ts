import { IFileFork } from './IFileFork';

export interface IGistFile {
    Name: string;
    Language: string;
    URL: string;
    Size: number;
    Type: string;
    Forks: IFileFork[];
}
