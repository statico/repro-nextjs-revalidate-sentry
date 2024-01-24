type PageProps = {
  builtOn: string;
};

export const getStaticProps = async () => {
  return {
    props: {
      builtOn: new Date().toISOString(),
    },
  };
};

export default function Page({ builtOn }: PageProps) {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <h2>Built on {builtOn}</h2>
      <form action="/api/revalidate" method="post">
        <button>Revalidate</button>
      </form>
      <button
        onClick={() => {
          throw new Error("Test error");
        }}
      >
        Test Sentry Error
      </button>
    </div>
  );
}
