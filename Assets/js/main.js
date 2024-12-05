function updateProfileInfo(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`

  const linkedin = document.getElementById('profile.linkedin');
  linkedin.innerText = "Linkedin";
  linkedin.href= `${profileData.linkedin}`;
  linkedin.setAttribute("target", "_blank");
  const github = document.getElementById('profile.github');
  github.innerText = "GitHub";
  github.href= `${profileData.github}`;
  github.setAttribute("target", "_blank");
}
function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile.skills.softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile.skills.hardSkills");
  hardSkills.innerHTML = profileData.skills.hardSkills
    .map(
      (skill) =>
        `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`
    )
    .join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("profile.languages");
  languages.innerHTML = profileData.languages
    .map((language) => `<li>${language}</li>`)
    .join("");
}

function updateExperience(profileData) {
  const experience = document.getElementById("profile.experience");
  experience.innerHTML = profileData.Experience
    .map((experience) => {
      return `
<li>
<h3 class="title">${experience.name}</h3>
<p class="period">${experience.period}</p>
<p>${experience.description}</p>
</li>
`;
    })
    .join("");
}

function updateEducation(profileData){
  const education = document.getElementById("profile.education");
  education.innerHTML = profileData.education.map((education)=>{
    return `
    <li>
   <h3 class="title">${education.title} </h3>
 <p class="period">${education.period}</p>
 <p>${education.type}</p>
 </li>  
    `
    ;
  })
  .join("");
}

function updatePortfolio(profileData){
  const portfolio = document.getElementById("profile.portfolio");
  portfolio.innerHTML = profileData.portfolio.map((project)=>{
    return`
     <li>
    <h3 ${project.github ? 'class="title github"':''}> ${project.name}</h3>
    <a class="project.links" href="${project.url}"target="blank">Link do Repositório do Projeto</a>
    <a class="project.links" href="${project.url2}"target=blank">Link do Github Pages</a>
     </li>
    `
    ;
  })
  .join("");
}



(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateEducation(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperience(profileData);
})();
