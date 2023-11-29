import "./ProjectDescription.css";

export function ProjectDescription() {
  return (
    <section className="notesContainer">
      <div className="infoMargin">
        <h4 className="infoMargin">
          Keyboard shortcuts:
        </h4>
        <ul className="ul">
          <li>
            # + space : h1
          </li>
          <li>
            * + space: bold
          </li>
          <li>
            ** + space: red color
          </li>
          <li>
            *** + space: underline
          </li>
          <li>
            ``` + space: code block
          </li>
        </ul>
      </div>

      <div className="noteWrapper infoMargin">
        <h4>NOTE:</h4>
        <p className="note">
          These keyboard shortcuts only work as the first string of a new line. The styling is only for the current
          line.
          A new line should be unstyled.
        </p>
      </div>
      <div className="infoMargin">
        <h4 className="infoMargin">
          Button Meaning:
        </h4>
        <ul className="ul">
          <li>Save Data: Saves editor data with it's style to localstorage.</li>
          <li>Clear Editor: Clears the editor screen, but doesn't delete the data from localstorage</li>
          <li>Clear Stored Data: Deletes data from local storage but doesn't clean the editor screen</li>
          <li>Reload page: Reloads the page.</li>
        </ul>
      </div>
    </section>
  );
};
