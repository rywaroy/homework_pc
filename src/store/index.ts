import Loading from './loading';
import One from './one';
import Huaban from './huaban';
import Zhihu from './zhihu';
import Time from './time';
import Douban from './douban';
import Dytt from './dytt';
import Learn from './learn';
import Article from './article';
import Think from './think';
import Plan from './plan';
import Album from './album';
import Base from './base';

const Store = {
  loading: new Loading(),
  one: new One(),
  huaban: new Huaban(),
  zhihu: new Zhihu(),
  time: new Time(),
  douban: new Douban(),
  dytt: new Dytt(),
  learn: new Learn(),
  article: new Article(),
  think: new Think(),
  plan: new Plan(),
  album: new Album(),
  base: new Base(),
}

export default Store;