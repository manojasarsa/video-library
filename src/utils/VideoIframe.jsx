const VideoIframe = ({videoId}) => {
      return (
            <iframe style={{width: "384px" , height: "280px" }}
                  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
      );
}

export {VideoIframe};