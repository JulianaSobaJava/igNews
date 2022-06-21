import { NextApiResponse, NextApiRequest } from 'next';

export default (_request: NextApiRequest, response: NextApiResponse)=>{
    const users = [
        { id: 1, name: 'Janeth' },
        { id: 2, name: 'Juliana' },
        { id: 3, name: 'Roubo' },
    ];

    return response.json(users);
}