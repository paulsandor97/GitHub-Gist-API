import { Octokit } from '@octokit/core';
import { IGistData } from '../../Model/IGistData';
import { IGistFile } from '../../Model/IGistFile';

class GistCallHelper {
    private _octokit: Octokit;

    constructor() {
        this._octokit = new Octokit();
    }

    private mapGistFile = (file): IGistFile => {
        return {
            Name: file.fileName,
            Language: file.language,
            Size: file.size,
            Type: file.type,
            URL: file.raw_url,
        };
    };

    private mapGistData = (data): IGistData => {
        return {
            IsTruncated: data.truncated,
            Files: Object.values(data.files).map(this.mapGistFile),
        };
    };

    public async getUserGistList(user: string): Promise<IGistData[]> {
        const response = await this._octokit.request(`GET /users/${user}/gists`, {
            org: 'octokit',
            type: 'private',
        });

        return response.data.map(this.mapGistData);
    }
}

const GistCallHelperInstance: GistCallHelper = new GistCallHelper();
export { GistCallHelperInstance };
