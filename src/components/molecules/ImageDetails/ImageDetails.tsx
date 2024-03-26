type ImageDetailsType = {
  title: string;
};

const ImageDetails = ({ title }: ImageDetailsType) => {
  return (
    <div className="col w-1/3 min-w-[375px] light-border">
      <h2 className="text-3xl text-center">{` ${title}`}</h2>
    </div>
  );
};

export default ImageDetails;
