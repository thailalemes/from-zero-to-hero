import * as prismic from '@prismicio/client'

export function getPrismicClient(req?: unknown) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT)
    client.enableAutoPreviewsFromReq(req)

  return client;
}
