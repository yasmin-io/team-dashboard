//Function to accept the array of team members, loop over them and generate html string then return 1 string
const generateTeamMembersString = (arrayOfTeamMembers) => {
  const finalString = "";
  console.log("Team members to generate....:", arrayOfTeamMembers);
  //TODO::
  // Loop over the array of team members
  // If manager -> generate one type of string literal for that manager, if engineer, if intern and so on
  //Each member string literal -> concatenate with string on line 4
  return "Generated loads of members";
};

//Function to export to index.js and also call function above to generate the html body

module.exports = (arrayOfTeamMembers) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${generateTeamMembersString(arrayOfTeamMembers)}
</body>
</html>`;
};
