const parsePGN = require('./');

console.log(parsePGN(`[Event "Live Chess"]
[Site "Chess.com"]
[Date "2019.08.29"]
[Round "?"]
[White "Arunavaonly"]
[Black "levidurfee"]
[Result "0-1"]
[ECO "B27"]
[WhiteElo "765"]
[BlackElo "836"]
[TimeControl "600"]
[EndTime "13:41:37 PDT"]
[Termination "levidurfee won by resignation"]

1. e4 c5 2. Nf3 g6 3. Nc3 Bg7 4. d4 Nh6 5. Bxh6 Bxh6 6. dxc5 Nc6 7. Bb5 O-O 8.
O-O d6 9. cxd6 exd6 10. g3 a6 11. Bc4 Bg4 12. Qd5 Be6 13. Qd3 Qf6 14. Bxe6 Qxe6
15. h4 Rad8 16. Ng5 Bxg5 17. hxg5 Ne5 18. Qe3 Ng4 19. Qa7 d5 20. Nxd5 Qxe4 21.
Qxb7 Qxd5 22. Qxd5 Rxd5 23. c4 Rd4 24. f3 Ne3 25. Kf2 Nxf1 0-1`));

