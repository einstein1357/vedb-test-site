/* =========================================================
   VEDB AUDIT TOOLS v3 — CLEAR NAMES VERSION
   File: auditTools.js

   Purpose:
   - Runs from the visible "🧪 Run Audit" button.
   - Shows actual names, not just counts.
   - Checks:
     1. Missing title Story Snapshots
     2. Missing franchise Story Snapshots
     3. Duplicate actors/titles/franchises
     4. Search index problems
     5. Full Body credit depth using live getFullBodyOfWorkForActor()
     6. Her / Her 2013
     7. Dune: Part Two

   Safe:
   - Does NOT change actors.
   - Does NOT change titles.
   - Does NOT change Story Snapshots.
   - Does NOT change search.
   - Does NOT change startup.
========================================================= */

(function () {
  if (window.vedbAuditToolsV3Installed) return;
  window.vedbAuditToolsV3Installed = true;

  function clean(value) {
    return String(value || "").trim();
  }

  function normalize(value) {
    return clean(value)
      .toLowerCase()
      .replace(/&amp;/g, "&")
      .replace(/&#039;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function safe(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getActors() {
    try {
      return typeof actors !== "undefined" && Array.isArray(actors) ? actors : [];
    } catch (error) {
      return [];
    }
  }

  function getTitles() {
    try {
      return typeof titles !== "undefined" && Array.isArray(titles) ? titles : [];
    } catch (error) {
      return [];
    }
  }

  function getFranchises() {
    try {
      return typeof franchises !== "undefined" && Array.isArray(franchises) ? franchises : [];
    } catch (error) {
      return [];
    }
  }

  function getAllItems() {
    try {
      return typeof allItems !== "undefined" && Array.isArray(allItems) ? allItems : [];
    } catch (error) {
      return [];
    }
  }

  function findTitle(name) {
    var wanted = normalize(name);

    return (
      getTitles().find(function (title) {
        return normalize(title && title.name) === wanted;
      }) || null
    );
  }

  function findFranchise(name) {
    var wanted = normalize(name);

    return (
      getFranchises().find(function (franchise) {
        return normalize(franchise && franchise.name) === wanted;
      }) || null
    );
  }

  function findSearchItem(mode, name) {
    var wantedMode = normalize(mode);
    var wantedName = normalize(name);

    return (
      getAllItems().find(function (item) {
        return (
          normalize(item && item.mode) === wantedMode &&
          normalize(item && item.name) === wantedName
        );
      }) || null
    );
  }

  function getStoryText(item) {
    if (!item) return "";

    return (
      clean(item.storySnapshotLong) ||
      clean(item.storySnapshot) ||
      clean(item.description) ||
      clean(item.overview) ||
      clean(item.summary)
    );
  }

  function hasGoodStory(item) {
    var story = getStoryText(item);
    var lower = story.toLowerCase();

    if (!story) return false;
    if (story.length < 80) return false;
    if (lower.indexOf("placeholder") !== -1) return false;
    if (lower.indexOf("original vedb demo overview") !== -1) return false;
    if (lower.indexOf("add a short plot summary here") !== -1) return false;

    return true;
  }

  function titleNameFromCredit(item) {
    if (!item) return "";

    if (Array.isArray(item)) {
      return clean(item[0]);
    }

    if (typeof item === "object") {
      return clean(item.title || item.name || item.movie || item.show || "");
    }

    return clean(item);
  }

  function getActorSignatureWork(actor) {
    var keys = ["knownFor", "signatureWork", "signature"];

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (actor && Array.isArray(actor[key]) && actor[key].length) {
        return actor[key];
      }
    }

    return [];
  }

  function getActorFullBodyCredits(actor) {
    if (!actor || !actor.name) return [];

    /*
      Best method:
      Use the live Full Body system if it exists.
      This matters because your fullBodyCredits.js file builds Full Body pages
      through getFullBodyOfWorkForActor().
    */
    try {
      if (typeof window.getFullBodyOfWorkForActor === "function") {
        var liveCredits = window.getFullBodyOfWorkForActor(actor.name);

        if (Array.isArray(liveCredits)) {
          return liveCredits;
        }
      }
    } catch (error) {}

    try {
      if (typeof getFullBodyOfWorkForActor === "function") {
        var directCredits = getFullBodyOfWorkForActor(actor.name);

        if (Array.isArray(directCredits)) {
          return directCredits;
        }
      }
    } catch (error) {}

    var keys = [
      "fullBodyOfWork",
      "fullBodyWork",
      "fullBody",
      "fullCredits",
      "credits",
      "filmography",
      "bodyOfWork"
    ];

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (Array.isArray(actor[key]) && actor[key].length) {
        return actor[key];
      }
    }

    return [];
  }

  function getMissingTitleStories() {
    return getTitles()
      .filter(function (title) {
        return !hasGoodStory(title);
      })
      .map(function (title) {
        return {
          name: title && title.name ? title.name : "(missing title name)",
          storyStart: getStoryText(title).slice(0, 120)
        };
      });
  }

  function getMissingFranchiseStories() {
    return getFranchises()
      .filter(function (franchise) {
        return !hasGoodStory(franchise);
      })
      .map(function (franchise) {
        return {
          name: franchise && franchise.name ? franchise.name : "(missing franchise name)",
          storyStart: getStoryText(franchise).slice(0, 120)
        };
      });
  }

  function getFullBodyReviewActors() {
    return getActors()
      .map(function (actor) {
        var signatureCount = getActorSignatureWork(actor).length;
        var fullBodyCount = getActorFullBodyCredits(actor).length;

        return {
          name: actor && actor.name ? actor.name : "(missing actor name)",
          signatureCount: signatureCount,
          fullBodyCount: fullBodyCount,
          status:
            fullBodyCount > signatureCount
              ? "Full Body is larger than Signature Work"
              : "Needs review"
        };
      })
      .filter(function (row) {
        return row.fullBodyCount <= row.signatureCount || row.fullBodyCount <= 4;
      });
  }

  function getMissingSearchItems() {
    var missing = [];

    getActors().forEach(function (actor) {
      if (actor && actor.name && !findSearchItem("actor", actor.name)) {
        missing.push({ mode: "actor", name: actor.name });
      }
    });

    getTitles().forEach(function (title) {
      if (title && title.name && !findSearchItem("title", title.name)) {
        missing.push({ mode: "title", name: title.name });
      }
    });

    getFranchises().forEach(function (franchise) {
      if (franchise && franchise.name && !findSearchItem("franchise", franchise.name)) {
        missing.push({ mode: "franchise", name: franchise.name });
      }
    });

    return missing;
  }

  function getActorCreditsMissingTitlePages() {
    var missing = [];
    var seen = {};

    getActors().forEach(function (actor) {
      var signature = getActorSignatureWork(actor);
      var fullCredits = getActorFullBodyCredits(actor);

      signature.concat(fullCredits).forEach(function (credit) {
        var titleName = titleNameFromCredit(credit);
        var key = normalize((actor.name || "") + " " + titleName);

        if (!titleName || seen[key]) return;

        seen[key] = true;

        if (!findTitle(titleName)) {
          missing.push({
            actor: actor.name || "(missing actor)",
            title: titleName
          });
        }
      });
    });

    return missing;
  }

  function getDuplicates(list, modeName) {
    var map = {};
    var duplicates = [];

    list.forEach(function (item) {
      var key = normalize(item && item.name);
      if (!key) return;

      if (!map[key]) {
        map[key] = [];
      }

      map[key].push(item);
    });

    Object.keys(map).forEach(function (key) {
      if (map[key].length > 1) {
        duplicates.push({
          mode: modeName,
          name: map[key][0].name,
          count: map[key].length
        });
      }
    });

    return duplicates;
  }

  function getShortTitleRisks() {
    return getTitles()
      .filter(function (title) {
        var name = clean(title && title.name);
        return name.length > 0 && name.length <= 4;
      })
      .map(function (title) {
        return {
          name: title.name,
          warning: "Short title. Exact-title search should beat partial actor-name matches."
        };
      });
  }

  function specialChecks() {
    var her = findTitle("Her");
    var her2013 = findTitle("Her 2013");
    var dunePartTwo = findTitle("Dune: Part Two");
    var duneStory = getStoryText(dunePartTwo);

    return {
      herExists: !!her,
      her2013Exists: !!her2013,
      herInSearch: !!findSearchItem("title", "Her"),
      her2013InSearch: !!findSearchItem("title", "Her 2013"),
      dunePartTwoExists: !!dunePartTwo,
      dunePartTwoStoryLooksCorrect:
        normalize(duneStory).indexOf("dune part two follows paul atreides") !== -1,
      dunePartTwoStoryStart: duneStory.slice(0, 140)
    };
  }

  function buildReport() {
    var missingTitleStories = getMissingTitleStories();
    var missingFranchiseStories = getMissingFranchiseStories();
    var fullBodyReviewActors = getFullBodyReviewActors();
    var missingSearch = getMissingSearchItems();
    var missingTitlePages = getActorCreditsMissingTitlePages();
    var duplicateTitles = getDuplicates(getTitles(), "title");
    var duplicateActors = getDuplicates(getActors(), "actor");
    var duplicateFranchises = getDuplicates(getFranchises(), "franchise");
    var shortTitleRisks = getShortTitleRisks();

    return {
      summary: {
        actors: getActors().length,
        titles: getTitles().length,
        franchises: getFranchises().length,
        searchItems: getAllItems().length,

        missingTitleStorySnapshots: missingTitleStories.length,
        missingFranchiseStorySnapshots: missingFranchiseStories.length,
        fullBodyActorsNeedingReview: fullBodyReviewActors.length,
        missingFromSearch: missingSearch.length,
        actorCreditsMissingTitlePages: missingTitlePages.length,

        duplicateTitles: duplicateTitles.length,
        duplicateActors: duplicateActors.length,
        duplicateFranchises: duplicateFranchises.length,
        totalDuplicates:
          duplicateTitles.length + duplicateActors.length + duplicateFranchises.length,
        shortTitleRisks: shortTitleRisks.length
      },

      missingTitleStories: missingTitleStories,
      missingFranchiseStories: missingFranchiseStories,
      fullBodyReviewActors: fullBodyReviewActors,
      missingSearch: missingSearch,
      missingTitlePages: missingTitlePages,
      shortTitleRisks: shortTitleRisks,

      duplicates: {
        titles: duplicateTitles,
        actors: duplicateActors,
        franchises: duplicateFranchises,
        all: duplicateTitles.concat(duplicateActors).concat(duplicateFranchises)
      },

      special: specialChecks()
    };
  }

  function status(count) {
    return count === 0 ? "✅" : "⚠️";
  }

  function listPreview(items, emptyMessage, kind) {
    if (!items.length) {
      return '<p style="margin:8px 0; color:#9fe7b2;">✅ ' + safe(emptyMessage) + "</p>";
    }

    return (
      '<ul style="margin:8px 0 0 18px; padding:0;">' +
      items
        .slice(0, 25)
        .map(function (item) {
          var label = "";

          if (kind === "missingTitlePage") {
            label = item.actor + " — " + item.title;
          } else if (kind === "duplicate") {
            label = item.mode + ": " + item.name + " appears " + item.count + " times";
          } else if (kind === "fullBody") {
            label =
              item.name +
              " — Signature: " +
              item.signatureCount +
              ", Full Body: " +
              item.fullBodyCount;
          } else {
            label = item.name || item.title || JSON.stringify(item);
          }

          return '<li style="margin-bottom:6px;">' + safe(label) + "</li>";
        })
        .join("") +
      "</ul>" +
      (items.length > 25
        ? '<p style="color:#c5d6ef; margin-top:8px;">...and ' +
          (items.length - 25) +
          " more.</p>"
        : "")
    );
  }

  function renderReport(report) {
    var panel = document.getElementById("vedbAuditPanel");

    if (!panel) {
      panel = document.createElement("section");
      panel.id = "vedbAuditPanel";
      document.body.appendChild(panel);
    }

    panel.style.position = "fixed";
    panel.style.right = "18px";
    panel.style.bottom = "18px";
    panel.style.width = "min(820px, calc(100vw - 36px))";
    panel.style.maxHeight = "84vh";
    panel.style.overflow = "auto";
    panel.style.zIndex = "999999";
    panel.style.background = "rgba(3, 16, 33, 0.98)";
    panel.style.border = "2px solid rgba(247, 180, 0, 0.9)";
    panel.style.borderRadius = "18px";
    panel.style.boxShadow = "0 18px 70px rgba(0,0,0,.7)";
    panel.style.color = "white";
    panel.style.padding = "16px";
    panel.style.fontFamily = "Arial, Helvetica, sans-serif";

    var s = report.summary;

    panel.innerHTML =
      '<div style="display:flex; justify-content:space-between; gap:12px; align-items:center; margin-bottom:14px;">' +
      "<div>" +
      '<h2 style="margin:0; color:#f7b400; font-size:26px;">VEDB Audit Report v3</h2>' +
      '<p style="margin:4px 0 0; color:#c5d6ef;">Shows names, not just counts. This does not change your website.</p>' +
      "</div>" +
      '<button id="closeVEDBAuditPanel" style="padding:9px 12px; border:0; border-radius:10px; font-weight:900; cursor:pointer;">Close</button>' +
      "</div>" +

      '<div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:14px;">' +
      '<div style="border:1px solid rgba(88,165,255,.35); border-radius:12px; padding:10px;">' +
      "<b>Loaded Data</b><br>" +
      "Actors: " + s.actors + "<br>" +
      "Titles: " + s.titles + "<br>" +
      "Franchises: " + s.franchises + "<br>" +
      "Search items: " + s.searchItems +
      "</div>" +

      '<div style="border:1px solid rgba(88,165,255,.35); border-radius:12px; padding:10px;">' +
      "<b>Problem Counts</b><br>" +
      status(s.missingTitleStorySnapshots) + " Missing title Story Snapshots: " + s.missingTitleStorySnapshots + "<br>" +
      status(s.missingFranchiseStorySnapshots) + " Missing franchise Story Snapshots: " + s.missingFranchiseStorySnapshots + "<br>" +
      status(s.fullBodyActorsNeedingReview) + " Full Body actors needing review: " + s.fullBodyActorsNeedingReview + "<br>" +
      status(s.missingFromSearch) + " Missing from search: " + s.missingFromSearch + "<br>" +
      status(s.totalDuplicates) + " Duplicates: " + s.totalDuplicates +
      "</div>" +
      "</div>" +

      '<div style="border:1px solid rgba(247,180,0,.45); border-radius:12px; padding:10px; margin-bottom:12px;">' +
      "<b>Special Checks</b><br>" +
      (report.special.herExists ? "✅" : "⚠️") + " Her title exists<br>" +
      (report.special.her2013Exists ? "✅" : "⚠️") + " Her 2013 alias exists<br>" +
      (report.special.herInSearch ? "✅" : "⚠️") + " Her is in search index<br>" +
      (report.special.her2013InSearch ? "✅" : "⚠️") + " Her 2013 is in search index<br>" +
      (report.special.dunePartTwoExists ? "✅" : "⚠️") + " Dune: Part Two title exists<br>" +
      (report.special.dunePartTwoStoryLooksCorrect ? "✅" : "⚠️") + " Dune: Part Two has its own Story Snapshot" +
      "</div>" +

      '<details open style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Missing Title Story Snapshot Names</summary>' +
      listPreview(report.missingTitleStories, "No missing title Story Snapshots found.") +
      "</details>" +

      '<details open style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Duplicate Names</summary>' +
      listPreview(report.duplicates.all, "No duplicates found.", "duplicate") +
      "</details>" +

      '<details style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Missing Franchise Story Snapshot Names</summary>' +
      listPreview(report.missingFranchiseStories, "No missing franchise Story Snapshots found.") +
      "</details>" +

      '<details style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Full Body Actors Needing Review</summary>' +
      listPreview(report.fullBodyReviewActors, "No Full Body actor problems found.", "fullBody") +
      "</details>" +

      '<details style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Missing From Search</summary>' +
      listPreview(report.missingSearch, "Nothing is missing from search.") +
      "</details>" +

      '<details style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Actor Credits Missing Title Pages</summary>' +
      listPreview(report.missingTitlePages, "All actor credits have matching title pages.", "missingTitlePage") +
      "</details>" +

      '<details style="margin-bottom:10px;">' +
      '<summary style="cursor:pointer; color:#f7b400; font-weight:900;">Short Title Search Risks</summary>' +
      listPreview(report.shortTitleRisks, "No short title search risks found.") +
      "</details>" +

      '<p style="color:#c5d6ef; margin-top:14px;">Grandma note: Missing title pages usually mean future batches, not broken code.</p>';

    document.getElementById("closeVEDBAuditPanel").onclick = function () {
      panel.remove();
    };
  }

  window.runVEDBAudit = function () {
    var report = buildReport();
    console.log("VEDB Audit Report v3:", report);
    renderReport(report);
    return report;
  };

  console.log("VEDB Audit Tools v3 loaded. Click the Run Audit button.");
})();