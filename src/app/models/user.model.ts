
export interface User{
     name:string,
     avatar_url:string,
     blog?:string,
     followers:number,
     following:number,
     githubUrl:string,
     location:string,
     html_url:string,
     public_repos:number
     repos_url:string,
     bio:string;
}


export interface Repo{
     name:string;
     stargazers_count:number;
     forks_count:number;
     allow_forking:number;
     html_url:string;
}

