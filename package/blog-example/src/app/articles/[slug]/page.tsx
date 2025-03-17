type PageProps = {
  params: Promise<{ slug: string }>;
};
const Page = async ({ params }: PageProps) => {
  const slug = (await params).slug;

  return <div>My article slug is: {slug}</div>;
};

export default Page;
