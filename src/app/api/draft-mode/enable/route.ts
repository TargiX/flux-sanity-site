import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client, isSanityConfigured } from "@/sanity/lib/client";

const token = process.env.SANITY_API_READ_TOKEN;

const draftMode = defineEnableDraftMode({
  client: client.withConfig({ token }),
});

export async function GET(request: Request) {
  if (!isSanityConfigured || !token) {
    return Response.json(
      {
        message:
          "Sanity draft preview is not configured. Set NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, and SANITY_API_READ_TOKEN.",
      },
      { status: 503 },
    );
  }

  return draftMode.GET(request);
}
