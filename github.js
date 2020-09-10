class Github {
    constructor() {
        this.client_id = 'a3886d2cc438fe34b47f';
        this.client_secret = '8545f3e1f4f4cec2e5dcdcf8ea8b82138e2c4143';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser (user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);


        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
