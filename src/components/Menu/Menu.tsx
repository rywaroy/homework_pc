import * as React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './menu.css'

const SubMenu = Menu.SubMenu;
let open: string = 'blog';
let active: string = '';
const map = {
	one: 'magazine',
	huaban: 'magazine',
	zhihu: 'magazine',
	time: 'movie',
	douban: 'movie',
	learn: 'blog',
	article: 'blog',
	album: 'blog',
	think: 'blog',
	plan: 'blog',
}
const hashArray: string[] = window.location.pathname.split('/');

if (hashArray[1]) {
	active = hashArray[1];
	open = map[hashArray[1]];
} else {
	active = 'learn';
}

interface IState {
	active: string
	collapsed: boolean
	openKeys: string[]
}
export default class Sider extends React.Component<any, any> {

	public state: IState = {
		active,
		collapsed: false,
		openKeys: [open],
	}

	constructor(props: any) {
		super(props);
		this._onSelect = this._onSelect.bind(this);
		this._onOpenChange = this._onOpenChange.bind(this)
	}

	public toggleCollapsed(): void {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	}

	public _onSelect(item: any): void {
		this.setState({
			active: item.key,
		})
	}

	public _onOpenChange(openKeys: string[]): void {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		this.setState({
			openKeys: latestOpenKey ? [latestOpenKey] : [],
		});
	}

	public render() {
		return (
			<div style={{width: 200}}>
				<div className="logo">
					<img src={require('../../assets/logo.jpg')} width="100%" height="100%" alt="" />
				</div>
				<div className="menu-link">
					<a href="https://weibo.com/u/5872048859?refer_flag=1001030101_" className="menu-link-item weibo" target="_blank" />
					<a href="https://github.com/rywaroy" className="menu-link-item github" target="_blank" />
				</div>
				<Menu
					mode="inline"
					theme="dark"
					openKeys={this.state.openKeys}
					selectedKeys={[this.state.active]}
					onSelect={this._onSelect}
					onOpenChange={this._onOpenChange}
				>
					<SubMenu key="magazine" title={<span><Icon type="pie-chart"/><span>杂志</span></span>}>
						<Menu.Item key="one"><Link to="/one">ONE · 一个</Link></Menu.Item>
						<Menu.Item key="huaban"><Link to="/huaban">花瓣相册</Link></Menu.Item>
						<Menu.Item key="zhihu"><Link to="/zhihu">知乎日报</Link></Menu.Item>
					</SubMenu>
					<SubMenu key="movie" title={<span><Icon type="hdd"/><span>电影</span></span>}>
						<Menu.Item key="time"><Link to="/time">Time时光</Link></Menu.Item>
						<Menu.Item key="douban"><Link to="/douban">豆瓣电影</Link></Menu.Item>
						{/* <Menu.Item key="dytt"><Link to="/dytt">电影天堂</Link></Menu.Item> */}
					</SubMenu>
					{/* <SubMenu key="tool" title={<span><Icon type="appstore-o"/><span>工具</span></span>}>
						<Menu.Item key="weather"><Link to="/tool/weather">中央天气预报</Link></Menu.Item>
					</SubMenu> */}
					<SubMenu key="blog" title={<span><Icon type="book"/><span>博客</span></span>}>
						<Menu.Item key="learn"><Link to="/learn">学习</Link></Menu.Item>
						<Menu.Item key="article"><Link to="/article">日志</Link></Menu.Item>
						<Menu.Item key="album"><Link to="/album">相册</Link></Menu.Item>
						<Menu.Item key="think"><Link to="/think">说说</Link></Menu.Item>
						{/* <Menu.Item key="plan"><Link to="/plan">打卡记录</Link></Menu.Item> */}
						{/* <Menu.Item key="app"><Link to='/blog/app'>APP下载</Link></Menu.Item> */}
					</SubMenu>
				</Menu>
			</div>
		);
	}
}