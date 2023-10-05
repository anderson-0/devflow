import Link from "next/link";
import React from "react";

interface RenderTagProps {
  _id: number;
  name: string;
  totalQuestions: number;
  showCount?: boolean;
}

const RenderTag = ({
  _id,
  name,
  totalQuestions,
  showCount,
}: RenderTagProps) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      {name}
    </Link>
  );
};

export default RenderTag;
