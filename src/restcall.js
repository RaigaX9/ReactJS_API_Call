import axios from 'axios';
var apiurl = 'https://api.github.com/users';

export var getrepo = 'FETCH_REPO';

export default function(per = [], event) {
        if(event.type == getrepo)
        {
            return {
                per,
                repos: event.payload.data
            };
        }
        else
        {
            return per;
        }

}

export function getUser(user) {
    var r1 = axios.get(`${apiurl}/${user}/repos`);
    return {
        type: getrepo,
        payload: r1
    };
}

export function getIssues(user) {
    var r2 = axios.get(`${apiurl}/${user}/repos/issues`);
    return {
        type: getrepo,
        payload: r2
    };
}