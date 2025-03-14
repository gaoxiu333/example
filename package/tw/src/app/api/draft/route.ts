import { draftMode } from "next/headers";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");
  // 后续步骤：判断是否有权限访问draft，如果有就进行数据请求，返回草稿数据
  const draft = await draftMode();
  draft.enable();
  return new Response("Draft mode is enabled");
}
