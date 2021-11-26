import { NextApiRequest, NextApiResponse } from "next";

export default function(request: NextApiRequest, response: NextApiResponse) {
    console.log('recivied event');


    return response.status(200).json({ok: true});
}