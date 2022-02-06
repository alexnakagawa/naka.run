export const SITE_URL = 'https://naka.run'
export const GH_USER_REPO = 'alexnakagawa/naka.run/' // used for pulling github issues and offering comments
export const REPO_URL = 'https://github.com/' + GH_USER_REPO

// dont forget process.env.GH_TOKEN
// if supplied, raises rate limit from 60 to 5000
// https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting