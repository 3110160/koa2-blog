var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  ctx.body = 'this a index response!';
  //await ctx.render('index', {
  //});
})

//·��
import users from'./users';

router.use('/users', users.routes());



//module.exports = router;
export default router;