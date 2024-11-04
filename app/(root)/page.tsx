import StartupCard from "@/components/StartupCard";
import SearchForm from "@/components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name : "Some Name"
      },
      _id: 1,
      description : "This is a description",
      image: 'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
      category: "Category A",
      title : "This is a title",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Ideas <br /> Connect with Enterpreneurs
        </h1>
        <p className="sub-heading !max-w-3xl ">
          Vote on Pitches , Submit Ideas , Get notices in Virtual Competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold ">
          {query ? `Search results for "${query}"` : "All startups and ideas"}
        </p>

        <ul className="mt-7 card_grid ">
          {
            posts.length > 0 ? (
              posts.map((post : StartupCardType) => (
                <StartupCard key={post._id} post = {post}  />
              ))
            ) : (
              <p className = 'text-30-semibold' > No startups Found </p>
            )
          }
        </ul>
      </section>
    </>
  );
}
