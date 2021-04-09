function points(games) {
    var sum=0;
    for (var i=0; i<games.length; ++i)
    {
      if (games[i][0]>games[i][2])
        sum+=3;
      if (games[i][0]==games[i][2])
        sum+=1;
    }
    return sum;
  }

  console.log(points(['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']));

  // const points = games => games.reduce((sum, [x, , y]) => sum + (x > y ? 3 : x == y), 0)