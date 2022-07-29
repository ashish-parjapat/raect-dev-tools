import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://lh3.googleusercontent.com/mNQL3Q4yCSj59IL0Lt7lOC2yQrslmYpFnU5Y9rCfKoopq2JRW5PqU-i7V0wGjxRfiI2xZfTs_1uFbmaSwCYAHSwWt19YsUy2EpaoA9p1-OGsUtsMMqqI19GH1kXBcCkmriumoEy5SfOhEZuqxg7ANTBof7C81lbzCdqaw0nzFI2LZssH-tIqShBgT3WYGUfRPVl8M5e8W-QfJVB3pbjPaIr72Dv082QXw3xWzb60C5kpxsttu2WGzIWCcBKe5klk7ybiD1LzGaFJCNvbzKCuRtZiP8xdNAa5j4Jsc76N-e8XjvTjaH7cUQIRTMKzAeUWxrMvhMMZz7sm1c4ZPL3WK2NwQEjymW1NE5-iGEohu91HpGTii-8EAvXR73g4jeXHWOLrjszqToD7rGqdc7vQMrVz647DDI8ah7XbuCqKgytLzoaB26qRdFxngBlNY4iHcrAaLtv-vh9oDLViLt_ARlriOqKgZUs08dD_B-E6JuvUVOM3QHE16_1rA-_BxelmGbYSXvZd--L8U4_dVnHhQLnqJJPkCokiBKIYLjzZgBbzVoTTDVyOS97EzNpnlsIeV3xPi5LC59_nFqXt4GIozmukDlLcxtHXc5KJoQrvQTlz5Zcnxm6S9auEH5rMma8OoSQQg0vVZK-YkOtfPrig7Y2gxHEJK44f_VBZTMyxdtGw8QaVDguJXWo0oW34ZDZmM29r7CwF6JE87BDtKoTxECHOH-YnPluOJLFS5W_PPz1HYS8NOOS8myJZA2pg-oeZ02FEYB_5Q-LbmtksYvzRTSrX3cSUU2kh=w393-h523-no?authuser=0" />
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
