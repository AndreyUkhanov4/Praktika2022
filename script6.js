async function krData() {
  try {
    const god = document.getElementById("god").value;
    const strana_cod = document.getElementById("strana_cod").value;
    const response = await fetch(
      `https://date.nager.at/api/v3/PublicHolidays/${god}/${strana_cod}`
    );
    const holidays = await response.json();
    getValue(holidays);
  } catch (err) {
    document.querySelectorAll(".gg").forEach((del) => {
      del.remove();
    });
    document
      .getElementById("may")
      .insertAdjacentHTML(
        "beforeend",
        '<div class ="gg"> <img  src= https://http.cat/status/' + err + "</div>"
      );
    console.log(err);
  }
}
function getValue(hp) {
  try {
    const month = document.getElementById("montheses").value;
    let key;
    switch (month) {
      case "Январь":
        key = "-01-";
        break;
      case "Февраль":
        key = "-02-";
        break;
      case "Март":
        key = "-03-";
        break;
      case "Апрель":
        key = "-04-";
        break;
      case "Май":
        key = "-05-";
        break;
      case "Июнь":
        key = "-06-";
        break;
      case "Июль":
        key = "-07-";
        break;
      case "Август":
        key = "-08-";
        break;
      case "Сентябрь":
        key = "-09-";
        break;
      case "Октябрь":
        key = "-10-";
        break;
      case "Ноябрь":
        key = "-11-";
        break;
      case "Декабрь":
        key = "-12-";
        break;
      default:
        break;
    }
    document.querySelectorAll(".gg").forEach((del) => {
      del.remove();
    });
    let array = [];
    for (let i = 0; i < hp.length; i++) {
      if (hp[i].date.indexOf(key) !== -1) {
        array.push([hp[i].date, hp[i].localName, hp[i].name]);
        document
          .getElementById("may")
          .insertAdjacentHTML(
            "beforeend",
            '<div class="card gg" style="width: 18rem;"><div class="card-body"><p class="card-text">' +
              "Дата: <br> " +
              hp[i].date +
              " <br>Название:<br> " +
              hp[i].name +
              '</p> <button class="btn btn-light" onclick="urk(\'' +
              hp[i].name +
              "')\" >поиск</button></div></div> </br>"
          );
      }
    }
    console.log(array);
    cardErr(array);
  } catch (err) {
    document.querySelectorAll(".gg").forEach((del) => {
      del.remove();
    });
    document
      .getElementById("may")
      .insertAdjacentHTML(
        "beforeend",
        '<div class ="gg"> <img style ="width:375px; height: 300px" src= https://http.cat/status/' +
          err +
          "</div>"
      );
    console.log(err);
  }
}
function cardErr(arr) {
  if (arr.length === 0) {
    document
      .getElementById("may")
      .insertAdjacentHTML(
        "beforeend",
        '<div class="card gg" "><div class="card-body"><p class="card-text">В данный день празников не найдено</p> </div></div> </br>'
      );
  }
}
function urk(date) {
  window.open("https://www.google.com/search?q=" + date + "&hl=ru/");
}
async function YR() {
  try {
    const resp = await fetch(`https://date.nager.at/api/v3/AvailableCountries`);
    const years = await resp.json();
    YRin(years);
  } catch (err) {
    document
      .getElementById("country")
      .insertAdjacentHTML(
        "beforeend",
        "<div> <img src= https://http.cat/status/" + err + "</div>"
      );
    console.log(err);
  }
}
function YRin(asus) {
  try {
    for (let i = 0; i < asus.length; i++) {
      let sony = asus[i].countryCode;
      document
        .getElementById("country")
        .insertAdjacentHTML(
          "beforeend",
          "<option value = " + sony + "><option/>"
        );
    }
  } catch (err) {
    document
      .getElementById("country")
      .insertAdjacentHTML(
        "beforeend",
        "<div> <img src= https://http.cat/status/" + err + "</div>"
      );
    console.log(err);
  }
}
function DT() {
  for (let i = 1923; i < 2124; i++) {
    let option = document.createElement("option");
    option.value = i;
    document.getElementById("year").appendChild(option);
  }
}
document.getElementById("months").addEventListener("input", () => {
  const monthed = document.getElementById("months").value;
  let dayses = [];
  switch (monthed) {
    case "Апрель":
    case "Июнь":
    case "Сентябрь":
    case "Ноябрь":
      for (let i = 1; i < 31; i++) {
        dayses.push(i);
      }
      break;
    case "Январь":
    case "Март":
    case "Май":
    case "Июль":
    case "Август":
    case "Октябрь":
    case "Декабрь":
      for (let i = 1; i < 32; i++) {
        dayses.push(i);
      }
      break;
    case "Февраль":
      for (let i = 1; i < 29; i++) {
        dayses.push(i);
      }
      break;
    default:
      break;
  }
  document.getElementById("day").innerHTML = "";
  dayses.forEach((day) => {
    const option = document.createElement("option");
    option.value = day;
    document.getElementById("day").appendChild(option);
  });
});
