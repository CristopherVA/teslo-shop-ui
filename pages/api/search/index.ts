import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
   msg: string
}

export default function hanlde(req: NextApiRequest, res: NextApiResponse<Data>) {
   res.status(200).json({ msg: 'Debe verificar el query de busqueda' })
}