import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate("/");
  res.setHeader("Location", "/");
  res.status(302);
  res.end();
}
