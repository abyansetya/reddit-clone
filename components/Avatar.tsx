import React from "react";
import { useSession } from "next-auth/react";
import Image from "next/image";

type Props = {
  seed?: string;
  large?: boolean;
};

function Avatar({ seed, large }: Props) {
  const { data: session } = useSession();

  return (
    <div
      className={`relative overflow-hidden h-10 w-10 rounded-full border-gray-300 bg-white ${
        large && "h-20 w-20"
      }`}
    >
      <Image
        layout="fill"
        src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${seed}.svg`}
        alt="profile picture"
      />
    </div>
  );
}

export default Avatar;
