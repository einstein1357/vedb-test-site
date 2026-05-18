/* =========================================================
   VEDB 4.4C — CLEAN CAREER LABEL TITLE LINKS
   Paste at the VERY BOTTOM of the JS box.

   Fixes:
   - Removes the busy separate blue title-sphere buttons
     under Signature Work and Title Sphere Connections.
   - Makes each movie/show title itself clickable.
   - Keeps using the same full-body-open-title-v4 system
     that already opens Title Spheres.

   Does NOT:
   - touch startup
   - touch Full Page memory
   - touch Zendaya bug fix
   - touch search
========================================================= */

(function () {
  if (window.vedbCareerLabelTitleLinksV44CInstalled) return;
  window.vedbCareerLabelTitleLinksV44CInstalled = true;

  function safe(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function normalizeTitle(item) {
    if (!item) return "";

    if (Array.isArray(item)) {
      return String(item[0] || "").trim();
    }

    if (typeof item === "object") {
      return String(item.title || item.name || item.movie || item.show || "").trim();
    }

    return String(item || "").trim();
  }

  function normalizeYear(item) {
    if (!item) return "";

    if (Array.isArray(item)) {
      return String(item[1] || "").trim();
    }

    if (typeof item === "object") {
      return String(item.year || item.releaseYear || "").trim();
    }

    return "";
  }

  function getList(actor, keys) {
    for (const key of keys) {
      if (actor && Array.isArray(actor[key]) && actor[key].length) {
        return actor[key];
      }
    }

    return [];
  }

  function getKnownFor(actor) {
    return getList(actor, ["knownFor", "signatureWork", "signature"]);
  }

  function getFullBody(actor) {
    return getList(actor, [
      "fullBodyOfWork",
      "fullBody",
      "fullCredits",
      "credits",
      "filmography",
      "bodyOfWork"
    ]);
  }

  function getCharacters(actor) {
    return getList(actor, ["characters", "roles", "characterRoles"]);
  }

  function getAwards(actor) {
    return getList(actor, ["awards", "recognition", "nominations"]);
  }

  function titleObjects(list, limit) {
    return list
      .map(function (item) {
        const title = normalizeTitle(item);
        const year = normalizeYear(item);

        if (!title) return null;

        return {
          title: title,
          year: year,
          display: year ? `${title} (${year})` : title
        };
      })
      .filter(Boolean)
      .slice(0, limit || 8);
  }

  function plainRows(list, limit) {
    return list
      .map(function (item) {
        if (Array.isArray(item)) return String(item[0] || "").trim();
        if (item && typeof item === "object") {
          return String(item.label || item.name || item.title || item.role || item.description || "").trim();
        }
        return String(item || "").trim();
      })
      .filter(Boolean)
      .slice(0, limit || 6);
  }

  function clickableTitleList(actor, titleItems, typeLabel) {
    if (!Array.isArray(titleItems) || !titleItems.length) return "";

    return `
      <ul class="vedb-career-title-list-v44c">
        ${titleItems.map(function (item) {
          return `
            <li>
              <button
                type="button"
                class="vedb-title-text-link-v44c full-body-open-title-v4"
                data-actor="${safe(actor.name || "")}"
                data-title="${safe(item.title)}"
                data-year="${safe(item.year || "")}"
                data-type="${safe(typeLabel || "Career Label")}"
                data-role="Career connection"
              >
                ${safe(item.display)}
              </button>
            </li>
          `;
        }).join("")}
      </ul>
    `;
  }

  function plainList(items) {
    if (!items.length) return "";

    return `
      <ul>
        ${items.map(function (item) {
          return `<li>${safe(item)}</li>`;
        }).join("")}
      </ul>
    `;
  }

  function card(title, body, extraHTML) {
    return `
      <article class="info-card">
        <h3>${safe(title)}</h3>
        <p>${body}</p>
        ${extraHTML || ""}
      </article>
    `;
  }

  function buildCleanCareerLabels(actor) {
    const name = actor?.name || "This actor";
    const job = actor?.job || actor?.profession || "Performer";

    const knownTitles = titleObjects(getKnownFor(actor), 6);
    const fullTitles = titleObjects(getFullBody(actor), 10);
    const characters = plainRows(getCharacters(actor), 8);
    const awards = plainRows(getAwards(actor), 6);

    const combinedMap = new Map();

    knownTitles.concat(fullTitles).forEach(function (item) {
      const key = item.title.toLowerCase();
      if (!combinedMap.has(key)) {
        combinedMap.set(key, item);
      }
    });

    const combinedTitles = Array.from(combinedMap.values()).slice(0, 8);

    const cards = [];

    cards.push(
      card(
        "Career Identity",
        `${safe(name)} is currently categorized in VEDB as <b>${safe(job)}</b>. This label tells users what career lane this person belongs to on the site.`
      )
    );

    if (knownTitles.length) {
      cards.push(
        card(
          "Signature Work",
          `${safe(name)}'s Signature Work is the short highlight list. Click any title below to open its Title Sphere:`,
          clickableTitleList(actor, knownTitles, "Signature Work")
        )
      );
    } else {
      cards.push(
        card(
          "Signature Work Needs Data",
          `${safe(name)} does not have enough Signature Work loaded yet. Add the actor's best-known titles here first.`
        )
      );
    }

    if (characters.length) {
      cards.push(
        card(
          "Character / Role Recognition",
          `These are the loaded role or character connections for ${safe(name)}:`,
          plainList(characters)
        )
      );
    } else {
      cards.push(
        card(
          "Character / Role Data Missing",
          `${safe(name)} needs character or role data added so VEDB can explain who they played, not just what title they appeared in.`
        )
      );
    }

    if (fullTitles.length) {
      cards.push(
        card(
          "Full Body of Work Depth",
          `${safe(name)} has a larger career record beyond Signature Work. These loaded credits help show career depth:`,
          clickableTitleList(actor, fullTitles, "Full Body of Work")
        )
      );
    } else {
      cards.push(
  card(
    "Career Depth",
    `${safe(name)}'s page separates Signature Work from the larger Full Body of Work, helping visitors see both the famous highlights and the deeper career record.`
  )
);
    }

    if (awards.length) {
      cards.push(
        card(
          "Awards / Recognition",
          `${safe(name)} has the following loaded awards or recognition markers:`,
          plainList(awards)
        )
      );
    } else {
      cards.push(
        card(
          "Recognition Data To Add",
          `${safe(name)} does not currently have detailed award or recognition data loaded. Add awards, nominations, major wins, or notable career milestones here.`
        )
      );
    }

    

   

    return `
      <p>
        <b>Career Labels for ${safe(name)}</b> — built from this actor's loaded VEDB data.
      </p>

      <div class="cards-grid">
        ${cards.join("")}
      </div>
    `;
  }

  function installCareerTitleLinkStyles() {
    if (document.getElementById("vedb-career-title-links-v44c-style")) return;

    const style = document.createElement("style");
    style.id = "vedb-career-title-links-v44c-style";
    style.textContent = `
      .vedb-career-title-list-v44c {
        margin: 10px 0 0;
        padding-left: 20px;
      }

      .vedb-title-text-link-v44c {
        appearance: none;
        border: 0;
        background: transparent;
        padding: 0;
        margin: 0;
        font: inherit;
        font-weight: 800;
        color: inherit;
        text-decoration: underline;
        text-underline-offset: 3px;
        cursor: pointer;
      }

      .vedb-title-text-link-v44c:hover,
      .vedb-title-text-link-v44c:focus {
        opacity: 0.78;
        outline: none;
      }
    `;

    document.head.appendChild(style);
  }

  installCareerTitleLinkStyles();

  const previousActorSectionV44C =
    typeof actorSection === "function" ? actorSection : null;

  if (previousActorSectionV44C) {
    window.actorSection = function (sectionId) {
      if (
        sectionId === "careerLabels" &&
        typeof currentMode !== "undefined" &&
        currentMode === "actor" &&
        typeof currentEntity !== "undefined" &&
        currentEntity
      ) {
        return buildCleanCareerLabels(currentEntity);
      }

      return previousActorSectionV44C(sectionId);
    };

    try {
      actorSection = window.actorSection;
    } catch (error) {}
  }

  if (
    typeof currentMode !== "undefined" &&
    currentMode === "actor" &&
    typeof currentSection !== "undefined" &&
    currentSection === "careerLabels" &&
    typeof buildCards === "function"
  ) {
    setTimeout(buildCards, 50);
    setTimeout(buildCards, 250);
  }

  console.log("VEDB 4.4C Clean Career Label Title Links installed.");
})();