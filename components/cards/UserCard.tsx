import Image from "next/image";
import Link from "next/link";
import React from "react";

interface UserCardProps {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100 darknone w-full max-xs:min-w-full xs:w-[260px]"
    >
      <article className="background-light900_dark200 light-border flex-center w-full flex-col rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt="user profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
        </div>
        <p className="body-regular text-dark500_light500 mt-2">
          @{user.username}
        </p>
      </article>
    </Link>
  );
};

export default UserCard;
