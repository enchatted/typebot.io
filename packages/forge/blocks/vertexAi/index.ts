import { createBlock } from "@typebot.io/forge";
import { auth } from "./auth";
import { VertexAiLogo } from "./logo";

export const vertexAiBlock = createBlock({
  id: "vertex-ai",
  name: "Vertex AI",
  tags: [],
  LightLogo: VertexAiLogo,
  auth,
  actions: [],
});
