"use strict";

function getDeveloperTypeFromInput() {
  const developerTypes = Object.values(developerType);
  let isInputValid = false,
    inputtedType;

  while (!isInputValid) {
    inputtedType = prompt(`Choose dev type for developer:
    [${developerTypes.join(", ")}]`).toUpperCase();

    isInputValid = developerTypes.includes(inputtedType);

    if (!isInputValid) {
      alert("Input for dev type is invalid! Please try again...");
    }
  }

  return inputtedType;
}

function getEmploymentStatusFromInput() {
  const employmentStatuses = Object.values(employmentStatus);
  let isInputValid = false,
    inputtedStatus;

  while (!isInputValid) {
    inputtedStatus = prompt(`Choose employment status for developer:
    [${employmentStatuses.join(", ")}]`).toUpperCase();

    isInputValid = employmentStatuses.includes(inputtedStatus);

    if (!isInputValid) {
      alert("Input for employment status is invalid! Please try again...");
    }
  }

  return inputtedStatus;
}

function getInputtedLanguages(allLanguagesData) {
  let inputtedId = -1;
  let inputtedLanguages = [];
  do {
    alert(
      "Please choose one of languages that developer knows or input -1 for exit:"
    );
    let allLanguages = allLanguagesData
      .map(
        (languageData) =>
          `${languageData.id} - ${languageData.programmingLanguage.name}`
      )
      .join(", ");
    inputtedId = getInputForMessage(allLanguages);

    const inputtedLanguage = allLanguagesData.find(
      (languageData) => languageData.id == inputtedId
    );
    if (
      inputtedLanguage &&
      !inputtedLanguages.includes(inputtedLanguage.programmingLanguage.name)
    )
      inputtedLanguages.push(inputtedLanguage);
  } while (inputtedId >= 0);

  return inputtedLanguages;
}

function getInputtedCompany(allCompaniesData) {
  let inputtedId = -1;
  let inputtedCompany = null;

  alert("Please choose company that developer works for or leave blank:");
  let allCompanies = allCompaniesData
    .map((companyData) => `${companyData.id} - ${companyData.company.name}`)
    .join(", ");

  inputtedId = getInputForMessage(allCompanies);
  if (!inputtedId) return {};

  inputtedCompany = allCompaniesData.find(
    (companyData) => companyData.id == inputtedId
  );

  return inputtedCompany;
}

function getFilterType() {
  const filterOptions = Object.values(developersFilter);

  return getInputForMessage(`Please choose one of filter types: 
  [${filterOptions.join(", ")}]
  `);
}

function getInputForProperty(propertyName) {
  return prompt(`Enter ${propertyName}: `);
}

function getInputForMessage(message) {
  return prompt(message);
}
