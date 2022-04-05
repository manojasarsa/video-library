const VideoIframe = ({videoId}) => {
      return (
            <iframe style={{width: "50rem" , height: "25rem" }}
                  src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
            </iframe>
      );
}

export {VideoIframe};