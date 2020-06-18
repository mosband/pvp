const herolist = require('./herolist.json');

export default {
  // 全英雄列表
  '/api/web201605/js/herolist.json': herolist,
  // 周免英雄列表
  'POST /api/freeheros.json': (req: any, res: any) => {
    const { number } = req.body;
    function getRandomArrayElements(arr: any[], count: number) {
      var shuffled = arr.slice(0),
        i = arr.length,
        min = i - count,
        temp,
        index;
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    }
    const freeHeroes = getRandomArrayElements(herolist, number);
    res.send(freeHeroes);
  },
};
