import { Octokit } from '@octokit/core';
import { IGistData } from '../../Model/IGistData';
import { GistDataMapper } from '../Mappers/gistDataMapper';

class GistService {
    private _octokit: Octokit;
    private _gistDataMapper: GistDataMapper;

    constructor() {
        this._octokit = new Octokit();
        this._gistDataMapper = new GistDataMapper();
    }

    private getGistForks = async (gistID: string) =>
        this._octokit.request(`GET /gists/${gistID}/forks`, {
            org: 'octokit',
            type: 'private',
        });

    public async getUserGistList(user: string): Promise<IGistData[]> {
        const response = await this._octokit.request(`GET /users/${user}/gists`, {
            org: 'octokit',
            type: 'private',
        });

        console.log(response);

        return Promise.all(response.data.map((gistData) => this._gistDataMapper.mapGistData(gistData, this.getGistForks)));
    }
}

const GistServiceInstance: GistService = new GistService();
export { GistServiceInstance };
