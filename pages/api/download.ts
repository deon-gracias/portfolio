import { join } from 'path';
import { createReadStream } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const filePath = join(process.cwd(), 'public', 'deon_gracias_resume.pdf');
  const stream = createReadStream(filePath);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=deon_gracias_resume.pdf');

  stream.pipe(res);
}
