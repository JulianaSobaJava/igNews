import { NextApiResponse, NextApiRequest } from 'next';


//JWT (Storage);
//Next Auth (Social);
//Cognito, Auth0
export default (_request: NextApiRequest, response: NextApiResponse)=>{
    const users = [
        { id: 1, name: 'Janeth' },
        { id: 2, name: 'Juliana' },
        { id: 3, name: 'Roubo' },
    ];

    return response.json(users);
}