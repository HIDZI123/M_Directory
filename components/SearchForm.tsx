import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearchForm = ({query} : {query? : string}) => {
  /* const query: string = "test"; */

  

  return (
    <Form action={"/"} scroll={false} className="search-form">
      <input
        className="search-input"
        name="query"
        placeholder="Search Startups"
        defaultValue={query}
      />
      <div className="flex gap-2">
        {query && <SearchFormReset/> }

        <button type="submit" className="text-white search-btn" >  <Search className="size-5"/> </button>
      </div>
    </Form>
  );
};

export default SearchForm;
