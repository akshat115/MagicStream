import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import './StreamMovie.css';

const StreamMovie = () => {
  const params = useParams();
  const key = params.yt_id;

  const embedUrl = useMemo(() => {
    if (!key) return null;

    const trimmedKey = key.trim();

    if (/^[A-Za-z0-9_-]{11}$/.test(trimmedKey)) {
      return `https://www.youtube.com/embed/${trimmedKey}`;
    }

    return `https://www.youtube.com/embed/videoseries?list=${encodeURIComponent(trimmedKey)}`;
  }, [key]);

  return (
    <div className="react-player-container">
      {embedUrl ? (
        <iframe
          title="Movie Stream"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          width="100%"
          height="100%"
          style={{ border: 'none' }}
        />
      ) : (
        <div className="text-center text-white">
          <p>Unable to load video. Please try a different movie.</p>
        </div>
      )}
    </div>
  );
};

export default StreamMovie;