/*
Nama        : William Chrisandy
NIM         : 2301862941
Kelas       : LA03
Mata Kuliah : MOBI6012001 - Web Design
Nama Dosen  : D5022 - Ramot Lubis, S.T., M.Sc.
*/

let canvas = document.getElementById("clock-canvas");

canvas.width = 0.97*window.innerWidth;
canvas.height = 0.97*window.innerHeight;

let context = canvas.getContext("2d");

context.textBaseline = "middle";
context.textAlign = "center";
context.fillStyle = "black";
context.font = "bold 3rem serif";

let centerXPosition = canvas.width/2;
let centerYPosition = canvas.height/2;

setInterval
(
    () =>
    {
        let dateInfo = getDateInfo();
        let displayString = dateInfo.hour + ":" + dateInfo.minute + ":" + dateInfo.second + " " + dateInfo.dayOrNight;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillText(displayString, centerXPosition, centerYPosition);
    },
    500
);

function getDateInfo()
{
    const date = new Date();

    let hour = date.getHours();
    let dayOrNight = "AM";

    if(date.getHours() >= 12)
    {
        hour -= 12;
        dayOrNight = "PM";
    }

    if(hour == 0) hour = 12;

    const dateInfo =
    {
        "hour" : convertToTwoCharacter(hour),
        "minute" : convertToTwoCharacter(date.getMinutes()),
        "second" : convertToTwoCharacter(date.getSeconds()),
        "dayOrNight" : dayOrNight
    };

    return dateInfo;
}

function convertToTwoCharacter(number)
{
    return number < 10 ? "0" + number : `${number}`;
}