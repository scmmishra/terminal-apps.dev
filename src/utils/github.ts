import { Octokit } from "octokit";
const github_pat = import.meta.env.GITHUB_API_KEY;
const octokit = new Octokit({ auth: github_pat });

export async function getRepo(reponame: string | undefined) {
  if (!reponame) return null;

  const [owner, repo] = reponame.split("/");

  const { data } = await octokit.request("GET /repos/{owner}/{repo}", {
    owner,
    repo,
  });
  console.log(data);
  return data;
}
