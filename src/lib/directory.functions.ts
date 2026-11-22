import { createServerFn } from "@tanstack/react-start";
import type { DirectoryResult } from "@/data/directory";

export const fetchDirectory = createServerFn({ method: "GET" })
  .validator((data: { preview?: boolean; reload?: boolean } | undefined) => ({
    preview: data?.preview === true,
    reload: data?.reload === true,
  }))
  .handler(async ({ data }): Promise<DirectoryResult> => {
    const { loadDirectory } = await import("./directory-cache.server");
    return loadDirectory(data);
  });
