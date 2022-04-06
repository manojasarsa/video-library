import "./playlistcard.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { usePlaylist } from "../../contexts";
import { toast } from "react-hot-toast";

const PlaylistCard = ({eachPlaylist}) => {

      const { title, videos, _id } = eachPlaylist;

      const navigate = useNavigate();

      const { deletePlaylist } = usePlaylist();

      const playlistVideoHandler = () => {
            navigate(`/playlist/${_id}`)
      }

      return (
            
      );
} 

export {PlaylistCard};
