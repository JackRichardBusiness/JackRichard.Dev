const skills = [
  ["A web designer.", "#69FFF1"],
  ["A Java programmer.", "#63D471"],
  ["A game developer.", "#E4C1F9"],
  ["A 3D artist.", "#F7A072"],
  ["An IT specialist.", "#9E2A2B"],
  ["A laptop repairer.", "#E4C1F9"]
];
var skillIx = 0;

function typeOut(i) {
  document.querySelector("#skill").innerHTML = skills[skillIx][0].slice(
    0,
    i + 1
  );
}

setTimeout(nextSkill, 3500);
function nextSkill() {
  if (skillIx + 1 > skills.length - 1) {
    skillIx = 0;
  } else {
    skillIx++;
  }

  var skillHTML = document.querySelector("#skill");
  var initialLength = skillHTML.innerHTML.length;
  for (var i = 0; i < document.querySelector("#skill").innerHTML.length; i++) {
    setTimeout(function () {
      document.querySelector("#skill").innerHTML = skillHTML.innerHTML.slice(
        0,
        skillHTML.innerHTML.length - 1
      );
    }, 50 * i);
  }

  setTimeout(function () {
    document.querySelector("#skill").style.color = skills[skillIx][1];

    for (var i = 0; i < skills[skillIx][0].length; i++) {
      setTimeout(typeOut.bind(null, i), 100 + i * 50);
    }
  }, initialLength * 50 + 100);
  setTimeout(nextSkill, (initialLength * 50) + (skills[skillIx][0].length * 50) + 2500);
}

document.addEventListener('scroll',
  function() {
    var slider = document.querySelector(".image-slider").getBoundingClientRect();
    if (slider.y + slider.height < window.innerHeight && slider.y * -1 < slider.height) {
      document.querySelector(".image-slider").scrollTo(document.querySelector(".image-slider").scrollWidth * ((window.innerHeight - (slider.y + slider.height)) / window.innerHeight), 0);
    }
  }
);
