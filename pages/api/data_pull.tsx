import { google, sheets_v4 } from "googleapis";
import keys from "../../key.json";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {range} = req.query;
        console.log("range: " + range);

        const client = new google.auth.JWT({
            email: keys.client_email,
            key: keys.private_key,
            scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
        });

        await client.authorize();

        const gsapi = google.sheets({ version: 'v4', auth: client });
        
        const opt: sheets_v4.Params$Resource$Spreadsheets$Values$Get = {
            spreadsheetId: '1qic8StIuWxogoeZlupG9HvTvts6-jXMS0JZ1J6tZNn4',
            range: range as string,
            //'Sheet1!A2:B2'
        };

        const { data } = await gsapi.spreadsheets.values.get(opt);
        return res.status(200).json({ error: false, data: data.values });
    } catch (e: any) {
        return res.status(400).json({ error: true, message: e.message });
    }
}