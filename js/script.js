const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const generateCard = function (member) {
  const memberCard = `<div class="col-12 col-md-6 col-lg-4 mb-3">
      <div class="d-flex bg-black text-white p-2">
        <img src="js/${member.img}" alt="Portrait of ${member.name}" class="me-3"
          style="width: 100px; height: 100px; object-fit: cover;">
        <div>
          <h5 class="mb-0">${member.name.toUpperCase()}</h5>
          <p class="mb-0">${member.role}</p>
          <p class="mb-0"><a href="mailto:${member.email}"
            class="text-info text-decoration-none">${member.email}</a></p>
        </div>
      </div>
    </div>
  `;
  return memberCard;
};

const teamContainer = document.getElementById('profileMembers');

for (let i = 0; i < teamMembers.length; i++) {
  let profile = generateCard(teamMembers[i])
  teamContainer.innerHTML += profile;
}