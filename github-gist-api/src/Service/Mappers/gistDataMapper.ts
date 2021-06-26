import { IFileFork } from '../../Model/IFileFork';
import { IGistData } from '../../Model/IGistData';
import { IGistFile } from '../../Model/IGistFile';

export class GistDataMapper {
    public mapForks = (forks): IFileFork[] => {
        return forks.map((forkData) => {
            return {
                Author: {
                    Name: forkData.owner.login,
                    Avatar: forkData.owner.avatar_url,
                },
            };
        });
    };

    public mapGistFile = (file, forks): IGistFile => {
        return {
            Name: file.filename,
            Language: file.language,
            Size: file.size,
            Type: file.type,
            URL: file.raw_url,
            Forks: this.mapForks(forks),
        };
    };

    public mapGistData = async (data, getFileForks: (gistID: string) => Promise<any>): Promise<IGistData> => {
        const gistID: string = data.id;

        const forksResponse = await getFileForks(gistID);

        const gistData: IGistData = {
            ID: gistID,
            IsTruncated: data.truncated,
            Files: Object.values(data.files).map((file) => this.mapGistFile(file, forksResponse.data)),
        };

        return gistData;
    };
}
