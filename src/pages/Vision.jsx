import styles from "./Vision.module.css";

export default function Vision() {
  return (
    <>
      <h2>Vision</h2>
      <ul>
        <li>
          Min database skal indeholde alle dansksprogede film fra TMDB (5547 pr.
          31. marts 2025).
        </li>
        <li>
          Brugeren skal kunne fremsøge disse film ud fra tekst i filmenes titel
          og originaltitel.
        </li>
        <li>
          Brugeren skal kunne logge ind, så deres holdninger til film kan blive
          gemt.
        </li>
        <li>
          For hver film skal brugeren kunne angive sin holdning: Kan lide (👍),
          eller kan ikke lide (👎).
        </li>
        <li>
          Brugeren skal kunne se en oversigt over sine holdninger til film, og
          kunne ændre og slette sine holdninger.
        </li>
        <li>
          Brugeren skal kunne få Movie Recommendations, som en algoritme
          genererer ud fra brugerens holdninger til film.
        </li>
      </ul>
      <div className={styles.mockups}>
        <img src="Mockup_Search.png"></img>
        <img src="Mockup_Login.png"></img>
        <img src="Mockup_CreateAccount.png"></img>
        <img src="Mockup_Ratings.png"></img>
        <img src="Mockup_Recommendations.png"></img>
        <img src="Mockup_WildMen.png"></img>
      </div>
    </>
  );
}
