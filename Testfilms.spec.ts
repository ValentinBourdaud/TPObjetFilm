import { expect } from "chai";
import { Film } from './Film';
import { Trailer } from './Trailer';


describe('Film : ', () => {
  it("Le titre doit être", () => {
    let trailer = new Trailer("Mon, 27 Jul 2015 00:00:00 -0700", "/trailers/lions_gate/12rounds3lockdown/",
      "Trailer", false, true);
    let trailers = new Array();
    trailers.push(trailer)
    let film = new Film("12 Rounds 3: Lockdown", "Fri, 11 Sep 2015 00:00:00 -0700", "Lionsgate",
      "http://trailers.apple.com/trailers/lions_gate/12rounds3lockdown/images/poster.jpg",
      "/trailers/lions_gate/12rounds3lockdown/", "R",  new Array(), "Stephen Reynolds",
      new Array(), trailers);
    expect(film._title).to.equal("12 Rounds 3: Lockdown");
  });
})
