// SearchResultItem.js (unchanged from your provided code)
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface SearchResultItemProps {
  name: string;
  about: string;
  logoURL: string;
  id:number;
}

const SearchResultItem: React.FC<SearchResultItemProps> = ({
  name,
  about,
  logoURL,
  id
}) => {
  return (
    <Link href={`/agency/${id}`} >
      <div className="w-full bg-white  flex gap-4 mt-2 p-5">
        <Image src={logoURL} width={150} height={150} alt="logo" />
        <div>
          <h5 className="font-bold font-silka text-[16px]">{name}</h5>
          <h5 className="font-silka text-sm">{about}</h5>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultItem;
