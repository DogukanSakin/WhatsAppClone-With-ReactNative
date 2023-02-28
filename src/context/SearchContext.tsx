import React from "react";
import { createContext, useState } from "react";
interface IObjectKeys {
  [key: string]: any;
}
interface IProps extends IObjectKeys {
  searchValue: string;
  setSearchValue: any;
}
const SearchContext = createContext<IProps>(null!);
export function SearchProvider({ children }: any) {
  const [searchValue, setSearchValue] = useState<string>("");
  const values: IProps = {
    searchValue,
    setSearchValue,
  };
  return (
    <SearchContext.Provider value={values}>{children}</SearchContext.Provider>
  );
}
export default SearchContext;
