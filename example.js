const pgn = require('./lib/index');

// console.log(pgn(`[Event "Live Chess"]
// [Site "Chess.com"]
// [Date "2019.08.29"]
// [Round "?"]
// [White "Arunavaonly"]
// [Black "levidurfee"]
// [Result "0-1"]
// [ECO "B27"]
// [WhiteElo "765"]
// [BlackElo "836"]
// [TimeControl "600"]
// [EndTime "13:41:37 PDT"]
// [Termination "levidurfee won by resignation"]

// 1. e4 c5 2. Nf3 g6 3. Nc3 Bg7 4. d4 Nh6 5. Bxh6 Bxh6 6. dxc5 Nc6 7. Bb5 O-O 8.
// O-O d6 9. cxd6 exd6 10. g3 a6 11. Bc4 Bg4 12. Qd5 Be6 13. Qd3 Qf6 14. Bxe6 Qxe6
// 15. h4 Rad8 16. Ng5 Bxg5 17. hxg5 Ne5 18. Qe3 Ng4 19. Qa7 d5 20. Nxd5 Qxe4 21.
// Qxb7 Qxd5 22. Qxd5 Rxd5 23. c4 Rd4 24. f3 Ne3 25. Kf2 Nxf1 0-1`));

let g = pgn.pgn(`[Event "Live Chess"]
[Site "Chess.com"]
[Date "2019.08.23"]
[Round "?"]
[White "levidurfee"]
[Black "Daniel-prz"]
[Result "1-0"]
[WhiteElo "778"]
[BlackElo "821"]
[ECO "D02"]
[TimeControl "300"]
[EndTime "16:38:58 PDT"]
[Termination "levidurfee won by checkmate"]

1.d4 d5 2.c4 Nf6
    {Not so good because d5 is weak here.}
3.Nf3
    ( 3.cxd5 {Though not crucial, is considered best as whatever Black does White will have Nc3 and e2-e4 at some point to open more lines good for White.} )
3...dxc4 4.Nc3 Nc6
    {? Black needs to move c7 at some point to free Qd8 a bit. So, ...e6 or ...a6 intending ...b5 and ...c5 on the Q-side are considered better ways. The Nc6 is exposed to d4-d5, so it isn't very safe and d4 is defended, so Nc6 isn't very strong either.}
5.e3
    ( 5.d5 {something free and good} 5...Nb8 6.e4 {+/-} )
5...Be6
    {Black keeps making bad moves. He will either correct them or you will take advantage and destroy him. The Be6 blocks e7, so Black will have to either move Be6 or play ...g6. Either is good for White.}
6.Be2
    {Here 6. e4 is very strong (still not crucial) and Black can't really stop you.}
    ( 6.e4 Bg4 7.d5 Ne5 8.Be2 Nxf3+ 9.Bxf3 Bxf3 10.Qxf3 {+/-} )
6...b5
    {?? gives away the pawn}
7.O-O
    {?}
    ( 7.Nxb5 {something free +/-} )
7...a6 8.Ng5 h6
    {?}
9.Nxe6 fxe6
    {Black is now weak at e6 and g6 and Ke8 looks a lot less safe.}
10.Bf3 Qd7 11.Re1
    {This isn't necessary to push e3-e4, so developing Bc1 should have priority.}
    ( 11.b3 b4 12.Na4 {aiming for c5} )
    ( 11.d5 Nxd5 12.Nxd5 exd5 13.Qxd5 {+-} )
    ( 11.Ne4 {again headed to c5 to target Qd7 and e6} 11...Nxe4 12.Bxe4 )
11...Rd8
    {??????}
12.e4
    ( 12.Bh5+ {+ leads to mate in a couple of moves} )
12...Nxd4 13.e5
    {You found the idea! Great}
13...Nxf3+ 14.Qxf3 Nd5 15.Qh5+ g6 16.Qxg6# 1-0
`);

console.log(g);
