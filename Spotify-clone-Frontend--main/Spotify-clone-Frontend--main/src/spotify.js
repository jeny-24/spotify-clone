export const authEndpoint=
"https://accounts.spotify.com/authorize"

const redirectUrl="http://localhost:3000/"

const clientId="927a8aad16714e1eae6a3f46595a6165"

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl=`${authEndpoint}?
client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dailog=true`;

export const getTokenFromUrl= ()=>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial,item)=>{
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])

        return initial;
    },{});
}

