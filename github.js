class GitHub{
    constructor(){
        this.client_id = '9eb62c726b3f227b4aea';
        this.client_secret = 'e55ebe442278dfed2bb7727f58ddca4444fffaa3';
        this.repos_count =5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profileData = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile : profileData,
            repos
        }
    }
}