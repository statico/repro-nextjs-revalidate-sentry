import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await res.revalidate("/");

  console.log("XXX COOKIES", JSON.stringify(req.cookies, null, 2));
  console.log("XXX HEADERS", JSON.stringify(req.headers, null, 2));
  console.log("XXX PREVIEW", JSON.stringify(req.preview, null, 2));

  res.setHeader("Location", "/");
  res.status(302);
  res.end();
}
