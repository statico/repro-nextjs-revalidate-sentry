import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate("/");
  // console.log("XXX REQUEST", JSON.stringify(req, null, 2));
  // console.log("XXX RESPONSE", JSON.stringify(res, null, 2));
  res.setHeader("Location", "/");
  res.status(302);
  res.end();
}
