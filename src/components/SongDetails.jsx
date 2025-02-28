import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <div>
      <h1>{search.song}</h1>
      <h3>{search.artist}</h3>

      {lyric && lyric.lyrics ? (
        <p style={{ whiteSpace: "pre-wrap" }}>{lyric.lyrics}</p>
      ) : (
        <Message />
      )}

      <hr />
      {bio && bio.artists ? (
        <p>
          <strong>{search.artist}: </strong>
          {bio.artists[0].strBiographyES}
        </p>
      ) : (
        <Message />
      )}
    </div>
  );
};

export default SongDetails;
