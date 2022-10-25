type AvatarProps = {
  name: string, 
  picture: string,
};

const Avatar = (props: AvatarProps) => {
  const { name, picture } = props;
  return (
    <div className="flex items-center">
      {picture && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`${picture}?auto=format,compress,enhance&w=50&h=50&fit=facearea&facepad=2.5`}
          srcSet={`${picture}?auto=format,enhance&w=50&h=50&fit=facearea&facepad=2.5 1x, ${picture}?auto=format,compress,enhance&w=50&h=50&fit=facearea&facepad=2.5&dpr=2 2x, ${picture}?auto=format,compress,enhance&w=50&h=50&fit=facearea&facepad=2.5&dpr=3 3x`}
          className="w-12 h-12 mr-4 rounded-full"
          alt={name}
        />
      )}
      <div className="text-xl font-bold">{name}</div>
    </div>
  )
}

export default Avatar;
