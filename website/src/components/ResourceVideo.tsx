interface ResourceVideoProps {
  src: string
}

const ResourceVideo = ({ src }: ResourceVideoProps) => {
  return (
    <iframe
      style={{ maxHeight: 270, maxWidth: 480 }}
      width="100%"
      height={270}
      src={src}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}

export default ResourceVideo
