import {NextApiRequest, NextApiResponse} from 'next';

export default (request:NextApiRequest, response: NextApiResponse ) => {
    const users = [
        {id: 1, name: 'Rafael'},
        {id: 2, name: 'Simba'},
        {id: 3, name: 'Tobias'},
    ];

    return response.json( { users } );
}