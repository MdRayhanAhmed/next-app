import React from "react";

interface Props {
  params: { id: number; photoId: number };
}
const Photos = async ({ params }: Props) => {
  const { id, photoId } = await params;

  return (
    <div>
      Photos {id} {photoId}
    </div>
  );
};

export default Photos;
