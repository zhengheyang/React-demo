import React, {Component} from 'react';
import mainImg from './city_beijing.jpg';
import gzImg from './city_guangzhou.jpg';
import shImg from './city_shanghai.jpg';
import tbImg from './city_taibei.jpg';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main-box">
                <div className="main-content">
                    <div className="img-box">
                        <img src={mainImg} alt="beijing"/>
                    </div>
                    <div className="content">
                        <h2>北京总部</h2>
                        <p>总部位于北京，分别在上海，广州以及台北设立了办公室，随时欢迎您的来访。您也可以发送邮件给我们，让合作更愉快发生</p>
                        <p>联系我们：ella.li@centrixlink.com</p>
                        <p>地址：北京市东城区贡院西路6号E座7层</p>
                        <h3>李蕊Ella</h3>
                        <p>邮箱：ella.li@centrixlink.com</p>
                        <p>QQ:11396577</p>
                    </div>
                </div>
                <div className="office">
                    <div className="section">
                        <div><img src={gzImg} alt="guangzhou"/></div>
                        <h4>广州办公室</h4>
                        <p>广州市天河区金橞路62号乔欣国际24楼</p>
                    </div>
                    <div className="section">
                        <div><img src={shImg} alt="shanghai"/></div>
                        <h4>上海办公室</h4>
                        <p>上海市西藏南路222号永银大厦L2</p>
                    </div>
                    <div className="section">
                        <div><img src={tbImg} alt="taibei"/></div>
                        <h4>台北办公室</h4>
                        <p>台北市中山区建国北路一段80号10</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;