import "../styles/sidebar.scss";
import { Button } from "./Button";

export function SideBar({ genres, handleClickButton, selectedGenreId }) {
  return (
    <div className="buttons-container">
      {genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
}
