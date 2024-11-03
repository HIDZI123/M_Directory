import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams} : {searchParams : Promise <{query? : string}>}) {
    const query = (await searchParams).query
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Ideas <br /> Connect with Enterpreneurs
      </h1>
      <p className="sub-heading !max-w-3xl ">
        Vote on Pitches , Submit Ideas , Get notices in Virtual Competitions
      </p>
      <SearchForm query = {query} />
    </section>
  );
}
